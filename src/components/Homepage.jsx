import logo from '../assets/cookie.svg'
import styles from '../styles/homepage.module.css'
export default function HomePage() {
    return (
        <>
            <div className={styles.mainDiv}>
                <div className={`${styles.header} ${styles.shadow}`}>
                    <div>
                        <img src={logo} className={styles.image} alt="" />
                        <div>Price Per Bite</div>
                    </div>
                </div>
                <div className={`${styles.inputContainer} ${styles.shadow}`} >
                    <div className={styles.titleBlock}>
                        <div className={styles.title}>Price Per Bite</div>
                        <div className={styles.divider}></div>
                    </div>
                    <div>Search for your recipe here!</div>
                    <div className={styles.searchBlock}>
                        <div className={styles.searchContainer}>
                            <input type="text" className={styles.styledInput} />
                            <div className={styles.horizontalDivider}></div>
                            <button type="submit" className={styles.submitArrow}>&gt;</button>
                        </div>
                        <div className={styles.bottomText}>Try searching for chicken parmesan, meatloaf, etc.</div>
                    </div>
                    <div>This website will automatically calculate the price of any recipe for you!</div>
                </div>

                <div className={styles.footer}>
                    <div>Created by Conroy Lee</div>
                    <div>https://github.com/mtg9ny</div>
                </div>
            </div>
        </>
    )
}