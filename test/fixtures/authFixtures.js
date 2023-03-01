export const initialState = {
    status:'checking', // 'checking', 'not-authenticated', 'authenticated'
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
    errorMessage:null
}
export const authenticatedState = {
    status:'authenticated', // 'checking', 'not-authenticated', 'authenticated'
    id:'ABC123',
    nombre:'BORIS',
    token:'123',
    user_tipo:0,
    restaurante_id:'1',
    ciudad_negocio:'Macas',
    direccion_negocio:'Riobamba y soasti',
    logo_negocio:'logo.png',
    nombre_negocio:'CAPIFOOD',
    ruc_negocio:'1234567890',
    telefono_negocio:'1234567890',
    errorMessage:null
}

export const notAuthenticatedState = {
    status:'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
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
    errorMessage:null
}

export const demoUser = {
    id:'1234567890',
    nombre:'DEMO',
    token:'123',
    tipo:0,
    restaurante_id:'1',
    ciudad_negocio:'DEMO',
    direccion_negocio:'DEMO',
    logo_negocio:'demo.png',
    nombre_negocio:'DEMOFOOD',
    ruc_negocio:'1234567890',
    telefono_negocio:'1234567890',
}