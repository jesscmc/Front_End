import styles from "./Banner.module.scss"
import banner from "./banner.png"

export default function PaginaInicial(){
    return (
        <div className={styles.banner}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço"></img>
        </div>
    )
}