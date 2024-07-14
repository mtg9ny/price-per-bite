import { useState, useEffect } from 'react'
import styles from '../styles/individual.module.css'

export default function Ingredients({ ingredients }) {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const tempArr = [];
        ingredients.forEach((step) => {
            step.ingredients.forEach((ingredient) => {
                tempArr.push(ingredient);
            });
        });
        setArr(tempArr);
    }, [ingredients]);

    return (
        <>
            <div className={styles.ingredients}>
                <div>Ingredients:</div>
                <div className={styles.ingredientsContainer}>
                    {arr.map((ingredient) => (
                        <div className={styles.ingredient} key={ingredient.id}>
                            {ingredient.localizedName}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}