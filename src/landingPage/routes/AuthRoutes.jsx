import {Routes, Route, Navigate} from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { About } from '../pages/About';
import Business from '../pages/Business';
import { Contact } from '../pages/Contact';
import { Inicio } from '../pages/Inicio';
import { Login } from '../pages/Login';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<AuthLayout />}>
            <Route index path='' element={<Inicio />} />
            <Route path='acceso' element={<Login />} />
            <Route path='nosotros' element={<About />} />
            <Route path='contacto' element={<Contact />} />
            <Route path='politica-privacidad' element={<PrivacyPolicy />} />
            <Route path='negocio/*' element={<Business />} />
            <Route path='/*'  element={<Navigate to={'/'} />} />
        </Route>
    </Routes>
  )
}