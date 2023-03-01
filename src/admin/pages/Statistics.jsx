import { useState } from "react";
import { useSelector } from "react-redux";

import { InfoVenta } from "../components/ComponentesStatistics/InfoVenta";

export const Statistics = () => {

	const {productosVendidos, dineroVentas,isLoading} = useSelector(state=>state.invoice);
	const [popover, setPopover] = useState(false);
	// Estados para botones

  return (
	<>
	<main className="h-full overflow-y-scroll scrollbar p-2">
		<div className="flex flex-col md:flex-row justify-between items-center">
			<div>
				<h1 className="font-bold text-principal text-4xl mt-5 mb-2">Órdenes</h1>
				<p className="text-principal font-semibold">Información de órdenes pendientes y completadas</p>
			</div>
			<div className="relative">
				<img onMouseOut={()=>setPopover(!popover)} onMouseEnter={()=>setPopover(!popover)} className="mt-5 md:mt-0 w-2/4 cursor-pointer" src="https://res.cloudinary.com/djvsdtbda/image/upload/v1674588974/journal/xxuc6ykdyy4dsenaujhr.png" alt="Icono de informacion" />
				<div className={`${popover?'opacity-100':'opacity-0'} p-2 rounded-lg absolute bg-blue-500 w-40 text-center -left-16 md:-left-40`}>
					<p className="font-semibold text-white">Productos: {productosVendidos} </p>
					<p className="font-semibold text-white">Total: {dineroVentas}$</p>
				</div>
			</div>
		</div>
		<section className="mt-5">
				{
					isLoading?<div className="mt-5 loading"></div>:
					<div>
						<InfoVenta />
					</div>
				}
		</section>
	</main>
	</>
  )
};