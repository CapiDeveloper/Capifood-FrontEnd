
export const About = () => {
  return (
    <>
        <aside className="bg-white w-11/12 mx-auto">
            <div className="overflow-clip flex flex-col md:flex-row w-full m-auto items-center md:gap-5 mx-auto">
                <div className="flex flex-col items-center gap-y-6 w-full">
                    <h1 className="text-azulOscuro font-bold text-3xl md:text-5xl md:text-left">HOLA SOY BRYAN CHACHA, DESARROLLADOR DE APLICACION WEB.</h1>
                    <p className="text-principal font-normal text-justify">
                        Hola mi nombre es <strong>Bryan Estuardo Chacha Morocho</strong>, estudiante de la carrera de tecnologías de la Información y autodidacta en el ámbito tecnológico. Mi proposito es ayudar por medio de CapiFood administrar mejor los negocios como bares, restaurantes y otros.
                    </p>
                    <p className="text-principal font-normal text-justify">
                    Soy desarrollador de aplicación web y Lower Code, siempre trato de aprender y desenvolverme en el área tecnológico con tecnologías innovadoras que me permitan solucionar problemas de la vida real. Si deseas contactarte conmigo, a continuación dejo mi contacto:
                    </p>
                </div>
                <div className="w-11/12 m-auto flex justify-center h-full sm:w-4/5 mx-auto relative pt-5 mt-2 mb-6">
                    <img className="w-11/12 sm:w-10/12 h-11/12 md:drop-shadow-xl absolute" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674674821/journal/kp2yquyqrjwfnw8rviat.webp" alt="Imagen de Bryan Chacha" />
                    <img className="w-11/12 sm:w-10/12 h-11/12 animate-circle relative" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674675221/journal/e2bx2baxo12xuro6smx2.webp" alt="Icono tecnologias" />
                </div>
            </div>
        </aside>
        <section className="w-11/12 mx-auto mt-5">
            <div className="flex gap-2 items-center">
                <img className="w-8" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674516399/journal/zbj6xjcxj8ssdilyqmwg.webp" alt="Telefono Bryan Chacha" />
                <a className="text-principal font-semibold" href="tel:+593980497305">0980497305</a>
            </div>
            <div className="flex gap-2 items-center">
                <img className="w-8" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674516399/journal/ht9f91tcvuyiqxzzu1yc.webp" alt="Telefono Bryan Chacha" />
                <a className="text-principal font-semibold" href="mailto:morocho.12@gmail.com">morocho.12chacha@gmail.com</a>
            </div>
        </section>
        <section className="w-11/12 mx-auto mt-5">
            <h2 className="text-azulOscuro font-bold text-2xl md:text-3xl">Portafolio</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                <article className="shadow-lg h-max">
                    <div className="h-40">
                        <img className="mx-auto h-full" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1677507454/CapiFood/oz0rbsymnzovcnlh2vly.webp" alt="Diseño Netflix" />
                    </div>
                    <div className="bg-azul p-2 text-center">
                        <h1 className="text-white font-bold">FrontEnd Netflix</h1>
                        <p className="text-white font-normal mb-3">Diseño streaming Netflix, creado con React y css.</p>
                        <div className="w-full flex justify-center">
                            <a className="border-2 border-white py-1 px-2 text-white hover:bg-white hover:text-azul  font-normal" target={"_blank"} href="https://merry-moonbeam-a88950.netlify.app/browse/dashbord">Ver Pagina web</a>
                        </div>
                    </div>
                </article>  
                <article className="shadow-lg h-max">
                    <div className="h-40">
                        <img className="mx-auto h-full" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1677507456/CapiFood/uycdccfhangms9ifmmep.webp" alt="Diseño de casas" />
                    </div>
                    <div className="bg-azul p-2 text-center">
                        <h1 className="text-white font-bold">FrontEnd Arquitectura</h1>
                        <p className="text-white font-normal mb-3">Diseños arquitectonicos, creado con HTML y Sass.</p>
                        <div className="w-full flex justify-center">
                            <a className="border-2 border-white py-1 px-2 text-white hover:bg-white hover:text-azul  font-normal" target={"_blank"} href="https://reverent-tereshkova-783b1d.netlify.app/">Ver Pagina web</a>
                        </div>
                    </div>
                </article>
                <article className="shadow-lg h-max">
                    <div className="h-40">
                        <img className="mx-auto h-full" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1677507456/CapiFood/nwqduh92sloeed2uud5b.webp" alt="Diseño de cafeteria" />
                    </div>
                    <div className="bg-azul p-2 text-center">
                        <h1 className="text-white font-bold">FrontEnd Cafeteria</h1>
                        <p className="text-white font-normal mb-3">Diseño de una cafeteria, creado con HTML y CSS.</p>
                        <div className="w-full flex justify-center">
                            <a className="border-2 border-white py-1 px-2 text-white hover:bg-white hover:text-azul  font-normal" target={"_blank"} href="https://practical-roentgen-1e428f.netlify.app/">Ver Pagina web</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        <main className="w-11/12 mx-auto mt-10 mb-5">
            <h2 className="text-azulOscuro font-bold text-2xl md:text-3xl">Habilidades</h2>
            <h3 className="text-azulOscuro font-bold text-xl md:text-2xl mt-5 mb-2">Front-end</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 m-auto" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674518705/journal/ritfn3nyhfg3ktzgdvyj.webp" alt="Icono html" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">HTML5</h3>
                        <p className=" text-white text-base">Lenguaje de marcado para la elaboración de páginas web.</p>
                    </div>
                </article>
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 m-auto" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674518706/journal/vggagkeybzlsrzyxpied.webp" alt="Icono css" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">CSS</h3>
                        <p className=" text-white text-base">Es un lenguaje que se usa para estilizar elementos escritos en un lenguaje de marcado como HTML.</p>
                    </div>
                </article>
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 m-auto" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674518705/journal/pztu080lj9rhotctzr52.webp" alt="Icono JS" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">JavaScript</h3>
                        <p className=" text-white text-base">Lenguaje de programación interpretado, dialecto del estándar ECMAScript.</p>
                    </div>
                </article>
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 m-auto" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674519338/journal/egtlhg29tcfop1tm9xz5.webp" alt="Icono React JS" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">React JS</h3>
                        <p className=" text-white text-base">Libreria de JavaScript, mantenida por facebook</p>
                    </div>
                </article>
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 m-auto" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674518706/journal/syyprj4gekf4uviplsjs.webp" alt="Icono Redux" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">Redux Toolkit</h3>
                        <p className=" text-white text-base">Simplifica Redux con una mejor abstracción y mas conveniente sobre el “texto original”</p>
                    </div>
                </article>
            </div>
            <h3 className="text-azulOscuro font-bold text-xl md:text-2xl mt-5 mb-2">Back-end</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 mx-auto pl-1" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674518706/journal/j39hrr1uixwrmivoayik.webp" alt="Icono SQL" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">SQL</h3>
                        <p className=" text-white text-base">Lenguaje de Consulta Estructurado, permite manipular y descargar datos de una base de datos.</p>
                    </div>
                </article>
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 m-auto pl-1" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674518706/journal/ld1hqzhicubq4qoknpna.webp" alt="Icono PHP" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">PHP</h3>
                        <p className=" text-white text-base">Lenguaje de programación interpretado​ del lado del servidor.</p>
                    </div>
                </article>
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 m-auto" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674518706/journal/uh8bdlafygdiegwruuvq.png" alt="Icono React Mysql" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">MySQL</h3>
                        <p className=" text-white text-base">Sistema de gestión de bases de datos relacional desarrollado bajo licencia dual.</p>
                    </div>
                </article>
            </div>
            <h3 className="text-azulOscuro font-bold text-xl md:text-2xl mt-5 mb-2">Chat Bot</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 mx-auto pl-1" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674518705/journal/mgzcmypzprkbhdhfd03z.webp" alt="Icono RChat Bot" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">Many Chat</h3>
                        <p className=" text-white text-base">Aplicación externa vinculada a Facebook que nos ayuda a realizar acciones automáticas y en bloque con el servicio de Facebook Messenger.</p>
                    </div>
                </article>
            </div>
            <h3 className="text-azulOscuro font-bold text-xl md:text-2xl mt-5 mb-2">Ilustraciones</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                <article className="flex items-center gap-2 rounded-lg border border-azul">
                    <img className="w-10 h-10 mx-auto pl-1" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674518705/journal/ldk4mrznjpuwtve3fukd.webp" alt="Icono Ilustrator" />
                    <div className="bg-azul p-1 h-full flex-1">
                        <h3 className=" text-white font-semibold text-lg">Adobe Illustrator</h3>
                        <p className=" text-white text-base">Editor de gráficos vectoriales sirve para editar, entre otras cosas.</p>
                    </div>
                </article>
            </div>
        </main>
    </>
  )
}