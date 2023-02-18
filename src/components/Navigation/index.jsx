import styles from './Navigation.module.css'

export default function Navigation(){
    return(
        <nav className={styles.navigation}>
            <ol className={styles.navigation__lista}>
                <li className={styles.navigation__lista__item}>1</li>
                <li className={styles.navigation__lista__item}>2</li>
                <li className={styles.navigation__lista__item}>3</li>
                <li className={styles.navigation__lista__item}>4</li>
            </ol>
        </nav>
    )
}