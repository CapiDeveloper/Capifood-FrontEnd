import { Link } from "react-router-dom"

export const Contact = () => {
  return (
    <>
        <aside className="bg-white w-full">
            <div className="flex flex-col md:flex-row w-11/12 mx-auto items-center">
                <div className="flex flex-col items-center md:items-start gap-y-6 mt-5">
                    <h1 className="text-azulOscuro font-bold text-3xl sm:text-5xl text-center md:text-left">Empieza a administrar tu negocio totalmente gratis!!</h1>
                    <p className="text-principal font-normal text-center md:text-left">
                        <strong>Capi food</strong> es totalmente gratis, lo puede utilizar en cualquier
                        tipo de dispositivo. Contactenos para entregar sus credenciales
                        y pueda empezar a utilizar la aplicacion sin ninguna restriccion.
                    </p>
                    <div className="flex flex-col md:flex-row gap-2 items-center">
                        <img className="w-8" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674516399/journal/zbj6xjcxj8ssdilyqmwg.png" alt="Telefono Bryan Chacha" />
                        <a className="text-principal font-semibold" href="tel:+593555005500">0980497305</a>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 items-center">
                        <img className="w-8" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674516399/journal/ht9f91tcvuyiqxzzu1yc.png" alt="Telefono Bryan Chacha" />
                        <a className="text-principal font-semibold" href="mailto:morocho.12@gmail.com">morocho.12chacha@gmail.com</a>
                    </div>
                </div>
                <div className="w-full md:w-3/4 mt-8">
                    <img className="w-full drop-shadow-2xl" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674521643/journal/e6fxliufsbpi3gyinwft.png" alt="Imagen de mesero" />
                </div>
            </div>
        </aside>
        <main className="bg-white mb-5">
            <div className="w-11/12 mx-auto">
                <h2 className="text-azulOscuro font-bold text-3xl text-center md:text-start mb-3">Redes sociales y otros</h2>
                <nav>
                    <ul className='flex justify-center md:justify-start gap-5'>
                        <li className='w-9 rounded-full border border-azul hover:bg-blue-100 p-1'><a href="https://www.facebook.com/bryan.chacha.9003" target="_blank" ><img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674501199/CapiFood/dae2qqojtgzcr79srtiw.png" alt="Logo de facebook" /></a></li>
                        <li className='w-9 rounded-full border border-azul hover:bg-blue-100 p-1'><a href="https://www.instagram.com/chacha_bryan/" target="_blank" ><img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674501199/CapiFood/jb9katwvvu0bqrtguhqu.png" alt="Logo de instagram" /></a></li>
                        <li className='w-9 rounded-full border border-azul hover:bg-blue-100 p-1'><a href="https://api.whatsapp.com/send?phone=+593980497305&text=Vengo%20de%20la%20aplicacion%20web%20CapiFood,%20necesito%20comunicarme%20con%20usted." target="_blank" ><img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674501199/CapiFood/x4hga11niedg2b4m6eff.png" alt="Logo de whatsapp" /></a></li>
                        <li className='w-9 rounded-full border border-azul hover:bg-blue-100 p-1'><a href="https://www.linkedin.com/in/bryan-chacha-morocho/" target="_blank" ><img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674501199/CapiFood/ipqr29xis5ce34pk0hmu.png" target="_blank" alt="Logo de aedin" /></a></li>
                        <li className='w-9 rounded-full border border-azul hover:bg-blue-100 p-1'><a href="https://github.com/CapiDeveloper" target="_blank" ><img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674529609/journal/uyotv6orreqkvm7enytz.png" alt="Logo de Github" /></a></li>
                    </ul>
                </nav>
            </div>
        </main>
    </>
  )
}