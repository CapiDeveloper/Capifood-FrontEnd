import { capiFoodApi } from "../../api/capiFoodApi"
import { getRestaurants, errorSave,saveRestaurant, isLoading, successSave,getUsuarios } from "./ownerSlice";

export const getUsuariosAPI = ()=>{
    return async(dispatch,getState)=>{

        const {id,user_tipo,nombre} = getState().auth;
        dispatch(isLoading());

        try {
            const {data} = await capiFoodApi.get(`informacion-usuarios?id=${id}&user_tipo=${user_tipo}&nombre=${nombre}`);
            if(!data.valido) return  dispatch(errorSave(!data.valido));
            dispatch(getUsuarios({usuarios:data?.usuarios,categorias:data?.categorias}));
        } catch (error) {
            dispatch(errorSave(!data?.valido));
        }
    }
}

export const getRestaurantes = ()=>{
    return async(dispatch,getState)=>{

        const {id,user_tipo,nombre} = getState().auth;

        dispatch(isLoading());

        try {
            const {data} = await capiFoodApi.get(`informacion-restaurantes?id=${id}&user_tipo=${user_tipo}&nombre=${nombre}`);

            if(!data.valido) return  dispatch(errorSave(!data.valido));
            dispatch(getRestaurants(data));
        } catch (error) {
            dispatch(errorSave(!data.valido));
        }
    }
}

export const createRestaurant = (formState)=>{
    return async(dispatch)=>{

    const datos = new FormData();
    datos.append('nombre',formState.nombre);
    datos.append('descripcion',formState.descripcion);
    datos.append('ciudad',formState.ciudad);
    datos.append('direccion',formState.direccion);
    datos.append('telefono',formState.telefono);
    datos.append('logo',formState.logo);
    datos.append('ruc',formState.ruc);
    datos.append('capacidad',formState.capacidad);
    datos.append('internet',formState.internet);
    datos.append('delivery',formState.delivery);
    datos.append('llevar',formState.llevar);
    datos.append('id_usuario',formState.usuario);
    datos.append('id_categoria',formState.categoria);

    dispatch(isLoading(true));

    try {
        const {data} = await capiFoodApi.post('crear-restaurante',datos);
        console.log(data);
        dispatch(isLoading(false));

        // En caso de que exista un error
        if(data?.valido){
            // Se guardo el restaurante correctamente
            dispatch(saveRestaurant({restaurante: formState,message:data?.resultado}));
        }else{
            dispatch(errorSave({...data}));
        }
    
        return;
    } catch (error) {
        dispatch(errorSave({valido:true,message:'Comunicar a soporte'}));
        return;
    }
    
    }
}

export const createUser = (formState)=>{
    return async(dispatch)=>{

        const datos = new FormData();
        datos.append('nombre',formState.nombre);
        datos.append('email',formState.email);
        datos.append('password',formState.password);
        datos.append('cedula',formState.cedula);
        
        dispatch(isLoading(true));

        try {
            const {data} = await capiFoodApi.post('crear-usuario',datos);
            dispatch(isLoading(false));

            if (!data.valido) {
                dispatch(errorSave(data));
                return;   
            }
            dispatch(successSave(data));
            
        } catch (error) {
            dispatch(errorSave(error))
        }
    }
}