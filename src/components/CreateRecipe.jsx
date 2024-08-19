import { useState } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import styles from "../styles/create-recipe.module.css";
import { useNavigate } from 'react-router-dom';

export default function CreateRecipe() {
    const [ingredients, setIngredients] = useState([""]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const data = { title, description, instructions, ingredients };

        try {
            const response = await fetch('http://localhost:3000/catalog/recipe/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const responseData = await response.json();
                throw new Error(responseData.errors.map(err => err.msg).join(', '));
            }

            const result = await response.json();
            setSuccess(result.message);
            handleReroute();
        } catch (err) {
            setError(err.message);
        }
    };

    function handleReroute() {
        setTimeout(() => {
            navigate('/blog', { replace: true });
            window.location.reload();
        }, 100);
    }

    return (
        <>
            <Header />
            <div className={styles.bodyContent}>
                <SideBar />
                <div className={styles.individualMainContainer}>
                    <div className={styles.title}>Create New Recipe:</div>
                    <div className={styles.horizontalLine}></div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.pair}>
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.pair}>
                            <label htmlFor="description">Description:</label>
                            <textarea
                                name="description"
                                id="description"
                                rows="2"
                                cols="50"
                                placeholder="Enter your description here..."
                                maxLength="500"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className={styles.pair}>
                            <label htmlFor="instructions">Instructions:</label>
                            <textarea
                                name="instructions"
                                id="instructions"
                                rows="2"
                                cols="50"
                                placeholder="Enter your instructions here..."
                                maxLength="500"
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                                required
                            ></textarea>
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
                        {error && <div className={styles.error}>{error}</div>}
                        {success && <div className={styles.success}>{success}</div>}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
