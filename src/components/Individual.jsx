import Header from './Header.jsx'
import Title from './Title.jsx'
import Image from './Image.jsx'
import Keywords from './Keywords.jsx'
import Summary from './Summary.jsx'
import Instructions from './Instructions.jsx'
import Ingredients from './Ingredients.jsx'
import styles from '../styles/individual.module.css'
import { useState, useEffect } from 'react'
import useID from '../hooks/useID.jsx'

export default function Individual() {
    const { ID } = useID();
    const [json, setJson] = useState(null);
    const apiKey = '6a16595f4c9a49c9aea37e1a0e93945c';

    useEffect(() => {
        if (ID) {
            fetch(`https://api.spoonacular.com/recipes/${ID}/information?apiKey=${apiKey}`, { mode: 'cors' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => setJson(data))
                .catch(error => console.error("Failed to fetch data:", error));
        }
    }, [ID, apiKey]);

    function removeTags(text) {
        return text.replace(/<[^>]*>/g, '');
    }
    return (
        <>
            {json ? (
                <>
                    <Header />
                    <div>
                        <Title title={json.title} />
                    </div>
                    <div className={styles.flexContainer}>
                        <div className={styles.left}>
                            <Image url={json.image} />
                            <Keywords json={json} />
                        </div>
                        <div className={styles.right}>
                            <Summary summary={removeTags(json.summary)} />
                            <Instructions instructions={json.analyzedInstructions[0].steps} />
                            <Ingredients ingredients={json.analyzedInstructions[0].steps} />
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}