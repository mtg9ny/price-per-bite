import Header from "./Header"
import SideBar from "./Sidebar";
import useBlogRecipe from "../hooks/useBlogRecipe"
import { useState, useEffect } from "react";
import styles from "../styles/blog-homepage.module.css"

export default function BlogIndividual() {
    const { blogRecipe } = useBlogRecipe();
    const [json, setJson] = useState(null);

    useEffect(() => {
        if (blogRecipe) {
            fetch(`http://localhost:3000/catalog/recipes`, { mode: 'cors' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    const recipe = data.recipes.find(recipe => recipe._id === blogRecipe);
                    setJson(recipe);
                })
                .catch(error => console.error("Failed to fetch data:", error));
        }
    }, [blogRecipe]);

    return (
        <>
            <Header />
            <div className={styles.bodyContent}>
                <SideBar />
                <div className={styles.individualMainContainer}>
                    {json ? (
                        <>
                            <div className={styles.title}>{json.title}</div>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.recipeText}>Description: {json.description}</div>
                            <div className={styles.recipeText}>Instructions: {json.instructions}</div>
                            <div className={styles.recipeText}>Ingredients:</div>
                            <ul>
                                {json.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.buttonContainer}>
                                <div>Update Entry</div>
                                <div>Delete Entry</div>
                            </div>
                        </>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </>
    )
}