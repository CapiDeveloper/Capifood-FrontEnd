export const fileUpload = async(file)=>{
    if(!file) return null;
        // almacenar imagen en cloudinary
        try {
            const urlCloudinary = `${import.meta.env.VITE_CLOUDINARY_IMAGES}`;
            const dataImg = new FormData();
            dataImg.append('file',file[0]);
            dataImg.append('upload_preset','Capi-food');

            const respuesta = await fetch(urlCloudinary,{
                method:'POST',

                body:dataImg
            });
            const resultado = await respuesta.json();
            if(resultado.url == '')return dispatch(errorChangeInventory('No se puede subir la imagen'));
            return resultado.url;
            
        } catch (error) {
            dispatch(errorChangeInventory('Algo fallo con el servidor de imagenes'));
            return null;
        }
}