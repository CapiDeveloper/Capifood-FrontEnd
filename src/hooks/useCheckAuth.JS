import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capiFoodApi } from "../api/capiFoodApi";
import { login, logout } from "../store/auth/authSlice";


export const useCheckAuth = () => {

  const {status,user_tipo } = useSelector(state=>state.auth);
  
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {

  const autenticacion = async()=>{
    const token = localStorage.getItem('capiFood_tk');

      if (!token) {
      setLoading(loading=>!loading);
      dispatch(logout());
      return;
      };
      try {
        const {data} = await capiFoodApi.get(`autenticacion-token?token=${token}`);

        setLoading(loading=>!loading);
        if(!data.valido){
        dispatch(logout());
        return;
        };
        dispatch(login(data.respuesta));
      } catch (e) {
        setLoading(loading=>!loading);
      }
  }
  autenticacion();

  }, []);

  return {
    loading,status,user_tipo
  }
}

export default useCheckAuth