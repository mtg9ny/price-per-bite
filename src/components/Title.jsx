import styles from '../styles/individual.module.css'
import { useNavigate } from 'react-router-dom';

export default function Title({ title }) {
    const navigate = useNavigate();

    function handleClick() {
        setTimeout(() => {
            navigate('/search', { replace: true });
            window.location.reload();
        }, 100);
    }

    return (
        <>
            <div className={`${styles.titleContainer} ${styles.shadow}`}>
                <div className={styles.backButton} onClick={handleClick}>← Back to Search Results</div>
                <div className={styles.recipeName}>{title}</div>
            </div>
        </>
    );
}