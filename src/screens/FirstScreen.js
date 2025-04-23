import React, { useState, useEffect } from 'react';
import styles from "./FirstScreen.module.css"

import middleImage from "../images/שני גונן תמונה ראשית.png";
import rightImage from "../images/שני גונן תמונה ימנית.png"
import leftImage from "../images/שני גונן תמונה שמאלית.png"
import titleImage from "../images/שני גונן לוגו חדש.png" // You'll need to add this image file
import { ChevronDown } from 'lucide-react';
import Loader from '../components/loader/Loader';
// import GradientLoader from '../components/loader/Loader';

const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage,
      titleImage // Add the title image to be preloaded
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <Loader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <div className={styles.titleImageContainer}>
          <img 
            src={titleImage} 
            alt="חיבור למסע הנשמה" 
            className={styles.titleImage}
          />
        </div>
        <div className={styles.description}>ליווי אישי לנשים בדרך לחיבור עצמי, אהבה וריפוי קשרים נשמתיים בעזרת נומרולוגיה ותקשור</div>
        <div className={styles.arrowContainer}>
          <ChevronDown size={32} className={styles.bounceArrow} strokeWidth={1} color="#eecea4"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;