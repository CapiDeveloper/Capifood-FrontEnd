
import {useDispatch} from 'react-redux';
import { filterProduct } from "../../../store/inventario/inventarioSlice";
import { useState } from "react";

export const SearchProducto = () => {

    const dispatch = useDispatch();
    const [producto, setProducto] = useState('');

    const onInputChange = ({target})=>{
        setProducto(target.value);
        if(target.value === '') return dispatch(filterProduct(null));
        dispatch(filterProduct(target.value));
    }

  return( 
        <form className="flex justify-between  bg-white rounded-lg border-2 border-gray-200">
            <input value={producto} className="p-2" onChange={onInputChange} id="buscar" type="search" name="producto" placeholder="Buscar producto.." />
            <button disabled type="submit" className="p-2">
            <svg className="border-l-2 border-gray-300 pl-1" width={25} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.88 14.14"><title>Lupa-SGV</title><path d="M13.68,13.42l-3.33-3.33a5.43,5.43,0,1,0-.49.46l3.35,3.35a.31.31,0,0,0,.24.1.3.3,0,0,0,.23-.1A.33.33,0,0,0,13.68,13.42ZM6.45,11a4.74,4.74,0,1,1,4.73-4.74A4.74,4.74,0,0,1,6.45,11Z" transform="translate(-0.41 -0.36)" stroke="#000" strokeMiterlimit="10"/></svg>
            </button>
        </form>
    )};