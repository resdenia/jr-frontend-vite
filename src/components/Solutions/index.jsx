import React, { useContext, useEffect } from 'react';
import styles from './Solutions.module.css';
import Tag from '../Tag';
import Title from '../Title';
import InfoBox from '../InfoBox';
import { translation } from '../../utils/translation';
import { LanguageContext } from '../../context/language/languageContext';
import { translationBoxes } from '../../utils/translationBoxes';

function Solutions() {
    const { language } = useContext(LanguageContext);
    // useEffect(()=>{
    // 	translationBoxes=
    // },[])

    const renderSections = () => {
        return translationBoxes.map((el) => {
            return (
                <InfoBox
                    key={el.boxTitle[language]}
                    icon={el.iconSection}
                    title={el.boxTitle[language]}
                    description={el.boxDescription[language]}
                />
            );
        });
    };
    return (
        <div className={styles.solutionsWrapper}>
            <div className={styles.tagContainer}>
                <Tag color='violet'>{translation.solutionsTag[language]}</Tag>
            </div>
            <div className={styles.titleContainer}>
                <Title className='violetColor' tag='h2'>
                    {translation.solutionsTitle[language]}
                </Title>
            </div>
            <div className={styles.descriptionContainer}>
                <p>{translation.solutionsDescription[language]}</p>
            </div>
            <div className={styles.iconsSection}>{renderSections()}</div>
        </div>
    );
}

export default Solutions;
