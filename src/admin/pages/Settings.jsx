import { VentaCategorias } from "../components/ComponentesStatistics/VentaCategorias"
import { VentaProductos } from "../components/ComponentesStatistics/VentaProductos"

export const Settings = () => {
  return (
    <main className="h-full overflow-y-scroll scrollbar w-full">
      <h1 className="font-bold text-principal text-4xl mt-5 mb-2">Resumen de ventas</h1>
		  <p className="text-principal font-semibold">Reportes de ventas realizadas en su negocio.</p>
      <VentaProductos />
      <VentaCategorias />
    </main>
  )
}
