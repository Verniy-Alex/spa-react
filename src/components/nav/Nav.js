import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../routes/Routes'
import styles from '../nav/nav.module.css'

const Nav = () => {
    return (
        <nav className={styles['nav-container']}>
            <div className={styles['nav-wrapper']}>
                <Link className={styles['nav-link']} to={appRoutes.home.path}>Home</Link>
                <Link className={styles['nav-link']} to={appRoutes.posts.path}>Posts</Link>
                <Link className={styles['nav-link']} to={appRoutes.galery.path}>Galery</Link>
                <Link className={styles['nav-link']} to={appRoutes.contacts.path}>Contacts</Link>
            </div>
        </nav>
    );
};

export default Nav;