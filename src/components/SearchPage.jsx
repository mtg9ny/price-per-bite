import useFetchAPI from "../hooks/useFetchAPI";
import Header from "./Header";
import Item from "./Item";
import styles from '../styles/search-page.module.css'

export default function SearchPage() {
    const { JSONObject } = useFetchAPI();

    const isDataLoaded = JSONObject && JSONObject.results && JSONObject.results.length > 0;
    return (
        <>
            <Header />
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