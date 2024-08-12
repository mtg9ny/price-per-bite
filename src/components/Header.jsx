import React from 'react';
import logo from '../assets/cookie.svg';
import styles from '../styles/header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    function handleClick() {
        setTimeout(() => {
            navigate('/', { replace: true });
            window.location.reload();
        }, 100);
    }

    return (
        <div className={`${styles.header} ${styles.shadow}`}>
            <div>
                <img src={logo} className={styles.image} alt="Logo" />
                <div onClick={handleClick} className={styles.nav}>Price Per Bite</div>
            </div>
        </div>
    );
}
