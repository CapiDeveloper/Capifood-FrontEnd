
export const ButtonMenu = ({setShowMenu,showMenu}) => {
    const onShowMenu = ()=>{
        setShowMenu(state=>!state);
    }
    return (
    <div onClick={onShowMenu} className='md:hidden absolute right-0 top-2 z-10 bg-primario font-semibold p-2 text-white rounded-full'>
        {showMenu?<p>&#9747;</p>:<p>&#9776;</p>}
    </div>
  )
}