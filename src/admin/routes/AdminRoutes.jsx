import { Routes, Route, Navigate } from 'react-router-dom';
import { useCheckOrder } from '../../hooks/useCheckOrder';
import { AdminLayout } from '../layout/AdminLayout';

// Pages de admin
import {Home,Inventory,PointSale,Settings,Statistics} from './../pages/index'

const AdminRoutes = () => {

  const {orden} = useCheckOrder();

  return (
    <>
        <Routes>
            <Route path='/' element={<AdminLayout />} >
              <Route end path='home' element={<Home />} />
              <Route end path='punto-ventas' element={<PointSale />}/>
              <Route end path='ordenes' element={<Statistics />} />
              <Route end path='inventario' element={<Inventory />} />
              <Route end path='reportes' element={<Settings />} />
              <Route end path='*' element={<Navigate to="/" />} />
            </Route>
        </Routes>
    </>
  )
}
export default AdminRoutes;