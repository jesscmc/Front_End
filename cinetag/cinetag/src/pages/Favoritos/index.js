import styles from './Favoritos.module.css';
import Banner from 'componentes/Banner';
import Titulo from 'componentes/Titulo';
import Card from 'componentes/Card';
import { useFavoritoContext } from 'Contextos/Favoritos';

function Favoritos(){
    const {favoritos} = useFavoritoContext();

    return(
        <>
            <Banner imagem="favoritos"></Banner>
                <Titulo>
                    <h1>Esses são os meus filmes favoritos</h1>
                </Titulo>
                <section className={styles.container}>
                {favoritos.map((fav) => {
                    return (
                    <Card {...fav} key={fav.id}></Card>
                    )
                })}
            </section>
        </>
    )
}

export default Favoritos;