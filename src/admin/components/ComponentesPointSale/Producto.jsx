import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/orden/ordenSlice";

export const Producto = ({producto}) => {

    const dispatch = useDispatch();

    const onAddOrden = useCallback((e)=>{

        let producto = {...e,cantidad:1};
        dispatch(addProduct(producto));
        
    },[]);
    
    return (
        <article onClick={()=>onAddOrden(producto)} className={`mx-auto mb-1 bg-white shadow-md cursor-pointer hover:bg-blue-100 flex flex-col items-center p-3 rounded-lg w-32 h-min`}>
            <div>
                <img className={'w-20 h-20'}  src={producto.imagen?`${import.meta.env.VITE_BACKEND_URL}public/imagenes/${producto?.imagen}`:''}/>
            </div>
            <div className="p-2">
                <p className="font-bold text-principal">{producto.nombre}</p>
                <p className="font-bold text-primario">{parseFloat(producto.precio).toFixed(2)} $</p>
            </div>
        </article>
    )
}