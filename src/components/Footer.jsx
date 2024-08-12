import styles from '../styles/homepage.module.css'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div>Created by Conroy Lee</div>
                <a href="https://github.com/mtg9ny" target="_blank">GitHub</a>
            </div>
        </>
    );
}