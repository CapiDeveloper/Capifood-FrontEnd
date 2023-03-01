import { useForm } from "../../hooks/useForm"
import { FormUser } from "../../ui/componentes/FormUser"
import {useSelector,useDispatch} from 'react-redux';
import { createUser } from "../../store/owner/thunks";
import { Alertas } from "../../ui/componentes/Alertas";
import { useState } from "react";

const formData = {
  nombre:'',
  email:'',
  password:'',
  cedula:'',
}

export const CreateUser = () => {

  const dispatch = useDispatch();
  const {isLoading,message,error} = useSelector(state=>state.owner);
  const {nombre,email,password,cedula,isFormValid,onInputChange,formState,onResetForm} = useForm(formData);
  const [alerta, setAlerta] = useState({});

  const onHandleSubmit = (e)=>{
    e.preventDefault();

    if(isFormValid) return;

    // Ver que la cedula tenga 10 caracteres
    if(cedula.trim().length > 10 || cedula.trim().length < 10) return setAlerta({error:true,message:'La cedula debe contener 10 caracteres'}); 

    // Thunk para crear usuario
    dispatch(createUser(formState));

  }

  return (
    <>
      <main className="mt-5">
        <FormUser>
          <form onSubmit={onHandleSubmit} className="p-2">
          <legend className="mb-5 font-extrabold text-primario text-center text-xl">Crear Usuario</legend>
          <fieldset className="md:grid md:grid-cols-2 md:gap-x-5">
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="nombre">Nombre:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                type="text" 
                id="nombre" 
                placeholder="Nombre negocio"
                name="nombre"
                value={nombre}
                onChange={onInputChange}   
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="email">Email:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                type="email" 
                id="email" 
                placeholder="Email Usuario"
                name="email"
                value={email}
                onChange={onInputChange}   
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="password">Password:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                type="password" 
                id="password" 
                placeholder="Password usuario"
                name="password"
                value={password}
                onChange={onInputChange}   
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="cedula">Cedula:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                type="number" 
                min={0}
                id="cedula" 
                placeholder="Telefono negocio"
                name="cedula"
                value={cedula}
                onChange={onInputChange}   
              />
            </div>
          </fieldset>
          {
              isLoading&&
                <div className="loading"></div>
            }
            {
              (alerta?.error || (message != null))&&
              <Alertas message={alerta.message} error={error} errorMessage={message} />
            }
            <div className={`mt-5 md:mx-auto md:w-2/4 bg-primario hover:bg-primarioOscuro text-white font-semibold md:text-lg text-center rounded-lg`}>
              <input className={`${(isFormValid) ?'cursor-not-allowed':'cursor-pointer'} h-full w-full p-1`} disabled={isFormValid} type="submit" value="Crear usuario" />
            </div>
          </form>
        </FormUser>
      </main>
    </>
  )
}