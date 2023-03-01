import { capiFoodApi } from "../../api/capiFoodApi"
import { deleteVenta, errorChange, getVentaByCategory, getVentaProductosIndividuales, getVentas, loadingChange, saveSale, updateVentas } from "./invoiceSlice";

export const createSaleConditionalPublic = ({formState})=>{
    return async(dispatch,getState)=>{

        const { orden,total } = getState().orden;
        const datos = new FormData();
        // Datos para crear venta Sin cliente
        // ** fecha local

        const anio = (new Date().getFullYear());
        const mes = (new Date().getMonth() + 1) < 10?'0'+(new Date().getMonth() + 1):(new Date().getMonth() + 1);
        const dia = (new Date().getDate()) < 10?'0'+(new Date().getDate()):(new Date().getDate());

        datos.append('fecha',anio+'-'+mes+'-'+dia);

        //normal
        datos.append('hora',((new Date().getMinutes() < 10))?
                    `${(new Date().getHours() < 10)? '0'+new Date().getHours():new Date().getHours()}:${'0'+new Date().getMinutes()}`:
                    `${(new Date().getHours() < 10)? '0'+new Date().getHours():new Date().getHours()}:${new Date().getMinutes()}`);
        datos.append('total',total);
        datos.append('mes',new Date().getMonth()+1);
        datos.append('anio',new Date().getFullYear());
        datos.append('num_mesa',formState.mesa);
        datos.append('restaurante',formState.nombreNegocio);
        datos.append('forma_pago','1');
        datos.append('direccion',formState.direccion);
        datos.append('ciudad',formState.ciudad);
        datos.append('mensaje',formState.mensaje);
        datos.append('telefono',formState.telefono);
        datos.append('cliente',formState.cliente);

        // datos para crear detalle venta
        // 1. Agregamos propiedades necesarias
        const seleccionPropiedadesProductos = orden.map(producto=>({
            ...producto,
            producto_id : producto.id,
            monto_total : producto.cantidad * producto.precio,
            precio: parseFloat(producto.precio).toFixed(2),
        }));
        // 2.Eliminamos propiedades que no son necesarias y listo para enviar
        const productosVendidos = seleccionPropiedadesProductos.map(producto=>{
            delete producto.id;
            delete producto.id_usuario;
            delete producto.id_categoria;
            return producto;
        });
        //3. // Datos para detalle  listo
        datos.append('productos',JSON.stringify(productosVendidos));
        try {
            const {data} = await capiFoodApi.post('orden-venta-condicional-publico',datos);

            if(!data.valido) return dispatch(errorChange(data.resultado));
            dispatch(saveSale({productosVendidos:data.vendidos,cliente:data.clienteCreado}));
        } catch (error) {
            dispatch(errorChange('Algo salio mal, comunicar con soporte.'));
        }
    }
}

export const createSaleConditional = ({formState})=>{
    return async(dispatch,getState)=>{

        const { id,restaurante_id } = getState().auth;
        const { orden,total } = getState().orden;

        const token = localStorage.getItem('capiFood_tk');

        const datos = new FormData();
        // Datos para crear venta Sin cliente

        // ** fecha local
        const anio = (new Date().getFullYear());
        const mes = (new Date().getMonth() + 1) < 10?'0'+(new Date().getMonth() + 1):(new Date().getMonth() + 1);
        const dia = (new Date().getDate()) < 10?'0'+(new Date().getDate()):(new Date().getDate());
        datos.append('fecha',anio+'-'+mes+'-'+dia);

        datos.append('hora',((new Date().getMinutes() < 10))?
                    `${(new Date().getHours() < 10)? '0'+new Date().getHours():new Date().getHours()}:${'0'+new Date().getMinutes()}`:
                    `${(new Date().getHours() < 10)? '0'+new Date().getHours():new Date().getHours()}:${new Date().getMinutes()}`);
        datos.append('total',total);
        datos.append('mes',new Date().getMonth()+1);
        datos.append('anio',new Date().getFullYear());
        datos.append('num_mesa',formState.mesa);
        datos.append('id_restaurante',restaurante_id);
        datos.append('forma_pago','1');
        datos.append('direccion',formState.direccion);
        datos.append('ciudad',formState.ciudad);
        datos.append('mensaje',formState.mensaje);
        datos.append('telefono',formState.telefono);
        datos.append('cliente',formState.cliente);

        // Datos para validar que el usuario este validando
        datos.append('id_user',id);
        datos.append('token',token);

        // datos para crear detalle venta
        // 1. Agregamos propiedades necesarias
        const seleccionPropiedadesProductos = orden.map(producto=>({
            ...producto,
            producto_id : producto.id,
            monto_total : producto.cantidad * producto.precio,
            precio: parseFloat(producto.precio).toFixed(2),
        }));
        // 2.Eliminamos propiedades que no son necesarias y listo para enviar
        const productosVendidos = seleccionPropiedadesProductos.map(producto=>{
            delete producto.id;
            delete producto.id_usuario;
            delete producto.id_categoria;
            return producto;
        });
        //3. // Datos para detalle  listo
        datos.append('productos',JSON.stringify(productosVendidos));
        try {
            const {data} = await capiFoodApi.post('orden-venta-condicional',datos);
            if(!data.valido) return dispatch(errorChange(data.resultado));
            dispatch(saveSale({productosVendidos:data.vendidos,cliente:data.clienteCreado}));
        } catch (error) {
            dispatch(errorChange('Algo salio mal, comunicar con soporte.'));
        }
    }
}
export const getVentaCategoriasApi = ()=>{
    return async(dispatch,getState)=>{

        const { id,restaurante_id } = getState().auth;
        const token = localStorage.getItem('capiFood_tk');
        // Para que aparezca el spinner
        dispatch(loadingChange());
        try {
            const {data} = await capiFoodApi.get(`informacion-ventas-categoria?id_restaurante=${restaurante_id}&id=${id}&token=${token}`);

            if(!data.valido)return dispatch(errorChange());

            dispatch(getVentaByCategory([...data.ventas_Categoria]));

        } catch (error) {
            return dispatch(errorChange())
        } 
    }
}

export const getVentasProductosIndividualApi = ()=>{
    return async(dispatch,getState)=>{

        const { id,restaurante_id } = getState().auth;
        const token = localStorage.getItem('capiFood_tk');
        // Para que aparezca el spinner
        dispatch(loadingChange());
        try {
            const {data} = await capiFoodApi.get(`informacion-ventas-producto?id_restaurante=${restaurante_id}&id=${id}&token=${token}`);
            
            if(!data.valido)return dispatch(errorChange());
            
            const productoPorUnidad = data.ventas_unitarias.map(producto=>{
                producto.cantidad = parseInt(producto.cantidad);
                return producto;
            });

            dispatch(getVentaProductosIndividuales(productoPorUnidad));
        } catch (error) {
            dispatch(errorChange());
        }
    }
}

export const getVentasApi = ()=>{

    return async(dispatch,getState)=>{

        const { id,restaurante_id } = getState().auth;
        const token = localStorage.getItem('capiFood_tk');
        
        // Para que aparezca el spinner
        dispatch(loadingChange());
        
        try {
            const {data} = await capiFoodApi.get(`informacion-ventas?id_restaurante=${restaurante_id}&id=${id}&token=${token}`);

            if(!data.valido)return dispatch(errorChange());
            let idVenta = 0;
            let productos = [];
            
            for (let ventaIterar of data.resultado) {
                let venta = {...ventaIterar,productos:[ventaIterar]}
    
                if(idVenta !== ventaIterar.venta_id){
                    
                    productos = [venta,...productos];
            
                    idVenta = ventaIterar.venta_id;
                }else{
                    
                    productos.forEach((producto)=>{
                        if(producto.venta_id === idVenta){
                            producto['productos'] = [ventaIterar,...producto['productos']];
                        }
                    });
                }   
            }

            dispatch(getVentas({
                ventas:productos,
                individuales:[...data.resultado]
            }));

        } catch (error) {
            dispatch(errorChange());
        }

    }
}

export const changeStateSale = (id)=>{
    return async(dispatch, getState)=>{
        const { restaurante_id } = getState().auth;

        const info = new FormData();
        const token = localStorage.getItem('capiFood_tk');
        info.append('id',id);
        info.append('token',token);
        info.append('restaurante_id',restaurante_id);
        
        try {
            const {data} = await capiFoodApi.post('cambiar-estado-venta',info);

            if(!data.valido)return;
            // Actualizar ventas de manera local
            dispatch(updateVentas(data.id));
        } catch (error) {
        }
    }
}

export const deleteSale = (venta_id)=>{
    return async(dispatch, getState)=>{
        const { restaurante_id } = getState().auth;

        const info = new FormData();
        const token = localStorage.getItem('capiFood_tk');
        info.append('id',venta_id);
        info.append('token',token);
        info.append('restaurante_id',restaurante_id);
        
        try {
            const {data} = await capiFoodApi.post('eliminar-venta',info);
            if(!data.valido)return;
            // Actualizar ventas de manera local
            dispatch(deleteVenta(venta_id));
        } catch (error) {
        }
    }
}