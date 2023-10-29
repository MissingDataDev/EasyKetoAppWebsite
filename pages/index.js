import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image 
        src="/assets/images/logo.png" 
        alt="Easy Keto Logo" 
        width={150}  // Adjust based on your logo dimensions
        height={150} 
      />
    </div>
  );
}
