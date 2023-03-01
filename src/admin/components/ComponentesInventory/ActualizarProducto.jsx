
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import { updateProduct } from "../../../store/inventario/thunks";

export const ActualizarProducto = ({mostrarFormActualizar,cancelButton}) => {
  console.log(mostrarFormActualizar);
  const { productos,categorias } = useSelector(state=>state.inventario);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id:mostrarFormActualizar.mostrar&& mostrarFormActualizar.info.id,
    nombre:mostrarFormActualizar.mostrar&& mostrarFormActualizar?.info.nombre,
    precio: mostrarFormActualizar.mostrar&& mostrarFormActualizar?.info.precio,
    categoria: mostrarFormActualizar?.mostrar? mostrarFormActualizar?.info.id_categoria:'',
    descripcion: mostrarFormActualizar?.mostrar && mostrarFormActualizar?.info.descripcion ? mostrarFormActualizar?.info.descripcion:'',
    disponible: mostrarFormActualizar.mostrar&& mostrarFormActualizar.info.disponible,
  });

  const [alerta, setAlerta] = useState({msg:'', valido:false});

  const {nombre,precio,categoria,descripcion} = formData;
  
    // Escuchar cambios en inputs
  const onChangeInput = ({target})=>{
    setFormData({
        ...formData,
        [target.name]:target.value
    });
  }

  // Ocultar formulario
  const onShowForm = ()=>{
    cancelButton({
        mostrar:!mostrarFormActualizar.mostrar,
        info : {}
    })
  }

  // Submit a formulario
  const onHandleSubmit = (e)=>{
    e.preventDefault();

    // validar que todo este lleno
    if([nombre,precio,categoria].flat().includes('')){
      setAlerta({
        msg:'Todos los campos son obligatorios',
        valido:true,
      });
      return;
    };

  const productosDiferenteActual = productos?.filter(producto => producto.nombre.trim() !== mostrarFormActualizar?.info.nombre.toString().trim());

  const existeProducto = Object.values(productosDiferenteActual).some((value) => value.nombre.trim() === nombre.toString().trim());

    if(existeProducto){
      setAlerta({
        msg:'El producto ya existe',
        valido:true,
      });
      return;
    };

    // Saber si el usuario ha hecho algun cambio o no en el fomulario
    
    if(mostrarFormActualizar.info.nombre == nombre && mostrarFormActualizar.info.precio === precio && mostrarFormActualizar.info.id_categoria == categoria && mostrarFormActualizar.info.descripcion === descripcion ){
      setAlerta({
        msg:'No ha realizado ningun cambio',
        valido:true,
      });
      return;
    }
    // Listo para actualizar producto aqui :)
    dispatch(updateProduct(formData));

    setAlerta({});
    cancelButton({
      mostrar:!mostrarFormActualizar.mostrar,
      info : {}
  })
  };

  return (
    <section className={`absolute flex justify-center items-center top-0 right-0 bg-opacity-70 z-20 bg-gray-500 ${!mostrarFormActualizar.mostrar? 'hidden':'h-full w-full' }`} >
        <form onSubmit={onHandleSubmit} className="opacity-100 w-4/5 bg-white p-2 rounded-md shadow-lg">
        <legend className="text-center font-bold text-xl text-principal">Actualizar producto</legend>
        <fieldset className="mt-2 flex flex-col lg:flex-row md:gap-x-5 items-center justify-between">
            <div className=" w-full flex flex-col">
                <label className="text-principal font-semibold" htmlFor="nombre">Nombre: </label>
                <input
                    onChange={onChangeInput}
                    className="p-1 shadow-md border-2 border-gray-400 rounded-md"
                    name="nombre" type="text" id="nombre"
                    placeholder="Nombre del producto"
                    value={nombre}
                    required={true}
                />
            </div>
            <div className="w-full flex flex-col">
                <label className="text-principal font-semibold" htmlFor="descripcion">Descripcion: </label>
                <input
                    onChange={onChangeInput}
                    value={descripcion}
                    className="p-1 shadow-md border-2 border-gray-400 rounded-md"
                    name="descripcion" type="text" id="descripcion"
                    placeholder="Descripcion del producto"
                    required={true}
                />
            </div>
            <div className="w-full flex flex-col">
                <label className="text-principal font-semibold" htmlFor="precio">Precio: </label>
                <input
                    onChange={onChangeInput}
                    value={precio}
                    className="p-1 shadow-md border-2 border-gray-400 rounded-md"
                    name="precio" type="number" id="precio"
                    placeholder="Precio del producto"
                    required={true}
                />
            </div>
            <div className="w-full flex flex-col">
            <label className="text-principal font-semibold" htmlFor="categoria">Categoria</label>
            <select className="p-1 bg-white rounded-lg text-principal font-semibold border-2 border-gray-400"
                name="categoria" id="categoria"
                onChange={onChangeInput}
                defaultValue={mostrarFormActualizar?.info.id_categoria}
                >
                {
                    categorias.map((categoria,index) =>(
                    <option key={index} value={categoria.nombre} >{categoria.nombre}</option>
                    ))
                }
                </select>
            </div>
        </fieldset>
        <div className="w-full mt-5 flex flex-col md:flex-row gap-y-3 md:gap-x-2 md:justify-end items-center">
            {
              alerta.valido&&
              <p className="md:mr-3 text-red-500 font-semibold flex gap-1 justify-center">&#9888; <span>{alerta.msg}</span></p>
            }
            <input type="submit" className="cursor-pointer md:w-auto  w-full text-sm font-bold py-2 px-3 rounded-lg bg-primario hover:bg-blue-800 text-white" value='Actualizar producto' />
            <button
                onClick={onShowForm}
                className="md:w-auto w-full text-sm font-bold py-2 px-3 rounded-lg
                bg-red-500 hover:bg-red-600 text-white"
                type="button">
                Cancelar
            </button>
        </div>
        </form>
    </section>
  )
}