import logo from '../assets/cookie.svg'
import styles from '../styles/homepage.module.css'

export default function Header() {
    return (
        <>
            <div className={`${styles.header} ${styles.shadow}`}>
                <div>
                    <img src={logo} className={styles.image} alt="" />
                    <div>Price Per Bite</div>
                </div>
            </div>
        </>
    );
}