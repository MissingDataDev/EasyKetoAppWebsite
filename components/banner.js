// pages/Banner.js
import React from "react";
import styles from "../styles/Home.module.css";

const Banner = () => (
  <div className={styles.banner}>
    <img
      src="/assets/images/logo.png"
      alt="Easy Keto Logo"
      className={styles.logo}
    />
    <div className={styles.downloadButtons}>
      {" "}
      <a
        href="https://apps.apple.com/us/app/simply-keto-app-keto-recipes/id1604522298"
        className={styles.appStore}
      >
        <img
          src="/assets/images/app-store-badge.png"
          alt="Download from App Store"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.simply.ketoapp"
        className={styles.googlePlay}
      >
        <img
          src="/assets/images/google-play-badge.png"
          alt="Download from Google Play"
        />
      </a>
    </div>
  </div>
);

export default Banner;
