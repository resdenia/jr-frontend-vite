import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './CTA.module.css';
import ButtonIcon from '../ButtonIcon';
import Title from '../Title';
import { translation } from '../../utils/translation';
import { LanguageContext } from '../../context/language/languageContext';

const iconCta = () => {
    return (
        <svg
            width='29'
            height='29'
            viewBox='0 0 29 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M25.6543 10.7591L19.709 14.2294L27.6691 19.9656V7.25C27.6691 8.68925 26.8969 10.0338 25.6543 10.7591Z'
                fill='#53C07E'
            />
            <path
                d='M8.39034 9.97627L16.1036 14.4785C16.3112 14.5998 16.5484 14.6639 16.7891 14.6639H16.7988C17.0395 14.6639 17.2767 14.5998 17.4838 14.4788L18.6389 13.8045C18.6415 13.8029 18.6441 13.8015 18.6467 13.8L25.1976 9.97627C26.1631 9.41274 26.7627 8.36821 26.7627 7.25V6.79688H6.8252V7.25C6.8252 8.36821 7.42479 9.41274 8.39034 9.97627Z'
                fill='#53C07E'
            />
            <path
                d='M13.8791 14.2281L7.9341 10.7572C6.69254 10.0322 5.91769 8.69093 5.91769 7.25V12.2344H3.40186C3.1514 12.2344 2.94873 12.4373 2.94873 12.6875C2.94873 12.9377 3.1514 13.1406 3.40186 13.1406H5.91769H7.64636H9.00801C9.75567 13.1406 10.3674 13.7523 10.3674 14.5C10.3674 15.2476 9.75567 15.8594 9.00801 15.8594H8.55261H5.91769H2.94873C2.69827 15.8594 2.49561 16.0623 2.49561 16.3125C2.49561 16.5627 2.69827 16.7656 2.94873 16.7656H5.91769V19.9647L13.8791 14.2281Z'
                fill='#53C07E'
            />
            <path
                d='M17.9409 15.2614C17.5953 15.4634 17.2002 15.5703 16.7988 15.5703C16.7988 15.5703 16.7931 15.5703 16.7926 15.5703C16.3877 15.5703 15.9926 15.4634 15.6465 15.2612L14.7356 14.7295L5.91895 21.0832V21.7501C5.91895 22.0003 6.12161 22.2032 6.37207 22.2032H27.2158C27.4663 22.2032 27.6689 22.0003 27.6689 21.7501V21.0832L18.8521 14.7295L17.9409 15.2614Z'
                fill='#53C07E'
            />
            <path
                d='M9.45898 14.5C9.45898 14.2498 9.25632 14.0469 9.00586 14.0469H1.78418C1.53372 14.0469 1.33105 14.2498 1.33105 14.5C1.33105 14.7502 1.53372 14.9531 1.78418 14.9531H9.00586C9.25632 14.9531 9.45898 14.7502 9.45898 14.5Z'
                fill='#53C07E'
            />
        </svg>
    );
};

const CTA = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.row}>
                <div className={styles.sectionTitle}>
                    <Title className='whiteColor' tag='h3'>
                        {translation.ctaTitle.en}
                    </Title>
                </div>
                <div className={styles.buttonWrapper}>
                    <ButtonIcon Icon={iconCta} path='/contact'>
                        {translation.ctaButton[language]}
                    </ButtonIcon>
                    <div className={styles.buttonDescription}>
                        <span>
                            {translation.ctaButtonDescription[language]}
                        </span>
                        <Link to='/'>
                            {translation.ctaButtonDescriptionLink[language]}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;
