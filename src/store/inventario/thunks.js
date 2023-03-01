import { capiFoodApi } from "../../api/capiFoodApi";
import { addCategory, addProducto, deleteProducto, errorChangeInventory, getInventoryAPI, loading, updateProducto, updateToogleAvailable } from "./inventarioSlice"

export const startInventoryBusiness = (nombre)=>{
    return async(dispatch)=>{
        try {
            dispatch(loading());
            const {data} = await capiFoodApi.get(`inventario-business?nombre=${nombre}`);

            if(data.valido == false) return dispatch(errorChangeInventory(data?.resultado));

            // logica para dar nombre a los id de id_categoria
            const productos = data.productos.map(producto=>{
                    
                data.categorias.map(categoria=>{
                    if(categoria.id == producto.id_categoria){  
                        return producto.id_categoria = categoria.nombre;
                    }
                });
                return producto;
            });

            dispatch(getInventoryAPI({productos,categorias: data.categorias,telefono:data?.telefono}));

        } catch (error) {
        }
    }
}

export const startLoadingInventory = ()=>{
    return async(dispatch,getState)=>{
        const { id } = getState().auth;
        const token = localStorage.getItem('capiFood_tk');
        
        try {
            const {data} = await capiFoodApi.get(`inventario?id=${id}&token=${token}`);
 
            if(!data.valido){
                dispatch(errorChangeInventory(data.resultado));
                return;
            }

            // logica para dar nombre a los id de id_categoria
            const productos = data.productos.map(producto=>{
                    
                data.categorias.map(categoria=>{
                    if(categoria.id == producto.id_categoria){  
                        return producto.id_categoria = categoria.nombre;
                    }
                });
                return producto;
            });

            dispatch(getInventoryAPI({productos,categorias: data.categorias,telefono:''}));
        } catch (error) {
            dispatch(errorChangeInventory('Ocurrio un problema, comunicar con soporte'))
        }
    }
}

export const createCategory = (formState={})=>{
    return async(dispatch,getState)=>{

        const { id,restaurante_id } = getState().auth;
        const token = localStorage.getItem('capiFood_tk');

        const datos = new FormData();
        datos.append('id_restaurante',restaurante_id);
        datos.append('nombre',formState?.nombre.toUpperCase());
        datos.append('descripcion',formState?.descripcion);
        datos.append('id_user',id);
        datos.append('token',token);
        try {
            const {data} = await capiFoodApi.post('crear-categoria',datos);
            if(!data.valido) return dispatch(errorChangeInventory(data,resultado));

            dispatch(addCategory(formState));
        } catch (error) {
            dispatch(errorChangeInventory('Algo salio mal, comunicarse con soporte'));
        }
    }
}

export const createProduct = ({formState,imagen})=>{
    return async(dispatch,getState)=>{

        // const imagenCloudinary = await fileUpload(imagen); ** posible a borrar
        // if(imagenCloudinary == null) return dispatch(errorChangeInventory('No se puede subir la imagen, comunicar con soporte'));
   
        const { id,restaurante_id } = getState().auth;
        const token = localStorage.getItem('capiFood_tk');

        const datos = new FormData();
        datos.append('nombre',formState?.nombre);
        datos.append('precio',formState?.precio);
        datos.append('descripcion',formState?.descripcion);
        datos.append('id_categoria',formState?.id_categoria);
        datos.append('imagen',imagen);
        datos.append('id_usuario',id);
        datos.append('id_restaurante',restaurante_id);
        datos.append('token',token);

        try {
            const {data} = await capiFoodApi.post('crear-producto',datos);

            if(!data.valido) return dispatch(errorChangeInventory(data.resultado));
            dispatch(addProducto(data.resultado));
            return data.valido;
        } catch (error) {
            dispatch(errorChangeInventory('Comunicarse son soporte'));
            return null;
        }
    }
}

export const updateProduct = (formState={})=>{
    return async(dispatch,getState)=>{

        const { id,restaurante_id } = getState().auth;
        const token = localStorage.getItem('capiFood_tk');

        const datos = new FormData();
        datos.append('id',formState?.id);
        datos.append('nombre',formState?.nombre);
        datos.append('precio',formState?.precio);
        datos.append('descripcion',formState?.descripcion);
        datos.append('id_categoria',formState?.categoria);
        datos.append('disponible',formState?.disponible);
        datos.append('id_usuario',id);
        datos.append('token',token);
        datos.append('restaurante_id',restaurante_id);

        try {
            const {data} = await capiFoodApi.post('actualizar-producto',datos);
            if(!data.valido) return dispatch(errorChangeInventory(data.resultado));
            dispatch(updateProducto(data.resultado));
        } catch (error) {
            dispatch(errorChangeInventory('Comunicarse son soporte'));
        }
    }
}

export const deleteProduct = (idProducto,imagen)=>{
    return async(dispatch,getState)=>{

        const { id } = getState().auth;
        const token = localStorage.getItem('capiFood_tk');
        try {
            const {data} = await capiFoodApi.get(`eliminar-producto?id_usuario=${id}&id_producto=${idProducto}&token=${token}`);

            if(!data.valido) return dispatch(errorChangeInventory(data.resultado));
            dispatch(deleteProducto(idProducto));

        } catch (error) {
            dispatch(errorChangeInventory('Comunicarse son soporte'));
        }
    }
}

export const toogleAvailableProduct = (disponible,idProducto)=>{
    return async(dispatch,getState)=>{
        const { id } = getState().auth;
        const token = localStorage.getItem('capiFood_tk');
        const info = new FormData();

        info.append('disponible', disponible);
        info.append('idProducto', idProducto);
        info.append('id', id);
        info.append('token', token);
        try {
            const {data} = await capiFoodApi.post('cambiar-disponible',info);
            if(!data?.valido) return;
            // Actualizar los productos disponibles
            dispatch(updateToogleAvailable({id:idProducto,disponible}));
        } catch (error) {
        }
    }
}