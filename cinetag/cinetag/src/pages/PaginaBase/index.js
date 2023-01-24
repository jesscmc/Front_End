import Container from "componentes/Container";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import FavoritosProvider from "Contextos/Favoritos";
import { Outlet} from "react-router-dom";

function PaginaBase(){
    return(
        <main>
            <Cabecalho/>
                <FavoritosProvider>
                    <Container>
                        <Outlet></Outlet>
                    </Container>
                </FavoritosProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase