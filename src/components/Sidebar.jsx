import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import { mdiPencil } from '@mdi/js';
import { mdiNoteMultiple } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/sidebar.module.css'
export default function SideBar() {
    const navigate = useNavigate();

    function handleClickHome() {
        setTimeout(() => {
            navigate('/', { replace: true });
            window.location.reload();
        }, 100);
    }

    function handleClickAllRecipes() {
        setTimeout(() => {
            navigate('/blog', { replace: true });
            window.location.reload();
        }, 100);
    }

    function handleClickCreateRecipe() {
        setTimeout(() => {
            navigate('/blog/recipe/create-recipe', { replace: true });
            window.location.reload();
        }, 100);
    }

    return (
        <>
            <div className={`${styles.container} ${styles.shadow}`}>
                <div onClick={handleClickHome}>
                    <Icon path={mdiHome} size={1.1} />
                    <div>Home</div>
                </div>
                <div onClick={handleClickAllRecipes}>
                    <Icon path={mdiNoteMultiple} size={1} />
                    <div>All Recipes</div>
                </div>
                <div onClick={handleClickCreateRecipe}>
                    <Icon path={mdiPencil} size={1} />
                    <div>Create Recipe</div>
                </div>
            </div>
        </>
    )
}