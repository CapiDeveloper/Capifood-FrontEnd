import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { inventarioSlice } from './inventario/inventarioSlice'
import { invoiceSlice } from './invoice'
import { ordenSlice } from './orden/ordenSlice'
import { ownerSlice } from './owner/ownerSlice'


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    inventario: inventarioSlice.reducer,
    orden: ordenSlice.reducer,
    invoice: invoiceSlice.reducer,
    owner: ownerSlice.reducer
  },
})