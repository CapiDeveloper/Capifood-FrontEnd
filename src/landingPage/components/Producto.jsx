import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/orden/ordenSlice";

const Producto = ({producto}) => {

  const dispatch = useDispatch();

  const onAddOrden = useCallback((e)=>{
      let producto = {...e,cantidad:1};
      dispatch(addProduct(producto));
      
  },[]);

  return (
    <article className={`mx-auto mb-1 bg-white shadow-md border cursor-pointer w-full flex flex-row items-center p-3 rounded-lg`}>
        <div>
            <img className={'w-10 md:w-20 h-10 md:h-20'}  src={producto.imagen?`${import.meta.env.VITE_BACKEND_URL}public/imagenes/${producto?.imagen}`:''}/>
        </div>
        <div className="p-2 flex-1">
            <p className="font-bold text-principal text-sm md:text-base">{producto.nombre}</p>
            <p className="font-normal text-principal text-xs md:text-sm">{producto.descripcion}</p>
            <div className="flex flex-col sm:flex-row justify-between w-full">
                <p className="font-bold text-primario">{parseFloat(producto.precio).toFixed(2)} $</p>
                <button onClick={()=>onAddOrden(producto)} className="w-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded text-sm">
                    Agregar
                </button>
            </div>
        </div>
    </article>
  )
}

export default Producto