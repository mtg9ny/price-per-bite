import styles from '../styles/item.module.css'
export default function Item({ title, url }) {

    const style = {
        backgroundImage: `url(${url})`,
    }
    return (
        <>
            <div className={styles.container} style={style}>
                <div className={styles.textBackground}>
                    <div>{title}</div>
                </div>
            </div>
        </>
    );
}