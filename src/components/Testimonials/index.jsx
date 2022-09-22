import React, { useState, useEffect, useContext } from 'react';
import styles from './Testimonials.module.css';
import Layout from '../Layout';
import Tag from '../Tag';
import Title from '../Title';
import { translation } from '../../utils/translation';
import { LanguageContext } from '../../context/language/languageContext';
import imgSrc from '../../assets/images/customers/customer-1.jpg';
import imgSrc1 from '../../assets/images/customers/customer-2.jpg';
import imgSrc2 from '../../assets/images/customers/customer-3.jpg';
import imgSrc3 from '../../assets/images/customers/customer-4.jpg';

const sliderData = [
    {
        customerImage: imgSrc,
        customerTitle: 'Happy Customer.',
        customerDescription: 'https://rohotlv.com',
        customerComment:
            '“Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!”',
    },
    {
        customerImage: imgSrc1,
        customerTitle: 'Happy Customer1.',
        customerDescription: 'https://rohotlv.com',
        customerComment:
            '“Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!”',
    },
    {
        customerImage: imgSrc2,
        customerTitle: 'Happy Customer2.',
        customerDescription: 'https://rohotlv.com',
        customerComment:
            '“Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!”',
    },
    {
        customerImage: imgSrc3,
        customerTitle: 'Happy Customer3.',
        customerDescription: 'https://rohotlv.com',
        customerComment:
            '“Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!”',
    },
];

const Testimonials = () => {
    const [sliderCounter, setSliderCounter] = useState(1);
    const { language } = useContext(LanguageContext);
    const [isActiveList, setIsActiveList] = useState([
        sliderData[0],
        sliderData[1],
    ]);
    const onPrev = () => {
        if (sliderCounter === 1) return;
        setSliderCounter(sliderCounter - 1);
        setIsActiveList([
            sliderData[sliderCounter - 2],
            sliderData[sliderCounter - 1],
        ]);

        console.log('prev');
    };
    const onNext = () => {
        if (sliderCounter === sliderData.length / 2) return;
        setSliderCounter(sliderCounter + 1);
        setIsActiveList([
            sliderData[sliderCounter + 1],
            sliderData[sliderCounter + 2],
        ]);
        console.log('next');
    };
    const slideRender = () => {
        return isActiveList.map((sliderInfo) => {
            return (
                <div
                    key={`${sliderInfo.customerTitle}-1`}
                    className={styles.sliderItem}
                >
                    <div className={styles.slideHeader}>
                        <div className={styles.customerImage}>
                            <img src={sliderInfo.customerImage} />
                        </div>
                        <div className={styles.customerInfo}>
                            <div className={styles.cusomerName}>
                                {sliderInfo.customerTitle}
                            </div>
                            <div className={styles.customerInfo}>
                                {sliderInfo.customerDescription}
                            </div>
                        </div>
                    </div>
                    <div className={styles.sliderComment}>
                        <p>{sliderInfo.customerComment}</p>
                    </div>
                </div>
            );
        });
    };
    return (
        <Layout pt={10} pb={40}>
            <div className={styles.columnTitleController}>
                <div className={styles.tag}>
                    <Tag color='violet'>
                        {translation.testimonialsTag[language]}
                    </Tag>
                </div>
                <div className={styles.titleWrapper}>
                    <Title className='violetColor' tag={'h2'}>
                        {translation.testimonialsTitle[language]}
                    </Title>
                </div>
                <div className={styles.controller}>
                    <div className={styles.leftArrow} onClick={onPrev}>
                        <div className={styles.arrowButton}>
                            <svg
                                width='33'
                                height='32'
                                viewBox='0 0 33 32'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <g clipPath='url(#clip0_988_161)'>
                                    <path
                                        d='M28.1113 15.6861C28.1113 16.0665 27.8029 16.3748 27.423 16.3743L7.50832 16.3743L11.2318 20.0979C11.5024 20.3685 11.5024 20.8077 11.2318 21.0783C10.9613 21.3489 10.522 21.3489 10.2515 21.0783L5.34949 16.1763C5.21959 16.0464 5.14459 15.8704 5.14459 15.6861C5.14459 15.5018 5.21959 15.3258 5.34949 15.1959L10.2515 10.294C10.522 10.0234 10.9613 10.0234 11.2318 10.294C11.5024 10.5645 11.5024 11.0038 11.2318 11.2743L7.50832 14.9979L27.423 14.9979C27.8034 14.9979 28.1118 15.3062 28.1113 15.6861Z'
                                        fill='#3751FF'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_988_161'>
                                        <rect
                                            width='22.1838'
                                            height='22.1838'
                                            fill='white'
                                            transform='matrix(-0.707107 0.707107 0.707107 0.707107 16.6279 0)'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.sliderCount}>
                        {sliderCounter}/{sliderData.length / 2}
                    </div>
                    <div className={styles.rightArrow}>
                        <div className={styles.arrowButton} onClick={onNext}>
                            <svg width='33' height='32' viewBox='0 0 33 32'>
                                <g clipPath='url(#clip0_988_167)'>
                                    <path
                                        d='M5.14362 15.6861C5.14362 16.0665 5.45195 16.3748 5.83185 16.3743L25.7466 16.3743L22.023 20.0979C21.7524 20.3685 21.7524 20.8077 22.023 21.0783C22.2936 21.3489 22.7328 21.3489 23.0034 21.0783L27.9054 16.1763C28.0353 16.0464 28.1103 15.8704 28.1103 15.6861C28.1103 15.5018 28.0353 15.3258 27.9054 15.1959L23.0034 10.294C22.7328 10.0234 22.2936 10.0234 22.023 10.294C21.7524 10.5645 21.7524 11.0038 22.023 11.2743L25.7466 14.9979L5.83185 14.9979C5.45146 14.9979 5.14313 15.3062 5.14362 15.6861Z'
                                        fill='#3751FF'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_988_167'>
                                        <rect
                                            width='22.1838'
                                            height='22.1838'
                                            fill='white'
                                            transform='translate(16.627) rotate(45)'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.columnSlider}>{slideRender()}</div>
        </Layout>
    );
};

export default Testimonials;

// filter: drop-shadow(0px 12px 16px rgba(0, 0, 0, 0.08));
// transform: matrix(-1, 0, 0, 1, 0, 0);
