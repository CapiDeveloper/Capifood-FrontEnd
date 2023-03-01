import { Link } from "react-router-dom"

export const Inicio = () => {
  return (
    <>
        <aside className="bg-white w-full">
            <div className="flex flex-col md:flex-row w-11/12 mx-auto items-center">
                <div className="flex flex-col items-center md:items-start gap-y-6 mt-5">
                    <h1 className="text-azulOscuro font-bold  text-3xl md:text-5xl text-center md:text-left">Administra tu negocio fácil y rápido</h1>
                    <p className="text-azul font-normal text-center md:text-left">¡Crea tu menú totalmente personalizado, empieza a manejar tu negocio gratis!</p>
                    <div>
                        <Link className="bg-azul hover:bg-azulOscuro text-white p-2 rounded-lg" to="/contacto">Empezar ahora</Link>
                    </div>
                </div>
                <div className="w-full md:w-3/4 mt-8 relative">
                    
                    <picture className="absolute w-full drop-shadow-2xl">
                        <source srcSet="https://res.cloudinary.com/djvsdtbda/image/upload/v1674663350/journal/bqsgfxwsru9vozckn8tz.avif" type="image/avif" />
                        <source srcSet="https://res.cloudinary.com/djvsdtbda/image/upload/v1674663350/journal/bqsgfxwsru9vozckn8tz.webp" type="image/webp" />
                        <img src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674663350/journal/bqsgfxwsru9vozckn8tz.webp" alt="Mesero restaurante" />
                    </picture>
                    <img className="animate-y relative" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674663351/journal/kl891vcdbzkggbck15wy.webp" alt="Imagen anuncios" />
                </div>
            </div>
        </aside>
        <svg className="md:-mt-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0086f8" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,154.7C480,128,600,96,720,101.3C840,107,960,149,1080,181.3C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <section className="bg-azul">
        <div className="flex flex-col md:flex-row w-11/12 mx-auto items-center gap-x-5">
                <div className="flex flex-col items-center md:items-start gap-y-6">
                    <h2 className="text-white font-bold text-3xl md:text-5xl text-center md:text-left">Utilízalo desde cualquier dispositivo.</h2>
                    <p className="text-white font-normal text-center md:text-left">Puedes utilizarlo desde cualquier tipo de dispositivo y desde cualquier parte del mundo.</p>
                    <div>
                        <Link className="bg-white hover:bg-azulOscuro hover:text-white text-azul p-2 rounded-lg" to="/contacto">Empezar ahora</Link>
                    </div>
                </div>
                <div className="w-full md:w-2/6 mt-8 md:mt-0">
                    <img loading="lazy" className="w-full" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674507289/journal/xemysduhv9lra8cnkwhv.webp" alt="Imagen de mesero" />
                </div>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0086f8" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,160C480,192,600,224,720,229.3C840,235,960,213,1080,192C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <section>
        <div className="flex flex-col-reverse md:flex-row w-11/12 mx-auto items-center gap-x-5">
                <div className="w-full md:w-2/6 mt-8 md:mt-0">
                    <img loading="lazy" className="w-full" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674508491/journal/lrjk6vhacx7srgsfzdnu.webp" alt="Imagen de tiempo" />
                </div>
                <div className="flex flex-col items-center md:items-start gap-y-6">
                    <h2 className="text-azul font-bold text-3xl md:text-5xl text-center md:text-left">Ahorra tiempo y aumenta tu productividad.</h2>
                    <p className="text-azul font-normal text-center md:text-left">Realiza las órdenes de tus clientes y organiza mejor sus pedidos.</p>
                    <div>
                        <Link className="bg-azul hover:bg-azulOscuro text-white p-2 rounded-lg" to="/contacto">Empezar ahora</Link>
                    </div>
                </div>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0086f8" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,154.7C480,128,600,96,720,101.3C840,107,960,149,1080,181.3C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <section className="bg-azul">
        <div className="flex flex-col md:flex-row w-11/12 mx-auto items-center gap-x-5">
                <div className="flex flex-col items-center md:items-start gap-y-6">
                    <h2 className="text-white font-bold text-3xl md:text-5xl text-center md:text-left">Toma decisiones con base en tus estadísticas.</h2>
                    <p className="text-white font-normal text-center md:text-left">Conoce más sobre tu negocio a través de reportes de tus ventas.</p>
                    <div>
                        <Link className="bg-white hover:bg-azulOscuro hover:text-white text-azul p-2 rounded-lg" to="/contacto">Empezar ahora</Link>
                    </div>
                </div>
                <div className="w-full md:w-2/6 mt-8 md:mt-0">
                    <img loading="lazy" className="w-full" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674508934/journal/hsd9qybzqzuk6ovmnj9u.webp" alt="Imagen de contabilidad" />
                </div>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0086f8" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,160C480,192,600,224,720,229.3C840,235,960,213,1080,192C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <section>
        <div className="flex flex-col-reverse md:flex-row w-11/12 mx-auto items-center gap-x-5">
                <div className="w-full md:w-2/6 mt-8 md:mt-0">
                    <img loading="lazy" className="w-full" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674510731/journal/vergfrizb8yksbxwbepi.webp" alt="Imagen de tiempo" />
                </div>
                <div className="flex flex-col items-center md:items-start gap-y-6">
                    <h2 className="text-azul font-bold text-3xl md:text-5xl text-center md:text-left">Organiza tu menú</h2>
                    <p className="text-azul font-normal text-center md:text-left">¡Crea tu inventario personalizado, organiza tus productos y empieza a vender ya!.</p>
                    <div>
                        <Link className="bg-azul hover:bg-azulOscuro text-white p-2 rounded-lg" to="/contacto">Empezar ahora</Link>
                    </div>
                </div>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0086f8" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,154.7C480,128,600,96,720,101.3C840,107,960,149,1080,181.3C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <main className="bg-azul">
            <h2 className="text-white font-bold text-3xl md:text-5xl text-center p-1">¿Por qué elegirnos?</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                <article className="flex flex-col items-center">
                    <img loading="lazy" className="w-2/6 drop-shadow-2xl" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674511478/journal/vgapbrifdnej0hv8xhmo.webp" alt="Imagen de soporte" />
                    <h3 className="text-white font-bold text-xl text-center">Soporte</h3>
                </article>
                <article className="flex flex-col items-center">
                    <img loading="lazy" className="w-2/6 drop-shadow-2xl" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674511763/journal/nadwj36ydkonkiepwlan.webp" alt="Imagen de Facil de usar" />
                    <h3 className="text-white font-bold text-xl text-center">Fácil de usar</h3>
                </article>
                <article className="flex flex-col items-center">
                    <img loading="lazy" className="w-2/6 drop-shadow-2xl" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674511849/journal/zf0kvnfpuncvxuzjgej9.webp" alt="Imagen de punto de venta" />
                    <h3 className="text-white font-bold text-xl text-center">Punto de venta</h3>
                </article>
                <article className="flex flex-col items-center">
                    <img loading="lazy" className="w-2/6 drop-shadow-2xl" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674512105/journal/o5sg5qvjmkwqo7lphj2o.webp" alt="Imagen de reporte de ventas" />
                    <h3 className="text-white font-bold text-xl text-center">Reporte de ventas</h3>
                </article>
                <article className="flex flex-col items-center">
                    <img loading="lazy" className="w-2/6 drop-shadow-2xl" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674512233/journal/tpioxadsvm0y8d9pa7qn.webp" alt="Imagen de ordenes de servicios" />
                    <h3 className="text-white font-bold text-xl text-center">Organización de entrega de servicios</h3>
                </article>
                <article className="flex flex-col items-center">
                    <img loading="lazy" className="w-2/6 drop-shadow-2xl" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674512330/journal/dn7u0toytj9nbrfxkaaf.webp" alt="Imagen de responsive" />
                    <h3 className="text-white font-bold text-xl text-center">Adaptable a cualquier dispositivo</h3>
                </article>
            </section>
        </main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0086f8" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,160C480,192,600,224,720,229.3C840,235,960,213,1080,192C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </>
  )
}