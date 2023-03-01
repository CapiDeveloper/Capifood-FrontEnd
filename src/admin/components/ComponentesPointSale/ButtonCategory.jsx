import { useDispatch,useSelector } from "react-redux"
import { filterByCategoryPointSale } from "../../../store/inventario/inventarioSlice";

export const ButtonCategory = ({categoria}) => {

  const {filtroProductos,filtroProducto} = useSelector(state=>state.inventario);
  const dispatch = useDispatch();

  const onChangeProducts = (filtro)=>{
      dispatch(filterByCategoryPointSale(filtro.nombre));
  }

  return (
    <button disabled={(filtroProducto?.length > 0)?true:false} onClick={()=>onChangeProducts(categoria)} type="button" className={`${filtroProductos[0]?.id_categoria === categoria.nombre?'bg-blue-500':'bg-primario'} flex items-center gap-2 rounded-lg p-2 text-white font-semibold`}>
        <svg  width={30} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.15 25.66"><title>categoria</title><path d="M17.53,5.42,5.89,17.32a.83.83,0,0,0-.15,1.15L14,26.58a.84.84,0,0,0,1.15-.17L26.82,14.5a1.1,1.1,0,0,0,.32-.62L28.49,3.64,18.15,5.09A1.08,1.08,0,0,0,17.53,5.42Z" transform="translate(-0.51 -2.08)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/><path d="M13.46,5,1.83,16.94a.83.83,0,0,0-.15,1.15L10,26.2A.84.84,0,0,0,11.12,26l11.64-11.9a1.1,1.1,0,0,0,.32-.62L24.43,3.26,14.08,4.71A1.11,1.11,0,0,0,13.46,5Z" transform="translate(-0.51 -2.08)" fill="#fff" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/><ellipse cx="17.07" cy="10.64" rx="2.83" ry="2.59" transform="translate(-2.98 13.33) rotate(-45.65)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/></svg>
        <span>{categoria.nombre}</span>
    </button>
  )
}