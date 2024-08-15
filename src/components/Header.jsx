import logo from '../assets/cookie.svg';
import styles from '../styles/header.module.css';
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPostOutline } from '@mdi/js';

export default function Header() {
    const navigate = useNavigate();
    function handleClickPrice() {
        setTimeout(() => {
            navigate('/', { replace: true });
            window.location.reload();
        }, 100);
    }
    function handleClickBlog() {
        setTimeout(() => {
            navigate('/blog', { replace: true });
            window.location.reload();
        }, 100);
    }

    return (
        <div className={`${styles.header} ${styles.shadow}`}>
            <div>
                <div onClick={handleClickPrice} className={styles.nav}>
                    <img src={logo} className={styles.image} alt="Logo" />
                    <div>Price per Bite</div>
                </div>
                <div className={styles.verticalLine}></div>
                <div onClick={handleClickBlog} className={styles.nav}>
                    <Icon path={mdiPostOutline} size={1} />
                    <div>Blog</div>
                </div>
            </div>
        </div>
    );
}
