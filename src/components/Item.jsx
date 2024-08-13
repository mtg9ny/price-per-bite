import styles from '../styles/item.module.css';
import useID from '../hooks/useID';
import { useNavigate } from 'react-router-dom';

// This is an individual card on the recipe search page
export default function Item({ title, url, id }) {
    const { setID } = useID();
    const navigate = useNavigate();

    const style = {
        backgroundImage: `url(${url})`,
    }

    function handleClick() {
        setID(id);
        console.log(`ID set to: ${id}`);
        setTimeout(() => {
            navigate('/search/individual', { replace: true });
            window.location.reload();
        }, 100);
    }

    return (
        <div className={styles.container} style={style} onClick={handleClick}>
            <div className={styles.textBackground}>
                <div>{title}</div>
            </div>
        </div>
    );
}
