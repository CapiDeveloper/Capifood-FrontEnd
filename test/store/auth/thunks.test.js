import { checkingCredentials,login,logout } from "../../../src/store/auth/authSlice";
import { startCapiFoodSignIn } from "../../../src/store/auth/thunks";

const dispatch = jest.fn();

describe('Pruebas a thunks de autenticacion', () => {
    
    const dispatch = jest.fn();
    const credenciales = {
        email:'correo1@correo.com',
        password:'123'
    }

    test('Pruebas a startCapiFoodSignIn', () => {
        startCapiFoodSignIn(credenciales)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    })
    
})