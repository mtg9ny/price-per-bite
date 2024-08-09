import useFetchAPI from "../hooks/useFetchAPI";
import Header from "./Header";
import useInput from '../hooks/useInput'
import Item from "./Item";
import styles from '../styles/search-page.module.css'

export default function SearchPage() {
    const { input } = useInput();
    const { JSONObject } = useFetchAPI();

    const isDataLoaded = JSONObject && JSONObject.results && JSONObject.results.length > 0;
    return (
        <>
            <Header />

            <div className={styles.headerContainer}>
                <div className={styles.headerButton}>← Back to Search</div>
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