import { useState } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import styles from "../styles/create-recipe.module.css";

export default function CreateRecipe() {
    const [ingredients, setIngredients] = useState([""]);

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, ""]);
    };

    const handleRemoveIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

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

                        <div className={styles.pair}>
                            <label>Ingredients:</label>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} className={styles.ingredientPair}>
                                    <input
                                        type="text"
                                        value={ingredient}
                                        onChange={(e) => handleIngredientChange(index, e)}
                                        placeholder="Enter an ingredient"
                                        required
                                    />
                                    {ingredients.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveIngredient(index)}
                                            className={styles.removeButton}
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddIngredient}
                                className={styles.addButton}
                            >
                                Add Ingredient
                            </button>
                        </div>

                        <div className={styles.horizontalLine}></div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
