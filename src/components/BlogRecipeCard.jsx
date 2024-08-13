import styles from "../styles/blog-recipe-card.module.css";
import useBlogRecipe from "../hooks/useBlogRecipe";
import { useNavigate } from 'react-router-dom';

export default function BlogRecipeCard({ id, title, description, instructions, ingredients }) {
    const { setBlogRecipe } = useBlogRecipe();
    const navigate = useNavigate();

    function handleClick() {
        setBlogRecipe(id);
        console.log(`Current blog recipe set to: ${id}`);
        setTimeout(() => {
            navigate('/blog/recipe', { replace: true });
            window.location.reload();
        }, 100);
    }

    return (
        <div className={`${styles.container} ${styles.shadow}`} onClick={handleClick}>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
}
