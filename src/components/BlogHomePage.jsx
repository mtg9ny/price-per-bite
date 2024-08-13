import styles from "../styles/blog-homepage.module.css"
import Header from "./Header.jsx";
import BlogRecipeCard from "./BlogRecipeCard.jsx";
import SideBar from "./Sidebar.jsx";
import { useState, useEffect } from "react";
export default function BlogHomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/catalog/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    const isDataLoaded = recipes && recipes.length > 0;

    return (
        <>
            <Header />
            <div className={styles.bodyContent}>
                <SideBar />
                {isDataLoaded ? (
                    <div className={styles.mainContainer}>
                        {recipes.map((element, index) => (
                            <BlogRecipeCard key={index} id={element._id} title={element.title} description={element.description} instructions={element.instructions} ingredients={element.ingredients} />
                        ))}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>

        </>
    )
}