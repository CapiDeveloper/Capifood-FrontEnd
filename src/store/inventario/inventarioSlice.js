import { createSlice } from '@reduxjs/toolkit';

export const inventarioSlice = createSlice({
    name: 'inventario',
    initialState: {
        isLoading:false,
        telefono:'',
        productos: [],
        categorias:[],
        filtroProductos: [],
        filtroProducto:[],
        errorMessaje:null,
        successMessaje:null
    },
    reducers: {
        loading:(state)=>{
            state.isLoading = true;
        },
        updateToogleAvailable: (state, {payload})=>{
            state.productos = state.productos.map(producto=>{
                if(producto.id == payload.id){
                    if(payload.disponible == true){
                        producto.disponible = 1;
                    }else{
                        producto.disponible = 0;
                    }
                    return producto
                }
                return producto;
            })
            state.filtroProductos = state.filtroProductos.map(producto=>{
                if(producto.id == payload.id){
                    if(payload.disponible == true){
                        producto.disponible = 1;
                    }else{
                        producto.disponible = 0;
                    }
                    return producto
                }
                return producto;
            })
        },
        getInventoryAPI: (state, {payload} ) => {
            state.isLoading = false;
            state.errorMessaje=null;
            state.categorias = payload.categorias ??[];
            state.productos = payload.productos ?? [];
            state.telefono = payload.telefono ?? '';

        },
        addCategory: (state,{payload})=>{
            state.categorias = [payload,...state.categorias];
            state.errorMessaje=null;
            state.isLoading = false;
            state.successMessaje = 'Categoria creada correctamente';
        },
        addProducto: (state,{payload})=>{

            state.productos = [payload,...state.productos];
            
            state.filtroProductos = [ payload,...state.filtroProductos];

            state.successMessaje = 'Producto creado correctamente';
            state.errorMessaje=null;
            state.isLoading = false;
            
        },
        updateProducto: (state,{payload})=>{

            state.productos = state.productos.map(producto=>{
                if(producto.id == payload.id){
                    return payload;
                }
                return producto;
            });
            state.filtroProductos = state.filtroProductos.map(producto=>{
                if(producto.id == payload.id){
                    return payload;
                }
                return producto;
            });
            
            state.successMessaje = 'Producto actualizado correctamente';
            state.errorMessaje=null;
            state.isLoading = false;
        },
        deleteProducto: (state,{payload})=>{
            state.productos = state.productos.filter(producto=>producto.id != payload);
            state.filtroProductos = state.filtroProductos.filter(producto=>producto.id != payload);
            state.errorMessaje=null;
            state.isLoading = false;
            state.successMessaje = 'Producto eliminado correctamente';
        },
        errorChangeInventory: (state, {payload})=>{
            state.isLoading = false;
            state.errorMessaje = payload;
        },
        cleanErrorChangeInventory: (state)=>{
            state.errorMessaje=null;
            state.isLoading = false;
        },
        cleanSuccessMessaje: (state)=>{
            state.successMessaje = null;
        },
        filterByCategory: (state,{payload})=>{
            state.filtroProductos = state.productos.filter(producto=>producto.id_categoria == payload );    
        },
        filterByCategoryPointSale: (state,{payload})=>{
            state.filtroProductos = state.productos.filter(producto=>producto.disponible != 0).filter(producto=>producto.id_categoria == payload );
        },
        filterInventory: (state)=>{
            state.filtroProductos = state.productos;
        },
        filterProduct: (state,{payload})=>{
            state.filtroProducto = state.filtroProductos.filter(producto=>{
                if(producto.nombre.includes(payload)){
                    return producto;
                }else if(producto.nombre == null){
                    return producto;
                }
    
            });
        },
        clearProductsLogout: (state)=>{
            state.isLoading = false;
            state.productos =  [];
            state.categorias = [];
            state.filtroProductos =  [];
            state.filtroProducto = [];
            state.errorMessaje = null;
            state.successMessaje=null;
        }
    }
});

// Action creators are generated for each case reducer function
export const { loading,filterByCategoryPointSale, updateToogleAvailable,getInventoryAPI,addCategory,addProducto,updateProducto,deleteProducto,errorChangeInventory,cleanErrorChangeInventory,cleanSuccessMessaje,filterByCategory,filterInventory,filterProduct,aggregateProducts,clearProductsLogout } = inventarioSlice.actions;