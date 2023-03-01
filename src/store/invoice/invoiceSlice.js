import { createSlice } from '@reduxjs/toolkit';

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: {
        isLoading:false,
        clientes:[],
        formas_pago:[],
        errorMessage:null,
        successMessage:null,
        ventas:[],
        ventasUnitarias:[],
        ventasUnitariasFiltros:[],
        filtroVentas:[],
        ventasProductoUnitarias:[],
        ventasProducto:[],
        ventasCategoria:[],
        productosVendidos:null,
        dineroVentas:null,
        filtroEstadoVentas:[]
    },
    reducers: {
        deleteVenta:(state,{payload})=>{
            state.filtroVentas = state.filtroVentas.filter(venta=>venta.venta_id != payload);
            state.ventas = state.ventas.filter(venta=>venta.venta_id != payload);
        },
        updateVentas:(state,{payload})=>{
            state.filtroVentas = state.filtroVentas.map(venta=>{
                if(venta.venta_id === payload){
                    venta.estado = '1'
                    return venta;
                }
                return venta;
            });
            state.ventas = state.ventas.map(venta=>{
                if(venta.venta_id === payload){
                    venta.estado = '1'
                    return venta;
                }
                return venta;
            });
        },
        filtrarEstadoVentas:(state,{payload})=>{
            state.filtroEstadoVentas = state.filtroVentas.filter(venta=> venta?.estado == payload)
        },
        getVentas:(state,{payload})=>{
            state.ventas = payload.ventas;
            state.ventasUnitarias = payload.individuales.map(venta=>{
                venta.cantidad = parseInt(venta.cantidad);
                venta.monto_total = parseFloat(venta.monto_total);
                return venta;
            });
            state.isLoading=false;
        },
        getVentaProductosIndividuales: (state,{payload})=>{
            state.ventasProductoUnitarias = payload;
            state.isLoading=false;
        },
        getVentaByCategory: (state,{payload})=>{
            state.ventasCategoria = payload;
            state.isLoading=false;
        },
        loadingChange: (state,{payload})=>{
            state.isLoading = payload;
        },
        addInfoClientesAndTypesPago: (state,{payload} ) => {
        state.isLoading = false;
        state.clientes = payload.clientes;
        state.formas_pago = payload.forma_pago;
        },
        saveSale:(state,{payload})=>{
            state.successMessage = 'Venta realizada correctamente';
            state.errorMessage = null;
        },
        saveSalewithoutCustomer:(state,{payload})=>{
            state.successMessage = 'Venta realizada correctamente';
            state.errorMessage = null;
        },
        filterDateSale:(state,{payload})=>{
            state.filtroVentas = state.ventas.filter(venta=>venta.fecha == payload);
            state.ventasUnitariasFiltros = state.ventasUnitarias.filter(venta=>venta.fecha == payload);
            // state.filtroEstadoVentas = state.filtroVentas;
            state.productosVendidos = state.ventasUnitariasFiltros.reduce((acc,item)=>{
                return acc = acc + item.cantidad;
            },0);
            state.dineroVentas = state.ventasUnitariasFiltros.reduce((acc,item)=>{
                return acc = acc + item.monto_total;
            },0);
        },
        filterMonthAndYearProductoSale:(state,{payload})=>{
            state.ventasProducto = state.ventasProductoUnitarias.filter(producto=>{
                if((producto.mes == payload.mes) && (producto.anio == payload.anio)){
                    return producto;
                }
                return;
            })
        },
        errorChange: (state,{payload})=>{
            state.errorMessage=payload;
            state.successMessage = null;
            state.isLoading=false;
        },
        cleanErrorMessage:(state)=>{
            state.errorMessage=null;
        },
        cleanSuccessMessage:(state)=>{
            state.successMessage=null;
        },
        cleanIvoiceLogout: (state)=>{
            state.isLoading=false;
            state.clientes=[];
            state.formas_pago=[];
            state.errorMessage=null;
            state.successMessage=null;
            state.ventas=[];
            state.ventasUnitarias=[];
            state.ventasUnitariasFiltros=[];
            state.filtroVentas=[];
            state.ventasProducto=[];
            state.ventasCategoria=[];
            state.productosVendidos=null;
            state.dineroVentas=null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { deleteVenta,updateVentas,filtrarEstadoVentas,getVentas,getVentaProductosIndividuales,getVentaByCategory,loadingChange,addInfoClientesAndTypesPago,saveSale,filterDateSale,filterMonthAndYearProductoSale,cleanIvoiceLogout, errorChange,cleanErrorMessage,cleanSuccessMessage} = invoiceSlice.actions;