import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { createCategory } from "../../../store/inventario/thunks";
import { Alerta } from "../../../ui/componentes/Alerta";

const formData = {
    nombre:'',
    descripcion:''
}

export const AgregarCategoria = ({mostrarFormCategory,cancelButton}) => {

    const {nombre,descripcion,onInputChange,isFormValid,onResetForm,formState} = useForm(formData);
    const [alerta, setAlerta] = useState(false);

    const { categorias } = useSelector(state=>state.inventario)
    const dispatch = useDispatch();

    const onShowForm = ()=>{
        onResetForm();
        cancelButton(state=>!state);
    }

    const onHandleSubmit = (e)=>{
        e.preventDefault();

        if(isFormValid) return;

        if(categorias?.some(categoria => categoria.nombre == nombre.trim())){
            setAlerta(true);
            return;
        };

        dispatch(createCategory(formState));
        //Guardar en backend y en store del inventario
        
        onResetForm();
        cancelButton(state=>!state);
    }

  return (
    <section className={`absolute flex justify-center items-center top-0 right-0 bg-opacity-70 z-20 bg-gray-500 ${!mostrarFormCategory?'hidden':'h-full w-full'}`} >
        <form onSubmit={onHandleSubmit} className="opacity-100 md:w-4/5 bg-white p-2 rounded-md shadow-lg">
            <legend className="text-center font-bold text-xl text-principal">Agregar categoria</legend>
            <fieldset className="mt-2 flex flex-col md:flex-row md:gap-x-5 items-center justify-between">
                <div className=" w-full flex flex-col">
                    <label className="text-principal font-semibold" htmlFor="nombre">Nombre: </label>
                    <input
                        value={nombre}
                        onChange={onInputChange}
                        className="p-1 shadow-md border-2 border-gray-400 rounded-md" 
                        name="nombre" type="text" id="nombre" 
                        placeholder="Nombre de la categoria" 
                        required={true}
                    />
                </div>
                <div className="w-full flex flex-col">
                    <label className="text-principal font-semibold" htmlFor="descripcion">Descripcion: </label>
                    <input
                        onChange={onInputChange}
                        value={descripcion}
                        className="p-1 shadow-md border-2 border-gray-400 rounded-md" 
                        name="descripcion" type="text" id="descripcion" 
                        placeholder="Descripcion de la categoria" 
                        required={true}
                    />
                </div>
            </fieldset>
            <div className="w-full mt-5 flex flex-col md:flex-row gap-y-3 md:gap-x-2 md:justify-end">
                {
                    alerta&&
                    <Alerta mensaje={'La categoria ya existe ⚠️'} />
                }
                <input disabled={isFormValid} type="submit" className={`${isFormValid?'cursor-not-allowed':'cursor-pointer'} md:w-auto w-full text-sm font-bold py-2 px-3 rounded-lg bg-primario hover:bg-blue-800 text-white`} value='Crear categoria' />
                <button
                    onClick={onShowForm}
                    className="md:w-auto w-full text-sm font-bold py-2 px-3 rounded-lg 
                    bg-red-500 hover:bg-red-600 text-white" 
                    type="button">
                    Cancelar
                </button>
            </div>
        </form>
    </section>
  )
}