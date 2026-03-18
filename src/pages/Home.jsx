import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Menu from '../components/Menu';
import Story from '../components/Story';
import Location from '../components/Location';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <main>
            <Hero />
            <Marquee text="★ 100% VIANDE FRAÎCHE ★ SMASHÉ À LA PERFECTION ★ SAUCE SECRÈTE MAISON ★ PREMIUM FRIED CHICKEN ★" />
            <Menu />
            <Story />
            <Location />
            <FAQ />
        </main>
    );
};

export default Home;
