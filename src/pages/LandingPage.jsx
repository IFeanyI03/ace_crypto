import React from 'react';
import Header from '../components/Header';
import CryptoForm from '../components/CryptoForm';

import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import { useState } from 'react';
import BuyCryptoHero from '../components/BuyCryptoHero';
import Blank from '../components/Blank';


const LandingPage = () => {

  const [activeTab, setActiveTab] = useState('home')

  const renderActiveTabComponent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'buy-crypto':
        return <BuyCryptoHero />;
      default:
        return <Blank />;
    }
  }

  return (
    <div className="bg-white relative" >
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderActiveTabComponent()}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;