import React, { useContext } from 'react';
import styles from './Trusted.module.css';
import { LanguageContext } from '../../context/language/languageContext';
import { translation } from '../../utils/translation';
import Layout from '../Layout';
import customerImg1 from '../../assets/images/trustedlogo/logo-1.png';

import customerImg2 from '../../assets/images/trustedlogo/logo-2.png';
import customerImg3 from '../../assets/images/trustedlogo/logo-3.png';
import customerImg4 from '../../assets/images/trustedlogo/logo-4.png';
import customerImg5 from '../../assets/images/trustedlogo/logo-5.png';
import customerImg6 from '../../assets/images/trustedlogo/logo-6.png';
import customerImg7 from '../../assets/images/trustedlogo/logo-7.png';

const Trusted = () => {
    const { language } = useContext(LanguageContext);
    return (
        <Layout>
            <div className={styles.trustedRow}>
                <div className={styles.titleWrapper}>
                    <div className={styles.title}>
                        {translation.trustedTitle[language]}
                    </div>
                </div>
                <div className={styles.trustedLogo}>
                    <div className={styles.logos}>
                        <img
                            className={styles.logoElement}
                            src={customerImg1}
                        />
                    </div>

                    <div className={styles.logos}>
                        <img
                            className={styles.logoElement}
                            src={customerImg2}
                        />
                    </div>
                    <div className={styles.logos}>
                        <img
                            className={styles.logoElement}
                            src={customerImg3}
                        />
                    </div>
                    <div className={styles.logos}>
                        <img
                            className={styles.logoElement}
                            src={customerImg4}
                        />
                    </div>
                    <div className={styles.logos}>
                        <img
                            className={styles.logoElement}
                            src={customerImg5}
                        />
                    </div>
                    <div className={styles.logos}>
                        <img
                            className={styles.logoElement}
                            src={customerImg6}
                        />
                    </div>

                    <div className={styles.logos}>
                        <img
                            className={styles.logoElement}
                            src={customerImg7}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Trusted;
