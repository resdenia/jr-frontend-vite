import React, { useContext } from 'react';
import Layout from '../Layout';

import Title from '../Title';
import { translationOurWork } from '../../utils/translationOurWork';
import { LanguageContext } from '../../context/language/languageContext';
import styles from './OurWorkSecond.module.css';

import imgSrc1 from '../../assets/images/ourWorkSecond/img_1.png';
import imgSrc2 from '../../assets/images/ourWorkSecond/img_2.png';
import imgSrc3 from '../../assets/images/ourWorkSecond/img_3.png';

const OurWorkSecond = () => {
    const { language } = useContext(LanguageContext);

    const renderSectionIcons = () => {
        return translationOurWork.boxes.map((box) => {
            return (
                <div
                    key={box['title'][language].split(' ').join('-')}
                    className={styles.iconBoxWrapper}
                >
                    <div className={styles.iconBoxEl}>{box.icon()}</div>
                    <div className={styles.iconBoxDescription}>
                        <div className={styles.iconBoxTitle}>
                            <Title className='violetColor' tag={'h4'}>
                                {box.title[language]}
                            </Title>
                        </div>
                        <div className={styles.iconBoxText}>
                            <p className={styles.iconBoxParagraph}>
                                {box.description[language]}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    };
    return (
        <Layout>
            <div className={styles.wrapperOurWorkContainer}>
                <div className={styles.wrapperOurWork}>
                    <div className={styles.wrapperTitle}>
                        <Title className='violetColor' tag={'h2'}>
                            {translationOurWork.ourWork[language]}
                        </Title>
                    </div>
                </div>
                <div className={styles.wrapperOurWorkContent}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageFirst}>
                            <img src={imgSrc1} alt='OurCustomerFirst' />
                        </div>
                        <div className={styles.imageSecond}>
                            <img src={imgSrc2} alt='ourCustomerSecond' />
                        </div>
                        <div className={styles.imageThird}>
                            <img src={imgSrc3} alt='ourCustomerThird' />
                        </div>
                    </div>
                    <div className={styles.boxContainer}>
                        {renderSectionIcons()}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OurWorkSecond;
