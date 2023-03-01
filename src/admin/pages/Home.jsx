import { useSelector } from "react-redux";

export const Home = () => {

  const {nombre_negocio} = useSelector(state=>state.auth);

  return (
    <main className="overflow-y-scroll h-full not-appearance-scrollbar-width">
      <div>
        <h1 className="font-bold text-3xl text-principal ">Bienvenido, {nombre_negocio} <span className="">🖐</span></h1>
        <p className="mt-2">Encuentra novedades y beneficios que te trae CapiFood.</p>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-principal">CapiFood</h2>
        <p className="mt-2 text-principal">CapiFood te permitira gestionar de mejor manera su negocio.</p>
      </div>
      <div className="md:grid md:grid-cols-2">
          <div className="pt-5">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center bg-white gap-2 p-2 rounded-lg shadow-md">
                <svg width={20} height={20} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.48 14.48"><title>listo-SGV</title><path d="M7.49,14.49a7,7,0,1,1,7-7A7,7,0,0,1,7.49,14.49Z" transform="translate(-0.25 -0.26)" fill="#fff"/><path d="M7.49.76A6.74,6.74,0,1,1,.75,7.5,6.75,6.75,0,0,1,7.49.76m0-.5A7.24,7.24,0,1,0,14.73,7.5,7.24,7.24,0,0,0,7.49.26Z" transform="translate(-0.25 -0.26)" fill="#345ea8"/><polyline points="2.59 7.24 6.38 10.37 11.89 4.44" fill="#fff"/><path d="M6.62,11a.39.39,0,0,1-.26-.1L2.58,7.82a.41.41,0,0,1,.52-.64l3.49,2.88,5.24-5.64a.43.43,0,0,1,.59,0,.42.42,0,0,1,0,.58L6.92,10.91A.43.43,0,0,1,6.62,11Z" transform="translate(-0.25 -0.26)" fill="#345ea8"/></svg>
                <p>Reportes mensuales y anuales.</p>
              </li>
              <li className="flex items-center bg-white gap-2 p-2 rounded-lg shadow-md">
                <svg width={20} height={20} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.48 14.48"><title>listo-SGV</title><path d="M7.49,14.49a7,7,0,1,1,7-7A7,7,0,0,1,7.49,14.49Z" transform="translate(-0.25 -0.26)" fill="#fff"/><path d="M7.49.76A6.74,6.74,0,1,1,.75,7.5,6.75,6.75,0,0,1,7.49.76m0-.5A7.24,7.24,0,1,0,14.73,7.5,7.24,7.24,0,0,0,7.49.26Z" transform="translate(-0.25 -0.26)" fill="#345ea8"/><polyline points="2.59 7.24 6.38 10.37 11.89 4.44" fill="#fff"/><path d="M6.62,11a.39.39,0,0,1-.26-.1L2.58,7.82a.41.41,0,0,1,.52-.64l3.49,2.88,5.24-5.64a.43.43,0,0,1,.59,0,.42.42,0,0,1,0,.58L6.92,10.91A.43.43,0,0,1,6.62,11Z" transform="translate(-0.25 -0.26)" fill="#345ea8"/></svg>
                <p>Inventario de productos</p>
              </li>
              <li className="flex items-center bg-white gap-2 p-2 rounded-lg shadow-md">
                <svg width={20} height={20} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.48 14.48"><title>listo-SGV</title><path d="M7.49,14.49a7,7,0,1,1,7-7A7,7,0,0,1,7.49,14.49Z" transform="translate(-0.25 -0.26)" fill="#fff"/><path d="M7.49.76A6.74,6.74,0,1,1,.75,7.5,6.75,6.75,0,0,1,7.49.76m0-.5A7.24,7.24,0,1,0,14.73,7.5,7.24,7.24,0,0,0,7.49.26Z" transform="translate(-0.25 -0.26)" fill="#345ea8"/><polyline points="2.59 7.24 6.38 10.37 11.89 4.44" fill="#fff"/><path d="M6.62,11a.39.39,0,0,1-.26-.1L2.58,7.82a.41.41,0,0,1,.52-.64l3.49,2.88,5.24-5.64a.43.43,0,0,1,.59,0,.42.42,0,0,1,0,.58L6.92,10.91A.43.43,0,0,1,6.62,11Z" transform="translate(-0.25 -0.26)" fill="#345ea8"/></svg>
                <p>Punto de venta</p>
              </li>
              <li className="flex items-center bg-white gap-2 p-2 rounded-lg shadow-md">
                <svg width={20} height={20} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.48 14.48"><title>listo-SGV</title><path d="M7.49,14.49a7,7,0,1,1,7-7A7,7,0,0,1,7.49,14.49Z" transform="translate(-0.25 -0.26)" fill="#fff"/><path d="M7.49.76A6.74,6.74,0,1,1,.75,7.5,6.75,6.75,0,0,1,7.49.76m0-.5A7.24,7.24,0,1,0,14.73,7.5,7.24,7.24,0,0,0,7.49.26Z" transform="translate(-0.25 -0.26)" fill="#345ea8"/><polyline points="2.59 7.24 6.38 10.37 11.89 4.44" fill="#fff"/><path d="M6.62,11a.39.39,0,0,1-.26-.1L2.58,7.82a.41.41,0,0,1,.52-.64l3.49,2.88,5.24-5.64a.43.43,0,0,1,.59,0,.42.42,0,0,1,0,.58L6.92,10.91A.43.43,0,0,1,6.62,11Z" transform="translate(-0.25 -0.26)" fill="#345ea8"/></svg>
                <p>Soporte</p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center mt-8 md:mt-0 p-2">
            <img width={450} src="https://res.cloudinary.com/djvsdtbda/image/upload/v1661552214/journal/pndptzvzfvgomharysdp.png" alt="Soporte de la aplicacion" />
          </div>
          <div className="mt-5">
            <h2 className="font-bold text-2xl text-principal">Contáctenos</h2>
            <div className="p-5 flex gap-x-2 justify-between sm:justify-start sm:gap-x-5">
              <a target="_blank" className="w-8" href="https://www.facebook.com/bryan.chacha.9003">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFCElEQVRoge2ZX2xTdRTHP+c3GEM2iISgidHowzRm0eBoNVFcNCaKQUkEt65BWjRKiCZqog9GIw5iosb4YoIkGCLtGPtTkUAAs6CBIBilKzp0L/6JyoOGGEDYRjfW3uMDm/a293a97d142Sfpw+/3O79zzrf39vzOvYUZZpgSxC9HDc09tXNrtEmEJgttEKgXWKxQOx5oSOEMws+iDCgcTafNVwOJliE/4lcoRCUQ6V4uwtOqrATmeHQwoug+Y/ST5I5wL4iWm0nZQpau7WoW4U3gjnJ95KLQb5TNyfbWz8rZ71nIPes66rNW1VbgoXICTorIISsrz5/c2fKLp21ejAPR7tWobgcWeErOO4OKbkjFw7tK3WBKM1MJRDrbUP2UqRcBUCdIRzDS/S5oSV92CUYqgWjXR6hsqDS7chDYmoyHXpisEFRN5igYuf0dkJf9S80zwRvu/LHqz1O7DxczKnpFgpHOkCJd/uZVHiI8lYy1driuuy2MV6eTjB9oFTKC0KEWvbOqst+rNfdctiaTuTw0ZuZVmwVjVNUZtaKqvFLEx0UVGlOx1l+dFme57RovsX6I+EKtsUhq59q/XNbPAwSjXQOT+JlvlC3AcqdFx6oViHQ+iT/nxMHa09c9WkSEJxQeuTvS+YTTmoMQFZCNPoQ9a6iOHDnyYKZyX/9jIRudSnKBkECkezk+tB2qbDsRX3W2Uj8OLGlc2/Nw/mTBb2S8AawYFXWtdo3RnqVGragI1/9nb3FzqX2GMboO6M2ds22975m9daOZ9N9472LzuXhL2ixMJFqy+QvjIr4Gqivwn9aaeYtS2x6/NDFhu7VGx0bup3IRKPzmJALAWNaLVCYCYC6jw8tsfnMHIjRVGOCKH7jgtqbiU9ds6QO5Q5sQC23wJQgMO0+rCCz2I4CIseVqvyJwqx9BAMdy0dCcmA3M9imELdf88rvInyDTgi3XfCF+tCTTRV3uoMQHK3cMumo0k12Y+0mnTcjJdiDRcjnfduIDvO8xtO3oyD8QL+GxNFqWDv2wa835Uu3dbAORrpu8xAUdzB3lX5Ez3pz5ym1ejFXElmu+EMdef8ppazN4rJiiYnvLYhOiqv0+pOWZu36qvxG4xsseUetU7tj+GzEcdz4Bijg0pr4x2nPONpnlgvN7KZXGaKKxwIelQZejx5Us5lju2C5kTu1hRoaHgXmlOlTYYtSyTxoOAivybRuaE7ONWn0FTry/77yUYdQmxHZrXekm5XPPbqcZRfefao/Y2qCCc0RFP56+lMrDCNsK5vInUrHQIWCyFwFXDYX+ZCz8Zf68w8kuCrwxDTmVhai87jTv2KL0xVv3AgWqrzYCvX3toYNOa6691iyjzwKDbutXgQsWZr3boquQb3aEfzdoFK8FfmpQEVmfirecdjMo2v2eiIf3CPK2/3l5RTcnY6GeYhaTtvHJeGijqHzoX1LeEOGDvni4bTK7kp5Hku2hlxR9jem9zRR0UzLW+mopxiU/WKXi4fcQaQb+KTu10jln0NWlXIkJPD0h9sVCu7OZ7BKQA95zKxXZJ1W65EQ8vMfLLte/Fdz4bteaP4DHlkY7V4glbyEEvfpw4VtgU188VFav51nIBKlY+ABwIBjtblK1ngNZCcz36GYQZY8Y2Z6MhY6WmwtUIGSC8QSONjT3VM+pySwTU3Uvao052dZce15JL9itov1gjo2k5fhAouVypTnMMMMU8i9cpsCE6djKgwAAAABJRU5ErkJggg==" />  
              </a>
              <a target="_blank" className="w-8" href="https://www.linkedin.com/in/bryan-chacha-morocho/">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAClElEQVRoge2ZQUiTYRiAn/fbzKS6ROShMtC6FtnKKIoSCk91cm2YZQSdxEuXIigQku4pQZd05hK9dTKJLhmYbQaduhTqzWOoI2j+b4fcz5zTvk3/ucX/nN7//b733fvwje3ffvDx8QTJTTR1DB11loOdKnoFOASgwqwoY0Gjzyb7ozMln9KCVSKh9td3EOkFdq6zf0mV28nByKj3oxWGK9LYHm82Yt6R55RySDtizkwPhJPejlYYxg3EPODfEgBBUX3o3UjFYbLiU7ZFgnPBg1k2hSsi4NiXSQF7S4MrosgH2yJFJrwZp3hcEUekG/htUZMOqNPj3UjF4YpMD4STokSAhQ32L4lI29RgNOH9aIWx9gux7dVBJ1DV6aAtAg0r6R+KjDvpdO+XeNtsiWf0qUjct1bo5vBH4KxdmU4kYtHzm61tbR0JzNToJURbUM4pHAD2A47CvCBfVXSMahNPvgj/tBVRu0H+kohFiq7dPVdbtVQ3f1eVewj1FiULAvc/x64/B8n7WiZf0msW6+anFPosJQD2KPSFbo28PdYe25Vvw7aIACeKqlK9XC3Vby52vFxzd75dIkWjaPOiU/MkN19xIit0nb4xfDw7UakiQQ2w6qdEpYqgyrWT0fi+zHXFigA7pCpwNXNRySKg2pQJt0skpegjCS43JOq/BVQ4IspjIFVQF0MoEwa3ekILUqranByMfsokkvAd6G7sGB43Du+BGptGqtRm4tKfiNKTLZHNdH9kUpSntq0E9mbikosYTHyjdccwVEA79+RKLnL4F3MbrdenTFH/ZJZcZHQ0vLyZ9fWo7I/fLHyRcsMXKTd8kXLDFyk3fJFywxcpN/5HEbV+LihCzvNGu9q1deux1f18fHz+AOtjwm8VjUMnAAAAAElFTkSuQmCC" />
              </a>
              <a target="_blank" className="w-8" href="https://www.instagram.com/chacha_bryan/">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFe0lEQVRoge2a3W8UVRiHn/fMQttQY+FCorReKX7FhNDdlhtQlF6YGEuNrnwsbbmgTYzRVMWP+A+AGtRETSg3BbpsXWNaMFEjUBAMaVnakBhF1MRYCsZE6yfQ4sx5vdhidrfbj53pQi94kk32nPOed36/mXPOnNlZuMENioIUEhyOJe9S460VpA5YAlQBC2ZJy0XgHDCMykFU9p/qjJ6daecZGanZlAirmO2KPuRXpU9OiNWtqc71J6YLnNJIdcvOeTJW8RaqT08XW0QUeK98aHHb0aOr3cmCJhV3/4b4wpKQ8xGwuhjqCkWQ3lHXfeKrfRt/z9+eh+qWnfPMaMVn12EoTYkIxy9dMmu+/jB6JbfN5O0wVvHWXDMBoMrKsjL7Zr62CVekZlMibEVO5mubI6gVExncHR3IrJxwRVTMduauCQAxarflVmYZCceSd13nIfWJ47lVjudWAZ9OEbemtjl+Z2ZFlhE13tpiqJspjue29sdjw/3x2LA42jpVrGedLK1ZRgRZUwyBRUGkLrMYymm+fRYOMQLaA3IAa769IqPDAPO1tFLRe8ToYwJrFRbmdvScUHtkc6IVQF3TjujkR1HN0ppr5NYABi4j7HBc9/X+eOyvPO1nxz891S3JNhnVl0DbgLKMmEfUkyGAKU2kuS2zkGvkpoKkj6NwXsXUX10Sw7F9dWJMVGElUDkedk7R4waTTLVHDwGv1WxKdHsiPZLegBZKltZcIwWjcD7kuSv647HhmsaupRZ2AavynM+7Bblb0S3hxsQXjrFb+jvWn6rd2LnCdUJ9Ps38T947ewFcVjH1/fHYcKTpg1UKfcCq6bvJA551+pbHEiv747FhY2gARoMICWZE2DG4OzpQ09i1FNWefBN4ChYZIz3LY8k7Uh3rUoK8E0RKECMjWmLeALCwq0ATV1lkjG0H+NfM3yaQd2c7EwIY0Z6B9uif4di+OmY0nCZldaQp8fDpjoY/rLDfb5IARuQAgBgT9Z8jjVqJAjiqB/zm8G3EwBmA8SU2GJK+otY63wTQ44+Ll82F8a+Bls1xKgEuj3Heb4Kgy+9sYQHK518JMkL8saDMXt0i+D6LGZwH8GS+7y2SbyOelXsBFD3mN0cGxwBE7H1+E/g2IkYfSycwSb85rmLVpnNIOqcfgsyR+uqW5M2pPU8dAv3CbxJBegf3buhd1txdoUi93zxBjCxKb8XBqLMZ+NVHjhHPSitAyBt7FajwKybgqqXP12xKhE/ujf5orT4OjBTQ9zfF1A92Rn8INyZrEJ4NoiTo8lvqifTUbuysHOxcf9xaUwscma6TIL0qUjuwJ/plZHOiCmw3UBpESODnEYElrhPqizR3NaQ6oingoUhT4mG1EkVYSfoXe1QYEuW4VZsc3LuhFyDcmKxRz3aT87Tnh1wjf+PjKVFgiVqORRq73v7XlGxPdTQcBg5PFr+subsiPSfsc0BJocfL0Po/uUZ+xufjLlCq8Mo8O9Za3dS131E94Bk9M3oxNAxQusCtdKzco1Cvdqwe8T+xx7mQWcg1MgQsDZJdYaEozRZpFiuUldl0gzXYIIkn8lNmIXuyqxyc3WMVD1X5PLOcZcRx3O5rK8c/jujHmeUsI/0dG79nikk6ZxA5eHLPuu8yqybcR8SYF2G2h/OsYi3yam7lBCOpjuhp4P1rIskHovJu7rsRmOTOXj60uI25OcSOXRqVrfka8ho5enS1O+Z6TwrSW1xdBXHYNSX1+d4fwjRvph588Ejon9t/2QE8M11sEbGi8u6Cc7e84Ov1dCaRpn33WTXbBB6dPX0z4pBaXh7oXDc4XWBBZ7m2OX6nZ521iNShWkX6149yvypz+If0XzjOiehBI3b/+O3gBje4nvwHmObkMmlUk7wAAAAASUVORK5CYII=" />
              </a>
              <a target="_blank" className="w-8" href="https://api.whatsapp.com/send?phone=+593980497305&text=Vengo%20de%20la%20aplicacion%20web%20CapiFood,%20necesito%20comunicarme%20con%20usted.">
                <img src="data:image/png;base64,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" />  
              </a>
            </div>
          </div>
      </div>
    </main>
  )
}