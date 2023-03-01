import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate,NavLink } from 'react-router-dom';
import { logout } from "../../store/auth/authSlice";
import { clearProductsLogout } from "../../store/inventario/inventarioSlice";
import { cleanIvoiceLogout } from "../../store/invoice/invoiceSlice";
import { clearOrden } from "../../store/orden/ordenSlice";
import { ButtonFullScreen } from "./ButtonFullScreen";

export const SideBar = React.memo(() => {   

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = useCallback(()=>{
        localStorage.removeItem('capiFood_tk');
        dispatch(clearProductsLogout());
        dispatch(cleanIvoiceLogout());
        dispatch(clearOrden());
        dispatch(logout());
        navigate('/acceso',{
            replace:true
        });
    },[]);

  return (
    <div className='h-full flex flex-col justify-between py-3'>
        {/* Navegacion principal */}
        <div className='h-full'>
            <nav>
                <ul className='flex flex-col gap-5'>
                    <NavLink to={''}>

                    </NavLink>

                    <NavLink to='/admin/home' className={({isActive})=>
                        `border-r-4 hover:border-r-primario ${isActive? 'border-r-primarioOscuro': 'border-white'}`
                    }>
                        <svg className="mx-auto" width={25} height={25} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.54 14.37"><title>home-IA</title><path d="M14.2,6.06,7.72.74a.29.29,0,0,0-.36,0L1,6.06c-.3.25-.17.86.18.86H2a.32.32,0,0,1,.31.34h0v5.32a1.43,1.43,0,0,0,1.41,1.47H5V10.62A1.23,1.23,0,0,1,6.19,9.37H9a1.22,1.22,0,0,1,1.19,1.25v3.43h1.3a1.43,1.43,0,0,0,1.41-1.47V7.26h0a.31.31,0,0,1,.3-.34H14C14.36,6.92,14.49,6.3,14.2,6.06Z" transform="translate(-0.32 -0.18)" fill="#fff" stroke="#000" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </NavLink>

                    <NavLink to='/admin/ordenes' className={({isActive})=>
                        `border-r-4 hover:border-r-primario ${isActive? 'border-r-primarioOscuro': 'border-white'}`}
                    >
                        <svg className="mx-auto" width={25} height={25} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.68 14.59"><title>estadistica-SVG</title><path d="M6.85,14.31A6.39,6.39,0,0,1,.67,8.13,6.33,6.33,0,0,1,6.53,1.68V8a.5.5,0,0,0,.5.5H13.3A6.31,6.31,0,0,1,7,14.31Z" transform="translate(-0.17 -0.23)" fill="#fff"/><path d="M6,2.24V8A1,1,0,0,0,7,9h5.71A5.82,5.82,0,0,1,7,13.81H6.86A5.88,5.88,0,0,1,1.17,8.12,5.85,5.85,0,0,1,6,2.24M7,1.17a6.82,6.82,0,0,0-.15,13.64H7A6.83,6.83,0,0,0,13.82,8H7V1.17H7Z" transform="translate(-0.17 -0.23)"/><path d="M14.35,6.66,8.42.73h0v6h6Z" transform="translate(-0.17 -0.23)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </NavLink>
                    <NavLink to='/admin/punto-ventas' className={({isActive})=>
                        `border-r-4 hover:border-r-primario ${isActive? 'border-r-primarioOscuro': 'border-white'}`}>
                        <svg className="mx-auto" width={25} height={25} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.78 14.43"><title>panel-SVG</title><rect x="0.5" y="0.5" width="5.83" height="3.82" fill="#fff"/><path d="M6,1.29V4.12H1.13V1.29H6m.78-1H.35A.22.22,0,0,0,.13.51V4.9a.22.22,0,0,0,.22.22H6.74A.22.22,0,0,0,7,4.9V.51A.22.22,0,0,0,6.74.29Z" transform="translate(-0.13 -0.29)"/><rect x="8.45" y="10.11" width="5.83" height="3.82" fill="#fff"/><path d="M13.91,10.9v2.83H9.08V10.9h4.83m.78-1H8.3a.22.22,0,0,0-.22.22v4.39a.22.22,0,0,0,.22.22h6.39a.22.22,0,0,0,.22-.22V10.12a.22.22,0,0,0-.22-.22Z" transform="translate(-0.13 -0.29)"/><rect x="0.5" y="6.49" width="5.83" height="7.44" rx="0.24" fill="#fff"/><path d="M6,7.29v6.44H1.13V7.29H6m.26-1H.87A.74.74,0,0,0,.13,7v7a.74.74,0,0,0,.74.74H6.22A.74.74,0,0,0,7,14V7a.74.74,0,0,0-.74-.74Z" transform="translate(-0.13 -0.29)"/><rect x="8.45" y="0.5" width="5.83" height="7.44" rx="0.24" fill="#fff"/><path d="M13.91,1.29V7.73H9.08V1.29h4.83m.26-1H8.82A.74.74,0,0,0,8.08,1V8a.74.74,0,0,0,.74.74h5.35A.74.74,0,0,0,14.91,8V1a.74.74,0,0,0-.74-.74Z" transform="translate(-0.13 -0.29)"/></svg>
                    </NavLink>
                    <NavLink to='/admin/inventario' className={({isActive})=>
                        `border-r-4 hover:border-r-primario ${isActive? 'border-r-primarioOscuro': 'border-white'}`} >
                        <svg className="mx-auto" width={25} height={25} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.61 14.09"><title>canasta-SVG</title><path d="M7.5,11.88c-2.72,0-4.93-2.48-4.93-5.54S4.78.81,7.5.81s4.93,2.48,4.93,5.53S10.22,11.88,7.5,11.88Z" transform="translate(-0.19 -0.31)" fill="#fff"/><path d="M7.5,1.31c2.44,0,4.43,2.26,4.43,5s-2,5-4.43,5-4.43-2.26-4.43-5,2-5,4.43-5m0-1c-3,0-5.43,2.7-5.43,6s2.43,6,5.43,6,5.43-2.7,5.43-6S10.5.31,7.5.31Z" transform="translate(-0.19 -0.31)"/><rect x="0.5" y="4.61" width="13.61" height="8.98" rx="2.84" fill="#fff"/><path d="M11.47,5.42a2.34,2.34,0,0,1,2.34,2.34v3.3a2.34,2.34,0,0,1-2.34,2.34H3.53a2.34,2.34,0,0,1-2.34-2.34V7.76A2.34,2.34,0,0,1,3.53,5.42h7.94m0-1H3.53A3.34,3.34,0,0,0,.19,7.76v3.3A3.35,3.35,0,0,0,3.53,14.4h7.94a3.35,3.35,0,0,0,3.34-3.34V7.76a3.34,3.34,0,0,0-3.34-3.34Z" transform="translate(-0.19 -0.31)"/><path d="M3.74,8.11a.45.45,0,0,1,0-.9.45.45,0,1,1,0,.9Z" transform="translate(-0.19 -0.31)" fill="#fff"/><path d="M3.74,7.46a.2.2,0,1,1-.2.2.2.2,0,0,1,.2-.2m0-.5a.7.7,0,1,0,0,1.4.7.7,0,0,0,0-1.4Z" transform="translate(-0.19 -0.31)"/><circle cx="11.07" cy="7.35" r="0.45" fill="#fff"/><path d="M11.26,7.46a.2.2,0,1,1-.2.2.2.2,0,0,1,.2-.2m0-.5a.7.7,0,1,0,.7.7.7.7,0,0,0-.7-.7Z" transform="translate(-0.19 -0.31)"/></svg>
                    </NavLink>
                </ul>
            </nav>
        </div>
        {/* Navegacion extra */}
        <div>
            <nav>
                <ul className='flex flex-col gap-5'>
                    <NavLink to={'/admin/reportes'} className={({isActive})=>
                        `border-r-4 hover:border-r-primario ${isActive? 'border-r-primarioOscuro': 'border-white'}`} >
                        <svg className="mx-auto" width={25} height={25} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.63 14.63"><title>opciones-SVG</title><path d="M13.38,6.18h0a1.4,1.4,0,0,1-.79-1.91,1.39,1.39,0,0,0-1.86-1.86h0a1.4,1.4,0,0,1-1.91-.79h0a1.4,1.4,0,0,0-2.64,0h0a1.4,1.4,0,0,1-1.91.79h0A1.39,1.39,0,0,0,2.41,4.27a1.4,1.4,0,0,1-.79,1.91h0a1.4,1.4,0,0,0,0,2.64h0a1.4,1.4,0,0,1,.79,1.91h0a1.39,1.39,0,0,0,1.86,1.86h0a1.4,1.4,0,0,1,1.91.79,1.4,1.4,0,0,0,2.64,0,1.4,1.4,0,0,1,1.91-.79h0a1.39,1.39,0,0,0,1.86-1.86h0a1.4,1.4,0,0,1,.79-1.91h0A1.4,1.4,0,0,0,13.38,6.18ZM7.5,11a3.72,3.72,0,1,1,3.72-3.72A3.72,3.72,0,0,1,7.5,11Z" transform="translate(-0.19 -0.19)" fill="#fff" stroke="#000" strokeMiterlimit="10"/></svg> 
                    </NavLink>
                    <li className="md:hidden mx-auto hover:border-r-primarioOscuro">
                        <ButtonFullScreen />
                    </li>
                    <li onClick={()=>onLogout()} className='p-2 hover:cursor-pointer'>
                        <svg className="mx-auto"  
                            width={25} 
                            height={25} 
                            id="Capa_1" 
                            data-name="Capa 1" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 14.7 13.63"><title>Cerrar Cession</title>
                            <path d="M9.57,1H2C1.26,1,.65,1.83.65,2.85v8.92c0,1,.61,1.86,1.37,1.86H9.57" 
                            transform="translate(-0.15 -0.5)" fill="#fff" 
                            stroke="#000" strokeLinecap="round" 
                            strokeMiterlimit="10"/>
                            <line x1="2.82" y1="6.75" x2="14.2" y2="6.75" fill="none" 
                            stroke="#000" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="11.14 3.69 14.2 6.75 11.27 9.69" fill="none" 
                            stroke="#000" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> 
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
});