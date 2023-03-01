import { capiFoodApi } from "../../api/capiFoodApi";
import { checkingCredentials,login,logout } from "./authSlice"

// Iniciar session con email y password
export const startCapiFoodSignIn = ({email,password})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());

        const datos = new FormData();
        datos.append('email', email);
        datos.append('password', password);

        try {
            const {data} = await capiFoodApi.post('login',datos);

            if (!data?.valido) return dispatch(logout(data.respuesta));
            dispatch(login(data.respuesta));
            localStorage.setItem('capiFood_tk',data.respuesta.token);

        } catch (error) {
            dispatch(logout('Hubo un error, comuniquese con soporte'));
        }
        
    }
}