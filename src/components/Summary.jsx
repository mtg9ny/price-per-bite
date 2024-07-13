import styles from '../styles/individual.module.css'

export default function Summary({ summary }) {
    return (
        <>
            <div className={styles.summary}>{summary}</div>
        </>
    )
}