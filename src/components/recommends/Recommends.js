import React, { useState, useEffect } from 'react';
import styles from "./Recommends.module.css";

// Import images
import result1 from "../../images/שני גונן המלצות 1.png";
import result2 from "../../images/שני גונן המלצות 2.png";
import result3 from "../../images/שני גונן המלצות 3.png";
import result4 from "../../images/שני גונן המלצות 4.png";
import result5 from "../../images/שני גונן המלצות 5.png";
import result6 from "../../images/שני גונן המלצות 6.png";
import result7 from "../../images/שני גונן המלצות 7.png";
import result8 from "../../images/שני גונן המלצות 8.png";
import result9 from "../../images/שני גונן המלצות 9.png";
import result10 from "../../images/שני גונן המלצות 10.png";
import result11 from "../../images/שני גונן המלצות 11.png";
import result12 from "../../images/שני גונן המלצות 12.png";
import result13 from "../../images/שני גונן המלצות 13.png";
import result14 from "../../images/שני גונן המלצות 14.png";
import result15 from "../../images/שני גונן המלצות 15.png";
import result16 from "../../images/שני גונן המלצות 16.png";
import result17 from "../../images/שני גונן המלצות 17.png";
import result18 from "../../images/שני גונן המלצות 18.png";
import result19 from "../../images/שני גונן המלצות 19.png";
import result20 from "../../images/שני גונן המלצות 20.png";
import result21 from "../../images/שני גונן המלצות 21.png";
import result22 from "../../images/שני גונן המלצות 22.png";
import result23 from "../../images/שני גונן המלצות 23.png";
import result24 from "../../images/שני גונן המלצות 24.png";
import result25 from "../../images/שני גונן המלצות 25.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button";

const Recommends = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1050) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderSettings = {
   
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
   result25, result5, result6, result7, result8, result9, result3, result4, 
    result10, result11, result12, result13, result14, result15, result16, 
    result17, result18, result19, result20, result1, result2,result21,result22,result23,result24
  ];

  return (
    <>
      <div className={styles.title}>והנה חלק מהתגובות שלהן:</div>
      <div className={styles.explain}>החליקי בין התמונות</div>
      
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {images.map((img, index) => (
            <div key={index} itemScope itemType="http://schema.org/Review">
              <div className={styles.center}>
                <img 
                  src={img} 
                  className={styles.image1} 
                  alt={`שני גונן המלצות ${index + 1}`} 
                  itemProp="image"
                />
              </div>
              <meta itemProp="datePublished" content={new Date().toISOString()} />
            </div>
          ))}
        </Slider>
      </div>
      
      <Button text="שני, בואי נדבר!" />
    </>
  );
};

export default Recommends;