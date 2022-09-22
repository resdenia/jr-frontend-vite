import React, { useContext } from 'react';
import { translation } from '../../utils/translation';
import styles from './Footer.module.css';
import { LanguageContext } from '../../context/language/languageContext';
import Layout from '../Layout';
function Footer() {
    const { language } = useContext(LanguageContext);

    return (
        <Layout>
            <div className={styles.footerContainer}>
                <div className={styles.footerRow}>
                    <div className={styles.copyrightWrapper}>
                        <p>{translation.copyright[language]}</p>
                    </div>
                    <div className={styles.footerLinks}></div>
                </div>
            </div>
        </Layout>
    );
}

export default Footer;
