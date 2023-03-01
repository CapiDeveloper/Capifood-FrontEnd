
export const ButtonFullScreen = () => {

    const onScreenFull = ()=>{
    
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen() || 
            document.documentElement.webkitRequestFullscreen() || 
            document.documentElement.mozRequestFullScreen()
        }else{
            document.exitFullscreen() || document.webkitExitFullscreen() || document.mozCancelFullScreen()
        }
    }

  return (
            <svg onClick={onScreenFull} className="cursor-pointer" width={25} id="Capa_1" 
            data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.04 13.83"><title>
                zoom-SVG</title><polygon points="5.93 0.25 0.25 0.25 0.25 6.03 2.48 6.03 2.48 2.13 5.93 2.13 5.93 0.25" 
                fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9"/>
            <polygon points="8.11 0.25 8.11 2.13 11.55 2.13 11.55 6.03 13.79 6.03 13.79 0.25 8.11 0.25" fill="none" 
            stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9"/><polygon 
            points="5.93 13.58 0.25 13.58 0.25 7.8 2.48 7.8 2.48 11.7 5.93 11.7 5.93 13.58" fill="none" 
            stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9"/><polygon 
            points="8.11 13.58 8.11 11.7 11.55 11.7 11.55 7.8 13.79 7.8 13.79 13.58 8.11 13.58" fill="none" 
            stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9"/></svg>
        )
}