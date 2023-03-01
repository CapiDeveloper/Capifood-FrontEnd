import { capiFoodApi } from "../../../api/capiFoodApi";

export const autenticacionToken = async(token)=>{
    try {
        const {data} = await capiFoodApi.get(`/autenticacion-token?token=${token}`);
        return data
    } catch (error) {
        const data = {
            valido:null
        }
        return data;
    }
}