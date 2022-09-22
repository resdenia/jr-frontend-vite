import React, { useContext } from 'react';
import styles from './SeviceBio.module.css';
import Tag from '../Tag';
import Title from '../Title';
import { translation } from '../../utils/translation';
import { LanguageContext } from '../../context/language/languageContext';
import Layout from '../Layout';
import { translationBoxesService } from '../../utils/translationBoxesService';
const ServiceBio = () => {
    const { language } = useContext(LanguageContext);

    const boxService = () => {
        return translationBoxesService.map((box) => (
            <div key={box.boxTitle[language]} className={styles.boxWrapper}>
                <div className={styles.icon}>{box.iconSection()}</div>
                <div>
                    <Title className='violetColor' tag={'h4'}>
                        {box.boxTitle[language]}
                    </Title>
                </div>
                <div className={styles.descriptionBox}>
                    <p className={styles.descriptionParagraph}>
                        {box.boxDescription[language]}
                    </p>
                </div>
            </div>
        ));
    };

    return (
        <Layout mt={75} mb={100}>
            <div className={styles.iconsSection}>
                <div className={styles.tag}>
                    <Tag color='red'>{translation.serviceBioTag[language]}</Tag>
                </div>
                <Title className='violetColor' tag={'h2'}>
                    {translation.serviceBioTitle[language]}
                </Title>
                <div className={styles.wrapperSection}>{boxService()}</div>
            </div>
            <div className={styles.description}>
                <div className={styles.textWrapper}>
                    <p
                        className={styles.textDescription}
                        dangerouslySetInnerHTML={{
                            __html: translation.serviceBioDescription[language],
                        }}
                    ></p>
                </div>
            </div>
        </Layout>
    );
};

export default ServiceBio;
