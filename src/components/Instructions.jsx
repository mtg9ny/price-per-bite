import styles from '../styles/individual.module.css';

export default function Instructions({ instructions }) { // Instructions is an array
    return (
        <>
            <div className={styles.instructions}>
                <div>Instructions:</div>
                {instructions.map((obj) => (
                    <div key={obj.number}>{`Step ${obj.number}: ${obj.step}`}</div>
                ))}
            </div>
        </>
    );
}
