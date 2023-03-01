import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { createSaleConditionalPublic } from "../../store/invoice";

const ModalVenta = ({showModal,setShowModal,setShowOrden}) => {

    const location = useLocation();
    const nombreNegocio = location.pathname.split('/')[2]?.toUpperCase().replaceAll('-', ' ');

    const [formState, setFormState] = useState({
        mesa: showModal.tipo,
        mensaje:'',
        ciudad:'',
        direccion:'',
        telefono:'',
        cliente:'',
        nombreNegocio:nombreNegocio
    });
    
    const dispatch = useDispatch();
    const { orden } = useSelector(state=>state.orden);
    const [showError, setShowError] = useState({valido:false,mensaje:''});

    useEffect(() => {
      setFormState({
        ...formState,
        mesa:showModal.tipo
      });
    }, [showModal.tipo]);
    
    const onInputChange = ({target})=>{
        setFormState({
            ...formState,
            [target.name]:target.value
        });
    }

    const onHandleSubmit = (e)=>{
        e.preventDefault();
        if([formState?.cliente,formState.telefono].includes('')) return setShowError({valido:true,mensaje:'Todos los campos son obligatorios'});
        if (showModal?.tipo === 'A domicilio'){
            if([formState.ciudad,formState.direccion].includes('')) return setShowError({valido:true,mensaje:'Todos los campos son obligatorios'});
        }
        if(formState?.telefono?.trim().length != 10) return setShowError({valido:true,mensaje:'Numero de telefono incorrecto'});
        dispatch(createSaleConditionalPublic({formState}));
        setShowModal({mostrar:false,tipo:''});
        setShowError({valido:false,mensaje:''});
        setShowOrden(false);
        setFormState({
            mesa:'',
            mensaje:'',
            ciudad:'',
            direccion:'',
            telefono:'',
            cliente:'',
            nombreNegocio:nombreNegocio
        });
    }

    return (
    <>
        <div className={`${!(showModal.mostrar && orden?.length
             >0) &&'hidden'} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-black bg-opacity-75 md:h-full`}>
            <div className="mx-auto relative w-full h-min max-w-md mb-20">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={()=>setShowModal({mostrar:false,tipo:''})} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{showModal?.tipo}</h3>
                        <form onSubmit={onHandleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="cliente" className="block mb-1 text-base font-medium text-gray-900 dark:text-white">Nombres: </label>
                                <input onChange={onInputChange} value={formState.cliente} type="text" name="cliente" id="cliente" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ejemplo: Bryan Chacha" required />
                            </div>
                            <div>
                                <label htmlFor="telefono" className="block mb-1 text-base font-medium text-gray-900 dark:text-white">Telefono: </label>
                                <input onChange={onInputChange} value={formState.telefono} type="number" min={0} name="telefono" id="telefono" placeholder="Numero de contacto" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            {
                                (showModal?.tipo !== 'Para llevar')&&
                                <>
                                    <div>
                                        <label htmlFor="ciudad" className="block mb-1 text-base font-medium text-gray-900 dark:text-white">Ciudad: </label>
                                        <input onChange={onInputChange} value={formState.ciudad} type="text" name="ciudad" id="ciudad" placeholder="Numero de ciudad" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label htmlFor="direccion" className="block mb-1 text-base font-medium text-gray-900 dark:text-white">Direccion: </label>
                                        <input onChange={onInputChange} value={formState.direccion} type="text" name="direccion" id="direccion" placeholder="Numero de direccion" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                </>
                            }
                            <div>
                                <label htmlFor="mensaje" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Mensaje (opcional): </label>
                                <textarea id="mensaje" name="mensaje" value={formState.mensaje} onChange={onInputChange} rows="4" className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe tu mensaje aqui..." ></textarea>
                            </div>
                            {
                                showError?.valido&&
                                <div className="bg-red-100 rounded-lg py-1 px-2 text-base text-red-700 flex gap-x-2 items-center w-full">
                                    <svg  className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                                    </svg>
                                    {showError.mensaje}
                                </div>
                            }
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Finalizar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalVenta
