import React from 'react';
import styles from './Home.module.css';
import CTA from '../../components/CTA';
import Hero from '../../components/Hero';
import Solutions from '../../components/Solutions';
import OurWork from '../../components/OurWork';
import OurWorkSecond from '../../components/OurWorkSecond';
import AboutUs from '../../components/AboutUs';
import ServiceBio from '../../components/ServiceBio';
import Testimonials from '../../components/Testimonials';
import Trusted from '../../components/Trusted';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div className={styles.globalWrapper}>
            <Header />
            <Hero />
            <Trusted />
            <AboutUs />
            <Testimonials />
            <OurWorkSecond />
            <ServiceBio />
            <Solutions />
            <OurWork />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
