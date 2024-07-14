import React from 'react';
import logo from '../assets/cookie.svg';
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <div className={`${styles.header} ${styles.shadow}`}>
            <div>
                <img src={logo} className={styles.image} alt="Logo" />
                <div>Price Per Bite</div>
            </div>
        </div>
    );
}
