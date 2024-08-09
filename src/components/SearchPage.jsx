import useFetchAPI from "../hooks/useFetchAPI";
import Header from "./Header";
import useInput from '../hooks/useInput'
import Item from "./Item";
import styles from '../styles/search-page.module.css'
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
    const navigate = useNavigate();
    const { input } = useInput();
    const { JSONObject } = useFetchAPI();

    function handleClick() {
        setTimeout(() => {
            navigate('/', { replace: true });
            window.location.reload();
        }, 100);
    }

    const isDataLoaded = JSONObject && JSONObject.results && JSONObject.results.length > 0;
    return (
        <>
            <Header />

            <div className={styles.headerContainer}>
                <div className={styles.headerButton} onClick={handleClick}>← Back to Search</div>
                <div className={styles.headerText}>Search results for &quot;{input}&quot;</div>
            </div>

            {isDataLoaded ? (
                <div className={styles.itemContainer}>
                    {JSONObject.results.map((element, index) => (
                        <Item key={index} title={element.title} url={element.image} id={element.id} />
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}