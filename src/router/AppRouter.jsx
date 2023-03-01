import { Routes,Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from './../landingPage/routes/AuthRoutes';
import AdminRoutes from './../admin/routes/adminRoutes';
import { Checking } from './../ui/componentes';

import useCheckAuth from '../hooks/useCheckAuth';
import { OwnerRouter } from '../owner/router/OwnerRouter';

export const AppRouter = () => {

  const {loading,status,user_tipo} = useCheckAuth();
 
  // EL user_tipo no funciona

  if (loading === true) {
    return <Checking />;
  }
  return (
    <Routes>
        {
          (status === 'authenticated') ?
          (user_tipo == 0)?
          <Route path='/admin/*' element={<AdminRoutes />} /> :
          <Route path='/owner/*' element={<OwnerRouter />} />:
          <Route path='/*'  element={<AuthRoutes />} />
        }
        {
          (status === 'authenticated')?
          (user_tipo == 0)?
          <Route path='/*' element={<Navigate to={'/admin/home'} />} />:
          <Route path='/*' element={<Navigate to={'/owner/crear-negocio'} />} />
          :
          <Route path='/*' element={<Navigate to={'/'} />} />
        }
        

    </Routes>
  )
}