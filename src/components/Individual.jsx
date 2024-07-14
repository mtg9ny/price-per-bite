import json from '../tempJSON.js'
import Header from './Header.jsx'
import Title from './Title.jsx'
import Image from './Image.jsx'
import Keywords from './Keywords.jsx'
import Summary from './Summary.jsx'
import Instructions from './Instructions.jsx'
import Ingredients from './Ingredients.jsx'
import styles from '../styles/individual.module.css'

export default function Individual() {
    function removeTags(text) {
        return text.replace(/<[^>]*>/g, '');
    }
    return (
        <>
            <Header />
            <Title title={json.title} />
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
    );
}