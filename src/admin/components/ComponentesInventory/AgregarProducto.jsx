import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { createProduct } from "../../../store/inventario/thunks";
import { Alerta } from "../../../ui/componentes/Alerta";

const formData = {
    nombre:'',
    precio:'',
    descripcion:'',
    id_categoria:'DEFAULT'
}

export const AgregarProducto = ({mostrarFormProduct,cancelButton}) => {

    const {isFormValid,onResetForm,onInputChange,nombre,precio,descripcion,id_categoria,formState} = useForm(formData);
    const [alerta, setAlerta] = useState({error:false,mensaje:''});
    const [imagen, setImagen] = useState({});
    const dispatch = useDispatch();
    const { categorias,productos } = useSelector(state=>state.inventario);    

    const onShowForm = ()=>{
        onResetForm();
        cancelButton(state=>!state);
    }   

    const onFileInputChange = (e)=>{
        setImagen(e.target.files[0]);
    }

    const onHandleSubmit = (e)=>{
        e.preventDefault();

        if( isFormValid || id_categoria==='DEFAULT'){
            return;
        };

        // En caso de que el producto ya exista
        if(productos?.some(producto => producto.nombre == nombre.trim())){
            setAlerta({
                error:true,
                mensaje:'Producto ya existe'
            });
            return;
        };
        if(imagen == {}) return;

        //Guardar en backend y en store del inventario
        dispatch(createProduct({formState,imagen}));
        onResetForm();
        cancelButton(state=>!state);
    }    

  return (
    <section className={`absolute flex justify-center items-center top-0 right-0 bg-opacity-70 z-20 bg-gray-500 ${!mostrarFormProduct? 'hidden':'h-full w-full' }`} >
        <form onSubmit={onHandleSubmit} className="opacity-100 w-4/5 md:w-auto bg-white p-2 rounded-md shadow-lg">
        <legend className="text-center font-bold text-xl text-principal">Agregar producto</legend>
        <fieldset className="mt-2 grid md:grid-cols-2 gap-5 items-center">
            <div className=" w-full flex flex-col">
                <label className="text-principal font-semibold" htmlFor="nombre">Nombre: </label>
                <input
                    onChange={onInputChange}
                    className="p-1 shadow-md border-2 border-gray-400 rounded-md" 
                    name="nombre" type="text" id="nombre" 
                    placeholder="Nombre del producto" 
                    required={true}
                    value={nombre}
                />
            </div>
            <div className="w-full flex flex-col">
                <label className="text-principal font-semibold" htmlFor="descripcion">Descripcion: </label>
                <input
                    onChange={onInputChange}
                    className="p-1 shadow-md border-2 border-gray-400 rounded-md" 
                    name="descripcion" type="text" id="descripcion" step="0.01" 
                    placeholder="Precio del producto" 
                    required={true}
                    value={descripcion}
                />
            </div>
            <div className="w-full flex flex-col">
                <label className="text-principal font-semibold" htmlFor="precio">Precio: </label>
                <input
                    onChange={onInputChange}
                    className="p-1 shadow-md border-2 border-gray-400 rounded-md" 
                    name="precio" type="number" id="precio" step="0.01" 
                    placeholder="Precio del producto" 
                    required={true}
                    min={0}
                    value={precio}
                />
            </div>
            <div className="w-full flex flex-col">
                <label className="text-principal font-semibold p-1 border-2 border-gray-400 bg-white rounded-lg mt-3 md:mt-6" htmlFor="imagen">{`${imagen?.name? imagen?.name+' 📷':'Seleccionar Imagen 👆'}`} </label>
                <input
                    onChange={onFileInputChange}
                    className="hidden"
                    type="file" id="imagen"
                    accept="image/png, image/jpeg, image/webp, image/avif"
                />
            </div>
            <div className="w-full flex flex-col">
            <label className="text-principal font-semibold" htmlFor="id_categoria">Categoria</label>
            <select className="p-1 bg-white rounded-lg text-principal font-semibold border-2 border-gray-400"
                name="id_categoria" id="id_categoria"
                onChange={onInputChange}
                required={true}
                defaultValue={id_categoria}
                >
                <option value="DEFAULT" disabled={true} >-- Seleccione --</option>
                {
                    categorias?.map((categoria,index) =>(
                    <option key={index} value={categoria.nombre} >{categoria.nombre}</option>
                    ))
                }
                </select>
            </div>
        </fieldset>
        <div className="w-full mt-5 flex flex-col md:flex-row gap-y-3 md:gap-x-2 md:justify-end md:items-center">
            {
                alerta.error&&
                <Alerta mensaje={alerta.mensaje} />
            }
            <input type="submit" disabled={isFormValid || id_categoria==='DEFAULT'} className={`${(isFormValid || id_categoria==='DEFAULT')?'cursor-not-allowed':'cursor-pointer'} md:w-auto w-full text-sm font-bold py-2 px-3 rounded-lg bg-primario hover:bg-blue-800 text-white`} value='Crear producto' />
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