import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { cleanErrorMessage, cleanSuccessMessage, createSaleConditional } from "../../../store/invoice";
import { clearOrden } from "../../../store/orden/ordenSlice";

// Sweet alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const data = {
    mesa:'',
    mensaje:'',
    ciudad:'',
    direccion:'',
    telefono:'',
    cliente:'Consumidor final'
}
export const CalculatorOrden = () => {
    
    const dispatch = useDispatch();
    const {total,orden} = useSelector(state=>state.orden);
    const {formState,mesa,onInputChange,isFormValid} = useForm(data);
	const {successMessage,errorMessage} = useSelector(state=>state.invoice);
    // Alertas
    // Ejecuta si se guardo correctamente
    useEffect(() => {
        if(successMessage !== null && successMessage){
            const MySwal = withReactContent(Swal);
            MySwal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            });
            MySwal.fire({
              icon: 'success',
              title: successMessage
            });
            // Limpiar successMessaje
            dispatch(cleanSuccessMessage());
            dispatch(clearOrden());
          }
      
    }, [successMessage]);
    
    // Ejecuta si se no se guardo correctamente
    useEffect(() => {
        if(errorMessage !== null && errorMessage){
            const MySwal = withReactContent(Swal);
            MySwal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
            MySwal.fire({
                icon: 'error',
                title: errorMessage
            });
                // Limpiar ErrorMessage
                dispatch(cleanErrorMessage());
        }
      
    }, [errorMessage]);

    const onHandleSubmit = (e)=>{
        e.preventDefault();
        if(mesa == '' || orden?.length == 0 || total == 0)return;
        dispatch(createSaleConditional({formState}));
    }
  return (
    <form onSubmit={onHandleSubmit} className="bg-primario p-4 flex flex-col gap-2 w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <label className='flex-1 font-semibold text-white' htmlFor="mensaje">Mesa:</label>
            <input className='w-min p-1 rounded-lg' onChange={onInputChange} value={mesa} type="number" placeholder='Ejemplo: 1' min={0} id='mesa' name='mesa' />
        </div>
        <div className="flex justify-between pt-2">
            <p className="font-bold text-white text-xl">Total</p>
            <p className="font-bold text-white text-xl">{parseFloat(total).toFixed(2)} $</p>
        </div>
        <button  type={"submit"} className="md:w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Crear Venta
        </button>
    </form>
  )
}