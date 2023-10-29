import React from 'react';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner.js';
import VantaEffect from '../components/VantaEffect.js';
export default function Home() {
  return (
    <div className={styles.container}>
      <VantaEffect />
      <div className={styles.bannerContainer}>
        <Banner />
      </div>
    </div>
  );
}


