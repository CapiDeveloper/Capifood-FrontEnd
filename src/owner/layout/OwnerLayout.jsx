import { useDispatch } from "react-redux";
import { Outlet,NavLink,useNavigate } from "react-router-dom"
import { logout } from "../../store/auth/authSlice";
import { logout as cleanLogout} from "../../store/owner/ownerSlice";

export const OwnerLayout = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = ()=>{
    localStorage.removeItem('capiFood_tk');
    dispatch(logout());
    dispatch(cleanLogout());
    navigate('/acceso',{
      replace:true
  });
  }

  return (
    <>
    <header className="w-full border-b-2 pb-2">
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 justify-between w-auth/authSlice mx-auto mt-5 px-10">
          <div className="mx-auto md:mx-0">
            <img src="" alt="Logo CapiFood" />
          </div>
          <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 gap-x-5 items-center">
              <NavLink to='/owner/crear-usuario' className={({isActive})=>
                  `font-semibold  hover:text-primarioOscuro ${isActive? 'text-blue-500': 'text-primarioOscuro'}`
              }>
                  Crear Usuario
              </NavLink>
              <NavLink to='/owner/crear-negocio' className={({isActive})=>
                  `font-semibold hover:text-primarioOscuro ${isActive? 'text-blue-500': 'text-primarioOscuro'}`
              }>
                  Crear Negocio
              </NavLink>
              <button onClick={onLogout} type="button" className="w-full text-center md:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold p-2 rounded">
                Logout
              </button>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="mt-5">
      </footer>
    </>
  )
}