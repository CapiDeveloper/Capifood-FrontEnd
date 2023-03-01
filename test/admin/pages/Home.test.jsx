import { render,screen } from "@testing-library/react"
import { Home } from "../../../src/admin/pages/Home"

describe('Pruebas a <Home />', () => {
    test('El nombre del negocio debe aparecer en la pagina de home', () => {
        const nombre_negocio = 'popo';
        render(<Home />);
        screen.debug();
    })
})