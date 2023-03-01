import { createSlice } from '@reduxjs/toolkit';

export const ordenSlice = createSlice({
    name: 'orden',
    initialState: {
        orden: [],
        subtotal:0,
        total:0
    },
    reducers: {
        addProduct: (state,{payload})=>{
            // Si ya existe ya no agregamos producto en la orden
            if(!state.orden.some(producto=>producto.id == payload.id)){
                
                state.orden =  [payload,...state.orden];
                state.subtotal = state.orden.reduce((acc,item)=>{
                    return acc += item.cantidad * item.precio;
                },0)
                state.total = state.subtotal;
            };

        },
        removeProduct: (state,{payload})=>{
            state.orden = state.orden.filter(producto=> producto.id != payload);
            state.subtotal = state.orden.reduce((acc,item)=>{
                return acc += item.cantidad * item.precio;
            },0)
            state.total = state.subtotal;
        },
        calculatorSinIva: (state)=>{
            state.total = state.subtotal
        },
        increment: (state,{payload}) => {
            state.orden = state.orden.map(producto=>{
                if(producto.id == payload){
                    producto.cantidad += 1;
                    return producto;
                }
                return producto;
            });
            state.subtotal = state.orden.reduce((acc,item)=>{
                return acc += item.cantidad * item.precio;
            },0)
            state.total = state.subtotal;
        },

        decrement: (state,{payload})=>{
            state.orden = state.orden.map(producto=>{
                if(producto.id == payload && producto.cantidad > 1){
                    producto.cantidad -= 1;
                    return producto;
                }
                return producto;
            });
            state.subtotal = state.orden.reduce((acc,item)=>{
                return acc += item.cantidad * item.precio;
            },0)
            state.total = state.subtotal;
        },
        clearOrden: (state)=>{
            state.orden =  [];
            state.subtotal = 0;
            state.total = 0;
        }
    }
});

// Action creators are generated for each case reducer function
export const { addProduct,removeProduct,calculatorSinIva,clearOrden,increment,decrement } = ordenSlice.actions;