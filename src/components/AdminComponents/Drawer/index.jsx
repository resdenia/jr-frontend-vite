import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Drawer.module.css';

const Drawer = () => {
    return (
        <div className={styles.wrapperDrawer}>
            <ul className={styles.drawerMenu}>
                <li className={styles.drawerMenuItem}>
                    <Link className={styles.drawerMenuItemLink} to='/dashboard'>
                        <svg
                            className={styles.iconElement}
                            height='24px'
                            viewBox='0 0 24 24'
                            width='24px'
                        >
                            <path
                                className={styles.iconElementPath}
                                d='M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z'
                            />
                        </svg>
                    </Link>
                </li>
                <li className={styles.drawerMenuItem}>
                    <Link
                        className={styles.drawerMenuItemLink}
                        to='/dashboard/wallets'
                    >
                        <svg
                            className={styles.iconElement}
                            height='48'
                            viewBox='0 0 48 48'
                            width='48'
                        >
                            <path d='M0 0h48v48h-48z' fill='none' />
                            <path
                                className={styles.iconElementPath}
                                d='M6 26h16v-20h-16v20zm0 16h16v-12h-16v12zm20 0h16v-20h-16v20zm0-36v12h16v-12h-16z'
                            />
                        </svg>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Drawer;
