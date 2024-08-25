import Header from "./Header"
import SideBar from "./Sidebar";
import useBlogRecipe from "../hooks/useBlogRecipe"
import { useState, useEffect } from "react";
import styles from "../styles/blog-homepage.module.css"
import { useNavigate } from "react-router-dom";

export default function BlogIndividual() {
    const { blogRecipe } = useBlogRecipe();
    const [json, setJson] = useState(null);
    const navigate = useNavigate();

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

    function deleteEntry() {
        fetch(`http://localhost:3000/catalog/recipe/${json._id}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipeid: json._id }),
        })
            .then(response => {
                if (response.ok) {
                    // Handle successful deletion, e.g., redirect or remove the element from the DOM
                    console.log('Entry deleted successfully');
                    setTimeout(() => {
                        navigate('/blog', { replace: true });
                        window.location.reload();
                    }, 100);
                } else {
                    // Handle failure
                    console.error('Failed to delete entry');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function updateEntry() {
        if (!json || !json._id) {
            console.error('Recipe data is missing or does not have an ID:', json);
            return;
        }
        navigate('/blog/recipe/create-recipe', { state: json });
    }

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
                                <div onClick={updateEntry}>Update Entry</div>
                                <div onClick={deleteEntry}>Delete Entry</div>
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