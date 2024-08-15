import Header from "./Header"
import SideBar from "./Sidebar";
import styles from "../styles/create-recipe.module.css"

export default function CreateRecipe() {
    return (
        <>
            <Header />
            <div className={styles.bodyContent}>
                <SideBar />
                <div className={styles.individualMainContainer}>
                    <div className={styles.title}>Create New Recipe:</div>
                    <div className={styles.horizontalLine}></div>
                    <form action="">
                        <div className={styles.pair}>
                            <label htmlFor="title">Title:</label>
                            <input type="text" id="title" name="title" required />
                        </div>

                        <div className={styles.pair}>
                            <label htmlFor="description">Description:</label>
                            <textarea name="description" id="description" rows="2" cols="50" placeholder="Enter your description here..." maxLength="500" required></textarea>
                        </div>

                        <div className={styles.pair}>
                            <label htmlFor="instructions">Instructions:</label>
                            <textarea name="instructions" id="instructions" rows="2" cols="50" placeholder="Enter your instructions here..." maxLength="500" required></textarea>
                        </div>
                        <div className={styles.horizontalLine}></div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}