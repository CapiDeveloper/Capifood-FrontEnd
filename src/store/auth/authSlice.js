import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
       status:'checking', // 'checking', 'not-authenticated', 'authenticated'
        id:null,
        nombre:null,
        token:null,
        user_tipo:null,
        restaurante_id:null,
        ciudad_negocio:null,
        direccion_negocio:null,
        logo_negocio:null,
        nombre_negocio:null,
        ruc_negocio:null,
        telefono_negocio:null,
        errorMessage:null
    },
    reducers: {
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        logout: (state,{payload})=>{
            state.status='not-authenticated';
            state.id=null;
            state.nombre=null;
            state.token=null;
            state.user_tipo=null;
            state.restaurante_id=null;
            state.ciudad_negocio=null;
            state.direccion_negocio=null;
            state.logo_negocio=null;
            state.nombre_negocio=null;
            state.ruc_negocio=null;
            state.telefono_negocio=null;
            state.errorMessage=payload ?? null;
        },
        login:(state,{payload})=>{
            state.status='authenticated';
            state.id=payload.id ?? null;
            state.nombre=payload.nombre ?? null;
            state.token=payload.token ?? null;
            state.user_tipo=payload.tipo ?? null;
            state.restaurante_id=payload.restaurante_id ?? null;
            state.ciudad_negocio=payload.ciudad_negocio ?? null;
            state.direccion_negocio=payload.direccion_negocio ?? null;
            state.logo_negocio=payload.logo_negocio ?? null;
            state.nombre_negocio=payload.nombre_negocio ?? null;
            state.ruc_negocio=payload.ruc_negocio ?? null;
            state.telefono_negocio=payload.telefono_negocio ?? null;
            state.errorMessage=null ?? null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { checkingCredentials, login, logout } = authSlice.actions;