import styles from "../styles/blog-homepage.module.css"
import Header from "./Header.jsx";
export default function BlogHomePage() {
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.individualRecipe}>Box 1</div>
                <div className={styles.individualRecipe}>Box 2</div>
                <div className={styles.individualRecipe}>Box 3</div>
            </div>
        </>
    )
}