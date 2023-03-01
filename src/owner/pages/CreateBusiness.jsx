import { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useForm } from "../../hooks/useForm"
import { createRestaurant, getUsuariosAPI } from '../../store/owner/thunks';
import { Alertas } from '../../ui/componentes/Alertas';
import { FormUser } from "../../ui/componentes/FormUser"

const formData = {
  nombre:'',
  descripcion:'',
  ciudad:'',
  direccion:'',
  telefono:'',
  logo:'',
  ruc:'',
  capacidad:'',
  usuario:'',
  categoria:''
}

export const CreateBusiness = () => {

  const dispatch = useDispatch();
  const {nombre,descripcion,ciudad,direccion,telefono,logo,ruc,capacidad,usuario,categoria,formState,isFormValid,onInputChange,onResetForm} = useForm(formData);
  const { usuarios,categorias,isLoading,message,error } = useSelector(state=>state.owner);
  const [alerta, setAlerta] = useState({});
  const [caracteristicas, setCaracteristicas] = useState({
    internet:false,
    delivery:false,
    llevar:false,
  });
  useEffect(() => {
    if(usuario.length < 1 ){
      dispatch(getUsuariosAPI());
    }
  }, []);

  const onInputCheck = ({target})=>{
    setCaracteristicas({
      ...caracteristicas,
      [target.name]:target.checked
    });
  }

  const onHandleSubmit = (e)=>{
    e.preventDefault();
    if(isFormValid)return;

    // Crear thunk para crear negocio
    dispatch((createRestaurant({
      ...formState,
      ...caracteristicas
    })));
    onResetForm();
    setCaracteristicas({
      internet:false,
      delivery:false,
      llevar:false,
    });
  }

  return (
    <>
      
      <main className="mt-5">
        <FormUser>
          <form onSubmit={onHandleSubmit}>
          <legend className="mb-5 font-extrabold text-primario text-center text-xl">Crear Negocio</legend>
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
              <label className='text-lg text-principal font-bold' htmlFor="descripcion">Descripcion:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                type="text" 
                id="descripcion" 
                placeholder="Descripcion del negocio"
                name="descripcion"
                value={descripcion}
                onChange={onInputChange}   
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="ciudad">Ciudad:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                type="text" 
                id="ciudad" 
                placeholder="Ciudad negocio"
                name="ciudad"
                value={ciudad}
                onChange={onInputChange}   
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="direccion">Direccion:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                type="text" 
                id="direccion" 
                placeholder="Direccion negocio"
                name="direccion"
                value={direccion}
                onChange={onInputChange}   
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="telefono">Telefono:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                min={0}
                type="number" 
                id="telefono" 
                placeholder="Telefono negocio"
                name="telefono"
                value={telefono}
                onChange={onInputChange}   
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="logo">Imagen:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                type="text" 
                id="logo"
                name="logo"
                placeholder="Introducir url"
                value={logo}
                onChange={onInputChange}   
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="ruc">Ruc:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                min={0}
                type="number" 
                id="ruc"
                name="ruc"
                placeholder="Ruc negocio"
                value={ruc}
                onChange={onInputChange}
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="capacidad">Capacidad:</label>
              <input 
                className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                }
                `}
                min={0}
                type="number" 
                id="capacidad"
                name="capacidad"
                placeholder="Capacidad del negocio"
                value={capacidad}
                onChange={onInputChange}
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="internet">Internet:</label>
              <input 
                className="mt-1 w-full p-2"
                type="checkbox"
                id="internet"
                name="internet"
                placeholder="Internet del negocio"
                value={caracteristicas.internet}
                onChange={onInputCheck}
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="delivery">Delivery:</label>
              <input 
                className="mt-1 w-full p-2"
                type="checkbox"
                id="delivery"
                name="delivery"
                placeholder="Delivery del negocio"
                value={caracteristicas.delivery}
                onChange={onInputCheck}
              />
            </div>
            <div className="mt-3">
              <label className='text-lg text-principal font-bold' htmlFor="llevar">Para llevar:</label>
              <input 
                className="mt-1 w-full p-2"
                type="checkbox"
                id="llevar"
                name="llevar"
                placeholder="llevar del negocio"
                value={caracteristicas.llevar}
                onChange={onInputCheck}
              />
            </div>
            <div className="mt-3 flex flex-col">
              <label className="text-lg text-principal font-bold" htmlFor="usuario">
                Usuario
              </label>
              {
                !isLoading&&
                <select className="p-1 bg-white rounded-lg text-principal font-semibold border-2 border-gray-400"
                name="usuario" id="usuario" defaultValue={usuario} onChange={onInputChange}
              >
                <option value="" disabled>-- SELECCIONE --</option>
                {
                  usuarios?.map((persona,index)=>(
                    <option key={index} value={persona.id}>{persona.nombre}</option>
                  ))
                }
              </select>
              }
            </div>
            <div className="mt-3 flex flex-col">
              <label className="text-lg text-principal font-bold" htmlFor="categoria">
                Categoria
              </label>
              {
                !isLoading&&
                <select className="p-1 bg-white rounded-lg text-principal font-semibold border-2 border-gray-400"
                name="categoria" id="categoria" defaultValue={categoria} onChange={onInputChange}
              >
                <option value="" disabled>-- SELECCIONE --</option>
                {
                  categorias?.map((categoria,index)=>(
                    <option key={index} value={categoria.id}>{categoria.nombre}</option>
                  ))
                }
              </select>
              }
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
              <input className={`${(isFormValid) ?'cursor-not-allowed':'cursor-pointer'} h-full w-full p-1`} disabled={isFormValid} type="submit" value="Crear Negocio" />
            </div>
          </form>
        </FormUser>
      </main>
    </>
  )
}