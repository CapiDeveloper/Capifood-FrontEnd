import { authSlice, checkingCredentials, login,logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Pruebas en el authSlice', () => {
    test('Debe de regresar el estado inicial y llamarse auth', () => {
        
        const state = authSlice.reducer(initialState,{});
        
        expect(authSlice.name).toBe('auth');
        expect(initialState).toEqual(state);

    })

    test('Debe de realizar la autenticacion', () => {
        const state = authSlice.reducer(initialState,login(demoUser));
        expect(state).toEqual({
            status: 'authenticated',
            id: demoUser.id,
            nombre: demoUser.nombre,
            token: demoUser.token,
            user_tipo: demoUser.tipo,
            restaurante_id: demoUser.restaurante_id,
            ciudad_negocio: demoUser.ciudad_negocio,
            direccion_negocio: demoUser.direccion_negocio,
            logo_negocio: demoUser.logo_negocio,
            nombre_negocio: demoUser.nombre_negocio,
            ruc_negocio: demoUser.ruc_negocio,
            telefono_negocio: demoUser.telefono_negocio,
            errorMessage: null
        });
    })
    
    test('Debe de realizar el logout sin argumentos', () => {
        const state = authSlice.reducer(authenticatedState,logout());
        expect(state).toEqual({
            status:'not-authenticated',
            id:null,
            nombre:null,
            token:null,
            user_tipo:null,
            restaurante_id:null,
            ciudad_negocio:null,
            direccion_negocio:null,
            logo_negocio:null,
            nombre_negocio:null,
            ruc_negocio:null,
            telefono_negocio:null,
            errorMessage: null,
        });
        expect(state.errorMessage).toBe(null);
    });
    test('Debe de realizar el logout con mensaje de error', () => {
        const state = authSlice.reducer(authenticatedState,logout('Pruebas no pasadas'));
        expect(state.errorMessage).toBe('Pruebas no pasadas');
    });
    test('Debe de aparecer que esta en cheking el state', () => {
        const state = authSlice.reducer(initialState,checkingCredentials());
        expect(state.status).toBe('checking');
    });
})