import styles from './Rodape.module.scss';
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'

export default function Rodape(){
    return(
        <>
            <footer className={styles.rodape}>
                <img  src={facebook} alt = "Logo do facebook"></img>
                <img  src={instagram} alt = "Logo do instagram"></img>
                <img  src={twitter} alt = "Logo do twitter"></img>
                <p>Desenvolvido por Jessica C. M. Cunha</p>
            </footer>
        </>
    )
}