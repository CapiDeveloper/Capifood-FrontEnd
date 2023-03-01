import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/auth/authSlice";

import { clearProductsLogout } from "../store/inventario/inventarioSlice";
import { cleanIvoiceLogout } from "../store/invoice/invoiceSlice";
import { clearOrden } from "../store/orden/ordenSlice";


export const useLogoutAdmin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    localStorage.removeItem('capiFood_tk');
        dispatch(clearProductsLogout());
        dispatch(cleanIvoiceLogout());
        dispatch(clearOrden());
        dispatch(logout());
        navigate('/acceso',{
            replace:true
    });
}