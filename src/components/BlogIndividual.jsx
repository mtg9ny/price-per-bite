import Header from "./Header"
import useBlogRecipe from "../hooks/useBlogRecipe"
import { useState, useEffect } from "react";
import styles from '../styles/blog-individual.module.css'

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
            {json ? (
                <>
                    <Header />
                    <p>{json.title}</p>
                    <p>{json.description}</p>
                    <p>{json.instructions}</p>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}