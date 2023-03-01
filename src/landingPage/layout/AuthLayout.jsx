import { useState } from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';
export const AuthLayout = () => {

  const [activo, setActivo] = useState(false);
  const navigate = useLocation()?.pathname;

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/">
                <img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674493366/CapiFood/zan7scue7cc0qwtcyckq.webp" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            </Link>
            <button onClick={()=>setActivo(!activo)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className={`${activo?'block':'hidden'} w-full md:block md:w-auto`}>
              <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-5 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li onClick={()=>setActivo(!activo)} className='w-full md:w-auto'>
                  <Link to="/" className={`block p-2 text-azul rounded-lg text-center ${navigate == '/'?'bg-blue-100':'hover:bg-blue-100'}`}>Inicio</Link>
                </li>
                <li onClick={()=>setActivo(!activo)} className='w-full md:w-auto'>
                  <Link to="/nosotros" className={`block p-2 text-azul rounded-lg text-center ${navigate == '/nosotros'?'bg-blue-100':'hover:bg-blue-100'}`}>Nosotros</Link>
                </li>
                <li onClick={()=>setActivo(!activo)} className='w-full md:w-auto'>
                  <Link to="/contacto" className={`block p-2 text-azul rounded-lg text-center ${navigate == '/contacto'?'bg-blue-100':'hover:bg-blue-100'}`}>Contacto</Link>
                </li>
                <li onClick={()=>setActivo(!activo)} className='w-full md:w-auto'>
                  <Link to="/acceso" className={`mt-5 md:mt-0 flex items-center justify-center w-full p-2 bg-blue-400 ${navigate == '/acceso'?'bg-azulOscuro':'hover:bg-azulOscuro'} text-white rounded-lg text-center gap-2`}><img className='w-6' src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674502294/CapiFood/hkn8qhrqgn1uun498vn7.webp" alt="Icono Iniciar sesion" /> Iniciar Sesion</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className='bg-white p-2'>
        <div className='w-11/12 mx-auto flex flex-col gap-y-5 md:flex-row justify-between items-center'>
          <div className='flex gap-3 font-semibold flex-col sm:flex-row'>
            <p>Capi<span className='text-azul'>Food</span> @2023</p>
            <Link className='text-azul hover:text-azulOscuro' to="/politica-privacidad">Politica de privacidad</Link>
          </div>
          <nav>
            <ul className='flex gap-5'>
              <li className='w-7'><a target="_blank" href="https://www.facebook.com/bryan.chacha.9003"><img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674501199/CapiFood/dae2qqojtgzcr79srtiw.webp" alt="Logo de facebook" /></a></li>
              <li className='w-7'><a target="_blank" href="https://www.instagram.com/chacha_bryan/"><img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674501199/CapiFood/jb9katwvvu0bqrtguhqu.webp" alt="Logo de instagram" /></a></li>
              <li className='w-7'><a target="_blank" href="https://api.whatsapp.com/send?phone=+593980497305&text=Vengo%20de%20la%20aplicacion%20web%20CapiFood,%20necesito%20comunicarme%20con%20usted."><img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674501199/CapiFood/x4hga11niedg2b4m6eff.webp" alt="Logo de whatsapp" /></a></li>
              <li className='w-7'><a target="_blank" href="https://www.linkedin.com/in/bryan-chacha-morocho/"><img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674501199/CapiFood/ipqr29xis5ce34pk0hmu.webp" alt="Logo de linkedin" /></a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}