import styles from "../../App.module.css"
import powered from "../../assets/powered.png"


export const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
                <img src={powered} alt="Logo" width={150}/>
            </div>
        </header>
    )
}