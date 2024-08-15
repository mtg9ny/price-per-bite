import Header from "./Header"
import SideBar from "./Sidebar";
import styles from "../styles/create-recipe.module.css"

export default function CreateRecipe() {
    return (
        <>
            <Header />
            <div className={styles.bodyContent}>
                <SideBar />
                <div className={styles.individualMainContainer}>Create Recipe: not implemented.</div>
            </div>
        </>
    )
}