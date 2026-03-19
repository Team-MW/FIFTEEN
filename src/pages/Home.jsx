import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Promo10Euros from '../components/Promo10Euros';
import Menu from '../components/Menu';
import Story from '../components/Story';
import Social from '../components/Social';
import Location from '../components/Location';
import FAQ from '../components/FAQ';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <main>
            <Hero />
            <Marquee text="★ SANDWICHS TANDOORI ★ BURGERS HALAL MAISON ★ FRITES MAISON ★" />
            <Promo10Euros />
            <Menu />
            <Story />
            <Social />
            <Location />
            <FAQ />
            <Banner />
        </main>
    );
};

export default Home;
