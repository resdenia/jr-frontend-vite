import React, { useContext } from 'react';
import styles from './Hero.module.css';
import Title from '../Title';
import { translation } from '../../utils/translation';
import { LanguageContext } from '../../context/language/languageContext';
import Button from '../Button';
import Layout from '../Layout';
const heroIcon = () => {
    return (
        <svg
            width='65'
            height='66'
            viewBox='0 0 65 66'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M58.4773 0.788705L2.59841 24.6789C-0.282438 25.9106 -0.693059 29.8261 1.86959 31.6286L49.6501 65.2369C52.0957 66.9571 55.4952 65.4839 55.9122 62.5231L64.0106 5.02454C64.4451 1.93951 61.3419 -0.436034 58.4773 0.788705Z'
                fill='#F8AEC3'
            />
        </svg>
    );
};
function Hero() {
    const { language } = useContext(LanguageContext);
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.iconWrapper}>{heroIcon()}</div>
            <Title className='violetColor' tag='h1'>
                {translation.mainHomeTitle[language]}
            </Title>
            <div className={styles.descriptionWrapper}>
                <p>{translation.mainHomeDescription[language]}</p>
            </div>
            <div className={styles.socialsIcons}></div>
            <div className={styles.buttonWrapper}>
                <Button color='blueColor' path='/'>
                    {translation.mainHomeButton[language]}
                </Button>
            </div>
        </div>
    );
}

export default Hero;
