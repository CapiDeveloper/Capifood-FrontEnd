import { fileUpload } from "../../src/helpers/fileUpload"

describe('Pruebas a subida de archivos fileUpload', () => {
    test('Se debe subir correctamente la imagen a cloudinary', async() => {
        
        const imgUrl = 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        const resp = await fetch(imgUrl);
        const blob = await resp.blob();
        const file = new File([blob],'foto');

        const respuesta = await fileUpload(file[0],'foto.jpeg');
        expect(typeof respuesta).toBe('string');
        
    })
})