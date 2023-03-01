import { createSlice } from '@reduxjs/toolkit';

export const ownerSlice = createSlice({
    name: 'owner',
    initialState: {
        isLoading:false,
        restaurantes:[],
        usuarios:[],
        categorias:[],
        message:null, // trabajar en un futuro
        error:null
    },
    reducers: {
        isLoading: (state,{payload})=>{
            state.isLoading = payload;
        },

        getRestaurants: (state, {payload} ) => {
            state.isLoading = false;
            state.restaurantes = payload;
        },
        getUsuarios: (state,{payload})=>{
            state.isLoading = false;
            state.usuarios = payload.usuarios;
            state.categorias = payload.categorias;
        },
        saveRestaurant: (state,{payload})=>{
            state.message = payload.message;
            state.restaurantes = [payload.restaurante,...state.restaurantes];
        },
        errorSave:(state,{payload})=>{
            state.isLoading = false;
            state.error = true;
            state.message = payload?.resultado;
        },
        successSave:(state,{payload})=>{
            state.isLoading = false;
            state.error = false;
            state.message = payload?.resultado;
        },
        logout: (state)=>{
            state.isLoading=false;
            state.restaurantes=[];
            state.usuarios=[];
            state.message=null;
            state.error=null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { getRestaurants,errorSave,saveRestaurant,isLoading,successSave,getUsuarios,logout } = ownerSlice.actions;