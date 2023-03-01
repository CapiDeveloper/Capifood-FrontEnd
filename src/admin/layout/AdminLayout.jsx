import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ButtonFullScreen } from '../components/ButtonFullScreen';
import { ButtonMenu } from '../components/ButtonMenu';
import { SideBar } from '../components/SideBar';

export const AdminLayout = () => {

  // Logica para mostrar/ocultar menu
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <div className='w-full h-screen flex overflow-hidden'>
        {showMenu&& <SideBar />}
        <ButtonMenu  setShowMenu={setShowMenu} showMenu={showMenu} />
        <div className="flex-1 bg-secundario pt-8 pb-2 pl-3 w-full h-full relative">
          <div className='hidden md:block absolute right-16 top-2 cursor-pointer bg-white shadow-lg hover:bg-gray-50 rounded-full p-2'>
            <ButtonFullScreen />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}