import { useDispatch } from "react-redux"
import { decrement, increment, removeProduct } from "../../../store/orden/ordenSlice";

export const OrdenProducto = ({producto}) => {

    const dispatch = useDispatch(); 
    
    // Quitar producto de orden
    const onRemoveProduct = (idProducto)=>{
        
        dispatch(removeProduct(idProducto));
    }

    // Incrementar cantidad de producto
    const onIncrement = (id)=>{
        dispatch(increment(id));
    }

    // Decrementar cantidad de producto
    const onDecrement = (id)=>{
        dispatch(decrement(id));
    }

  return (
    <li className="flex gap-2 sm:gap-5 md:gap-5 mb-2 border-b-2 border-dashed border-gray-300 pb-1">
        <img className="w-10 h-10 sm:w-14 sm:h-14 md:m-auto"  src={`${(producto?.imagen != null)? import.meta.env.VITE_BACKEND_URL+'public/imagenes/'+producto?.imagen:'data:image/png;base64,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'}`}/>
        <div className="flex-1">
            <p className="font-semibold text-principal">{producto.nombre}</p>
            <p className="font-bold text-primario">{producto.precio} $</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className="w-full flex justify-end">
                <svg 
                    onClick={()=>onRemoveProduct(producto.id)}
                    className="cursor-pointer" 
                    width={20} height={20} 
                    id="Capa_1" data-name="Capa 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 14.75 14.47">
                    <title>Eliminar producto</title>
                    <rect x="4.12" y="0.5" width="6.87" 
                    height="5.07" rx="1.76" fill="none"
                    stroke="#000" strokeMiterlimit="10"/>
                    <path d="M2.13,3.56l.48,9.22a1.52,1.52,0,0,0,1.53,1.45h7.08a1.52,1.52,0,0,0,1.53-1.45l.48-9.22Z" transform="translate(-0.13 -0.27)" 
                    fill="#fff" stroke="#000" strokeMiterlimit="10"/>
                    <line x1="5.84" y1="4.9" x2="5.84" y2="12.37" 
                    fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="9.34" y1="4.9" x2="9.34" y2="12.37" fill="none" 
                    stroke="#000" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="0.5" y1="3.3" x2="14.25" y2="3.3" fill="none" 
                    stroke="#000" strokeLinecap="round" 
                    strokeMiterlimit="10"/>
                </svg>
            </div>
            <div className="flex gap-2 font-bold">
                <button 
                    className="text-white bg-primario px-2"
                    onClick={()=>onDecrement(producto.id)}
                >
                -
                </button>
                {producto.cantidad}
                <button 
                    className="text-white bg-primario px-2"
                    onClick={()=>onIncrement(producto.id)}
                >
                +
                </button>
            </div>
        </div>
    </li>
  )
}