import { useDispatch } from "react-redux"
import { changeStateSale, deleteSale } from "../../../store/invoice/thunks";
// Sweet alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const CardVenta = ({venta}) => {
    const dispatch = useDispatch();

    const onChangeState = (venta_id)=>{
        // Thunk para cambiar estado de la venta
        dispatch(changeStateSale(venta_id));
    }
    const onDeleteSale = (venta_id)=>{
        const MySwal = withReactContent(Swal);

        MySwal.fire({
        title: '¿Eliminar venta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Eliminar producto
                dispatch(deleteSale(venta_id));
            };
        })
        return;
    }
    return (
    <article key={venta.id} className={`${(venta?.estado=='1')?'bg-blue-600':'bg-orange-500'} relative rounded-lg p-1 h-full flex flex-col`}>
        {
            venta.productos.map(producto=>(
                <div key={producto.id} className={`${(venta?.estado=='1')?'bg-blue-500':'bg-orange-600'} rounded-lg text-white font-semibold p-2 mb-1`}>
                    <p className={`${(venta?.estado=='1')?'text-blue-200':'text-orange-200'}`}>Producto: <span className="text-blue-50">{producto.nombre}</span></p>
                    
                    <p className={`${(venta?.estado=='1')?'text-blue-200':'text-orange-200'}`}>Cantidad: <span className="text-blue-50">{producto.cantidad}</span></p>
                    <p className={`${(venta?.estado=='1')?'text-blue-200':'text-orange-200'}`}>Precio Unitario: <span className="text-blue-50">{producto.precio} $</span></p>
                </div>
            ))
        }
        <div className="flex-1 flex flex-col justify-between">
            <div className="md:flex items-center gap-2">
                <div className="md:flex-1">
                    <p className="text-white font-semibold">🧑🏻 Cliente: {venta.cliente?venta.cliente:'Consumidor final'}</p>
                    <p className="text-white font-semibold">🛎️ Mesa: {venta.num_mesa}</p>
                    <p className="text-white font-semibold">⏰ Hora: {venta.hora}</p>
                    {
                        (venta?.direccion !='' && venta?.ciudad !='')&&
                        <div>
                            <p className="text-white font-semibold">🌆 Ciudad: {venta.ciudad}</p>
                            <p className="text-white font-semibold">📍 Direccion: {venta.direccion}</p>
                        </div>
                    }
                    {
                        (venta.mensaje != '') &&
                        <div className="mb-1 rounded-lg flex items-center bg-orange-300 text-orange-800 text-sm font-bold px-2 py-1" role="alert">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                            <p>{venta.mensaje}</p>
                        </div>
                    }
                    <p className="md:hidden text-white font-semibold">💸 Total: {venta.total} $</p>
                </div>
                <div className="hidden md:block">
                    <p className="font-semibold text-5xl text-white">{venta.total} $</p>
                </div>
            </div>
            {
                (venta.num_mesa == 'Para llevar' || venta.num_mesa == 'A domicilio')&&
                <>
                    <div className="py-1 px-2 rounded-lg bg-blue-500 text-white absolute -top-4 right-0 font-semibold">
                        {venta?.num_mesa}
                    </div>
                    <a className="text-white font-semibold flex items-center gap-2 mb-2" href={`https://wa.me/+593${venta?.telefono}/?text=Hola%20${venta?.cliente},%20hemos%20recibido%20una%20notificacion%20de%20una%20venta.%20Por%20favor%20confirmenos%20si%20desea%20realizar%20la%20compra%20que%20ordeno.`} target="_blank" >
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px" fillRule="evenodd" clipRule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"/></svg>
                        <p>{venta?.telefono}</p>
                    </a>
                </>
            }
            {
                // Boton actualizar
                (venta?.estado=='0')&&
                <div className="flex-1 h-full flex flex-col md:flex-row  items-end gap-3">
                    <button onClick={()=>onChangeState(venta.venta_id)} className="w-full h-min rounded-lg font-bold bg-orange-200 hover:bg-orange-400 text-orange-500 hover:text-orange-50 p-2">Completar</button>
                    <button onClick={()=>onDeleteSale(venta.venta_id)} className="w-full h-min rounded-lg font-bold bg-red-600 hover:bg-red-800 text-orange-50 hover:text-orange-50 p-2">Eliminar</button>
                </div>
            }
        </div>

    </article>
  )
}

export default CardVenta