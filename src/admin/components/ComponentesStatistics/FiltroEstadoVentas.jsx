import { useEffect } from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { filtrarEstadoVentas } from "../../../store/invoice/invoiceSlice";

const FiltroEstadoVentas = () => {

	const {filtroVentas} = useSelector(state=>state.invoice);
  const [estadoVenta, setEstadoVenta] = useState('0');
  const dispatch = useDispatch();
    // Filtrar estado ventas ** con la ayuda de un dispatch
    useEffect(() => {
      
      dispatch(filtrarEstadoVentas(estadoVenta));
    }, [estadoVenta,filtroVentas]);
        
  return (
    <form className="flex flex-col md:flex-row gap-5 mb-3 md:mb-0">
        <div className="flex items-center gap-2">
            <label className="text-principal" htmlFor="pendiente">Pendientes</label>
            <input checked={(estadoVenta == '0')&& true} type="radio" id="pendiente" name="estado" value='0' onChange={(e)=>setEstadoVenta(e.target.value)} />
        </div>
        <div className="flex items-center gap-2">
            <label className="text-principal" htmlFor="completado">Completadas</label>
            <input checked={(estadoVenta == '1')&& true} type="radio" id="completado" name="estado" value='1' onChange={(e)=>setEstadoVenta(e.target.value)} />
        </div>
    </form>
  )
}

export default FiltroEstadoVentas