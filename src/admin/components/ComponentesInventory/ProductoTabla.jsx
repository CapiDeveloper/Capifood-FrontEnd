import { useState } from "react";
import { useDispatch } from "react-redux";
import { toogleAvailableProduct } from "../../../store/inventario/thunks";

const ProductoTabla = ({producto,onShowFormActualizar,onDeleteProducto}) => {
   
    const dispatch = useDispatch();
    // Cambiar disponibilidad del producto
    const [disponible, setDisponible] = useState((producto?.disponible==1)?true:false)
  const onToogleState = (habilitado,id)=>{
    setDisponible(!disponible);
    dispatch(toogleAvailableProduct(habilitado,id));
  }
  return (
    <>
        <tr key={producto.id} className="bg-white border-b last-of-type:border-b-0">
            <td className="py-4 px-6">
                {producto.nombre}"
            </td>
            <td className="py-4 px-6">
                {producto.id_categoria}
            </td>
            <td className="py-4 px-6">
                {parseFloat(producto.precio)} $
            </td>
            <td className="py-4 px-6">
                <div className="flex gap-2">
                <button 
                    onClick={()=>onShowFormActualizar(producto)}
                    type="button" 
                    className="text-sm font-bold py-1 px-2 rounded-lg bg-primario 
                    hover:bg-blue-800 text-white"
                >
                    Actualizar
                </button>
                <button
                    onClick={()=>onDeleteProducto({id:producto.id,imagen:producto.imagen})}
                    className="text-sm font-bold py-1 px-2 rounded-lg bg-red-500 
                hover:bg-red-600 text-white" 
                    type="button">
                    Eliminar
                </button>
                </div>
            </td>
            <td>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" onChange={(e)=>onToogleState(e.target.checked,producto?.id)} value={disponible} className="sr-only peer" checked={disponible} />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
            </td>
        </tr>
    </>
  )
}

export default ProductoTabla