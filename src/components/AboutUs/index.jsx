import React, { useContext } from 'react';
import styles from './AboutUs.module.css';
import Title from '../Title';
import Tag from '../Tag';
import { translation } from '../../utils/translation';
import { LanguageContext } from '../../context/language/languageContext';
import Button from '../Button';
import imgGraph from '../../assets/images/Graphics.png';

const AboutUs = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.imgContainer}>
                    <img
                        className={styles.imgElement}
                        src={imgGraph}
                        alt='About us'
                    />
                </div>
                <div className={styles.dataContainer}>
                    <div className={styles.tag}>
                        <Tag color='red'>{translation.aboutTag[language]}</Tag>
                    </div>
                    <Title className='violetColor' tag={'h2'}>
                        {translation.aboutTitle[language]}
                    </Title>
                    <p
                        className={styles.textDescription}
                        dangerouslySetInnerHTML={{
                            __html: translation.aboutDescription[language],
                        }}
                    ></p>
                    <Button color='blueColor' path='/'>
                        {translation.aboutButtonLabel[language]}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
