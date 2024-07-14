import styles from '../styles/individual.module.css'

export default function Image({ url }) {
    const style = {
        backgroundImage: `url(${url})`,
    }

    return (
        <>
            <div className={styles.image} style={style}>
            </div>
        </>
    )
}