import { useState } from "react";
import { startCapiFoodSignIn } from "../../store/auth/thunks";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../../hooks/useForm";
import { Alerta } from "../../ui/componentes/Alerta";

// Expresion Regular Email
const expresionRegular = /^\w+([\.-]?\w+)*@(?:|capifood|hotmail|gmail)\.(?:|com|es)+$/;

// Datos para formulario
const formData = {
  email:'',
  password:'',
}

export const Login = () => {

  const { email, password, onInputChange,isFormValid,onResetForm} = useForm(formData);

  const [alerta, setAlerta] = useState({message:'',error:false})

  // Redux
  const dispatch = useDispatch();
  const { errorMessage,status } = useSelector(state=>state.auth);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!expresionRegular.test(email)) {
      setAlerta({message:'El email no es valido, intentelo de nuevo',error:true});
      return;
    }

    //THUNK - API REST
    dispatch(startCapiFoodSignIn({email,password}));
    setAlerta({message:'',error:false});
  }
  const {message,error} = alerta;

  return (
    <main className="flex flex-col justify-center items-center w-full mb-14 mt-5 md:mt-0">
        <div className='w-4/5 md:w-2/5'>
          <aside className="bg-primario h-20 rounded-t-lg w-full">
          
          </aside>
          <section className="flex flex-col items-center shadow-2xl pb-4 rounded-b-lg -mt-16">
              <div className='bg-white rounded-full mb-2'>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width={175} height={175} className="illustration styles_illustrationTablet__1DWOa"><path d="M76.51,128S27.89,237.78,155.9,239.32,342.42,224,343,168.12s-45.52-108-125.88-108.59S93.31,80,76.51,128Z" fill="#e6e6e6" opacity="0.3"></path><polygon points="250.11 260.33 250.11 216.34 294.1 212.41 301.96 260.33 250.11 260.33" fill="#68e1fd"></polygon><path d="M241.94,193.91l10.92,15.36v6.83l38.48-3.44-1.95-18.75s4.71-22.34-1.18-36.88a51.1,51.1,0,0,1-3.41-21.18c.29-6.65-9.27-8.18-11-1.74A61.82,61.82,0,0,0,272.64,148a16,16,0,0,1-1.44,6.82c-2.35,5.19-6.27,15.38-3.92,21.09l-4.53,22.28Z" fill="#f4a28c"></path><polygon points="262.75 198.14 266.64 214.87 252.86 216.1 252.86 209.27 241.94 193.91 262.75 198.14" opacity="0.09"></polygon><path d="M118.66,81.1s-8.9,2-10.15-8.9,0-15,0-15h20.93S140.06,83.45,118.66,81.1Z" fill="#68e1fd"></path><path d="M118.66,81.1s-8.9,2-10.15-8.9,0-15,0-15h20.93S140.06,83.45,118.66,81.1Z" opacity="0.08"></path><path d="M134.36,44.26s-7.26-.18-8.9,10.13,2.34,24.6-6.8,26.71h25.53S159.9,44.9,134.36,44.26Z" fill="#24285b"></path><path d="M150.3,44.26H134.36a17.17,17.17,0,0,1,9.83,13.88V194.38a16.43,16.43,0,0,0,16.43,16.43H257.2a16.42,16.42,0,0,0,16.42-16.43v-132a18.1,18.1,0,0,0-18.11-18.1Z" fill="#68e1fd"></path><path d="M211.88,104.74s16,27-5.09,47.77-47.3,12.6-47.3,12.6l-13.21,33.64-9.62-11.86,10.66-28.59,7.38-15.49,30-12.82Z" opacity="0.08"></path><path d="M184.73,71.87h58.43a8.91,8.91,0,0,1,8.91,8.91v64.3a8.91,8.91,0,0,1-8.91,8.91H184.73a0,0,0,0,1,0,0V71.87A0,0,0,0,1,184.73,71.87Z" fill="#fff" opacity="0.35"></path><rect x="138.64" y="142.16" width="12.44" height="23.65" transform="translate(97.75 -52.11) rotate(30.38)" fill="#24285b"></rect><rect x="138.64" y="142.16" width="12.44" height="23.65" transform="translate(97.75 -52.11) rotate(30.38)" fill="#fff" opacity="0.29"></rect><circle cx="169.32" cy="112.24" r="43.22" fill="#ffd200"></circle><circle cx="169.32" cy="112.24" r="30.56" fill="#fff"></circle><rect x="117.19" y="157.04" width="22.4" height="49.83" rx="5.11" transform="translate(109.63 -39.94) rotate(30.38)" fill="#24285b"></rect><path d="M103.49,191.35a32.17,32.17,0,0,1,13.35-23.64,25.13,25.13,0,0,1,17.52-4.65c19.68,2.2,15.6,31.84,6,48.69S116.63,230.8,108,222C102.36,216.26,102.61,201.28,103.49,191.35Z" fill="#f4a28c"></path><polygon points="99.21 208.34 91.04 260.33 138.75 260.33 140.4 215.83 99.21 208.34" fill="#68e1fd"></polygon><path d="M167.89,125.5a2.47,2.47,0,0,1-1.95-.94l-8.41-10.51a2.5,2.5,0,1,1,3.91-3.12l6.19,7.74,9.44-15.24a2.5,2.5,0,1,1,4.25,2.63L170,124.32a2.52,2.52,0,0,1-2,1.18Z" fill="#24285b"></path><rect x="169.32" y="170.21" width="82.75" height="21.11" fill="#24285b"></rect><rect x="224.63" y="33.36" width="71.49" height="50.21" fill="#24285b"></rect><rect x="241.36" y="62.69" width="10.24" height="6.79" fill="#ffd200"></rect><rect x="255.96" y="55.68" width="10.24" height="13.8" fill="#ffd200"></rect><rect x="270.25" y="46.63" width="10.24" height="22.86" fill="#ffd200"></rect><rect x="238.33" y="69.12" width="46.13" height="2.95" fill="#fff"></rect></svg>
              </div>
              {/* Formulario */}
              <form onSubmit={handleSubmit} className="w-4/5">
                    <fieldset className="mb-3">
                      <legend className="text-xl text-primario font-bold text-center">Iniciar Sesion</legend>
                      <div className="mt-3">
                        <label className='text-lg text-principal font-bold' htmlFor="email">Correo Electronico:</label>
                        <input 
                          className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 border-gray-400
                          ${(!!error) ?'border-red-500':'border-gray-400'}
                          `}
                          type="email" 
                          id="email" 
                          placeholder="Correo Electronico" 
                          name="email"
                          value={email}
                          onChange={onInputChange}   
                        />
                      </div>
                      <div className="mt-3">
                        <label className='text-lg text-principal font-bold' htmlFor="password">Contraseña:</label>
                        <input 
                          className={`mt-1 w-full p-2 rounded-lg shadow-lg placeholder-gray-400 border-2 
                            border-gray-400
                          `} 
                          type="password" 
                          id="password" 
                          placeholder="Contraseña" 
                          name="password"
                          value={password}
                          onChange={onInputChange} 
                        />
                      </div>
                    </fieldset>
                    {
                      (status == 'checking')&&
                      <div className="w-full flex justify-center">
                        <div className="loading"></div>
                      </div>
                    }
                    {
                      (message || (errorMessage != null))&&
                      <div className="flex justify-center mb-2">
                        <Alerta mensaje={alerta.message?alerta.message:errorMessage} />
                      </div>
                    }
                    <div className={`${message?'mt-0':'mt-3'} md:mx-auto md:w-2/4 bg-primario hover:bg-primarioOscuro text-white font-semibold md:text-lg text-center rounded-lg`}>
                      <input className={`${(isFormValid) ?'cursor-not-allowed':'cursor-pointer'} h-full w-full p-1`} disabled={isFormValid}  type="submit" value="Iniciar sesión" />
                    </div>
              </form>
              {/* Fin formulario */}
          </section>
        </div>
    </main>
    
  )
}