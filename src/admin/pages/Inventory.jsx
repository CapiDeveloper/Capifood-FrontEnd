import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { cleanErrorChangeInventory, cleanSuccessMessaje, filterByCategory, filterInventory } from "../../store/inventario/inventarioSlice";
import { deleteProduct, startLoadingInventory, toogleAvailableProduct } from "../../store/inventario/thunks";
import { AgregarProducto,AgregarCategoria } from "../components/ComponentesInventory";
import { ActualizarProducto } from "../components/ComponentesInventory/ActualizarProducto";

// Sweet alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import ProductoTabla from "../components/ComponentesInventory/ProductoTabla";

export const Inventory = () => {

  const dispatch = useDispatch();
  const { isLoading,filtroProductos, categorias,errorMessaje,successMessaje,productos } = useSelector(state=>state.inventario);
  const [categoria, setCategoria] = useState('DEFAULT');
  const [mostrarFormProduct, setMostrarFormProduct] = useState(false);
  const [mostrarFormCategory, setMostrarFormCategory] = useState(false);
  const [disponible, setDisponible] = useState(false);
  const [mostrarFormActualizar, setMostrarFormActualizar] = useState({mostrar:false,info:{}});

  const onShowFormProducto = ()=>{
    setMostrarFormProduct(state=>!state);
  }
  const onShowFormCategory = ()=>{
    setMostrarFormCategory(state=>!state);
  }

  const onShowFormActualizar = (e)=>{
    
    setMostrarFormActualizar({
      mostrar:!mostrarFormActualizar.mostrar,
      info : {...e}
    });

  }

  const onToogleState = (habilitado,id)=>{
    setDisponible(!disponible);
    dispatch(toogleAvailableProduct(habilitado,id));
  }

  const onDeleteProducto = ({id,imagen})=>{
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: '¿Eliminar el producto del inventario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar producto
        dispatch(deleteProduct(id,imagen));
      };
    })
    return;
  }

  useEffect(() => {
    if(errorMessaje !== null){
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        icon: 'error',
        title: `${errorMessaje}`,
        text: 'Comunicar con soporte!',
      });
      // limpiar errorMessaje
      dispatch(cleanErrorChangeInventory());
    }
  }, [errorMessaje]);
  useEffect(() => {

    if(successMessaje !== null){
      const MySwal = withReactContent(Swal);
      MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      MySwal.fire({
        icon: 'success',
        title: successMessaje
      });
      // Limpiar successMessaje
      dispatch(cleanSuccessMessaje());
    }

  }, [successMessaje])
  
  // Para que haga peticion http
  useEffect(() => {
    if(categorias.length <= 0){
      dispatch(startLoadingInventory());
    };
  }, []);
  
useEffect(() => {   
    dispatch(filterInventory());
  }, [productos]);
  
  const onInputChange = ({target})=>{
    setCategoria(target.value);
    dispatch(filterByCategory(target.value));
  }

  return (
    <>
        <main className="h-full">
          <div>
            <h1 className="font-bold text-3xl text-principal">Inventario </h1>
            <p className="mt-2 text-principal">Crea, actualiza y elimina tus productos.</p>
          </div>
          <div className="h-3/4 w-full mt-5">
            <form>
              <label htmlFor="categoria">
                <select className="p-1 bg-white rounded-lg text-principal font-semibold"
                  name="categoria" id="categoria" value={categoria} onChange={onInputChange}
                >
                  <option value="DEFAULT" disabled>-- Seleccione --</option>
                  {
                    categorias?.map((categoria,index) =>(
                      <option key={index} value={categoria.nombre} >{categoria.nombre}</option>
                    ))
                  }
                </select>
              </label>
            </form>
            <h2 className="text-2xl font-bold mb-5 text-center text-principal">Lista de productos</h2>
            <div className="flex gap-x-2 justify-end mr-5">
              <button type="button" onClick={onShowFormProducto} className="text-sm font-bold py-1 px-2 rounded-lg bg-primario hover:bg-blue-800 text-white">&#x2719; Agregar producto</button>
              <button type="button" onClick={onShowFormCategory} className="text-sm font-bold py-1 px-2 rounded-lg bg-primario hover:bg-blue-800 text-white">&#x2719; Agregar Categoria</button>
            </div>
            {/* Para que aparezcan o no los formularios */}
            {
              mostrarFormProduct&&
              <AgregarProducto mostrarFormProduct={mostrarFormProduct} cancelButton={setMostrarFormProduct} />
            }
            {
              mostrarFormCategory&&
              <AgregarCategoria mostrarFormCategory={mostrarFormCategory} cancelButton={setMostrarFormCategory} />
            }
            {
              (mostrarFormActualizar.mostrar)&&
              <ActualizarProducto mostrarFormActualizar={mostrarFormActualizar} cancelButton={setMostrarFormActualizar} />
            }
            {
              isLoading?
              <div className="flex justify-center items-center h-full">
                <div className="loading"></div>
              </div>:
              <div className="mt-3 h-4/5 w-full overflow-y-scroll scrollbar">
                <table className="hidden md:inline-table w-full h-full table-auto text-sm text-left text-gray-500">
                  <thead className="sticky top-0 text-xs text-white uppercase bg-primario z-10">
                      <tr>
                          <th className="py-3 px-6">
                              Nombre del producto
                          </th>
                          <th className="py-3 px-6">
                              Categoria
                          </th>
                          <th className="py-3 px-6">
                              Precio
                          </th>
                          <th className="py-3 px-6">
                              Acciones
                          </th>
                          <th className="py-3 px-3">
                              Disponible
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                        (filtroProductos.length>0)? filtroProductos?.map((producto)=>(
                          <ProductoTabla 
                            key={producto?.id}
                            onShowFormActualizar={onShowFormActualizar}
                            onDeleteProducto={onDeleteProducto}
                            producto={producto}
                          />
                        )):
                        <tr>
                          <td>
                            <div className="h-full w-full flex flex-col justify-center items-center">
                              <img className="w-36 " src="https://res.cloudinary.com/djvsdtbda/image/upload/v1666795371/journal/romlyfelw53jyrlypjlw.webp" alt="" />
                              <p className=" text-principal font-semibold">Inventario vacio</p>
                            </div>
                          </td>
                        </tr>
                      }
                  </tbody>
              </table>
              <div className="md:hidden">
                  {
                    (filtroProductos.length>0)?filtroProductos.map((producto,index)=>(
                      <article key={index} className="w-4/5 bg-white rounded-lg p-2 mb-5">
                        <p className="text-principal">{producto.nombre} <span className="bg-blue-400 font-semibold text-white py-0.5 px-1 rounded-lg"> {producto.id_categoria}</span></p>
                        <div>
                          <p className="text-principal font-bold">{producto.precio} $</p>
                          <div className="flex gap-2 mt-2">
                              <button
                                onClick={()=>onShowFormActualizar(producto)} 
                                className="text-sm font-bold py-1 px-2 rounded-lg 
                                bg-primario hover:bg-blue-800 text-white"
                                type="button"
                              >
                                Actualizar
                              </button>
                              <button
                                onClick={()=>onDeleteProducto({id:producto.id,imagen:producto.imagen})}
                                className="text-sm font-bold py-1 px-2 rounded-lg bg-red-500 
                                hover:bg-red-600 text-white" 
                                type="button">
                                Eliminar
                              </button>
                          </div>
                          <div className="mt-5 flex justify-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" onChange={(e)=>onToogleState(e.target.checked,producto?.id)} value={disponible} className="sr-only peer" checked={(producto?.disponible==1)?true:false} />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                            </label>
                          </div>
                        </div>
                      </article>
                    )):
                    <div className="h-full w-full flex flex-col justify-center items-center">
                      <img className="w-36 " src="https://res.cloudinary.com/djvsdtbda/image/upload/v1666795371/journal/romlyfelw53jyrlypjlw.webp" alt="" />
                      <p className=" text-principal font-semibold">Inventario vacio</p>
                    </div>
                  }
              </div>
            </div>

            }
          </div>
        </main>
    </>
  )
}

// Para celulares