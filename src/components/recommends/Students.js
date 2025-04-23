import React from 'react';
import styles from './Students.module.css';

// Import your images
import result1 from "../../images/שני גונן סדנאותֿ 1.png";
import result2 from "../../images/שני גונן סדנאותֿ 2.png";
import result3 from "../../images/שני גונן סדנאותֿ 3.png";
import result4 from "../../images/שני גונן סדנאותֿ 4.png";
import result5 from "../../images/שני גונן סדנאותֿ 5.png";
import result6 from "../../images/שני גונן סדנאותֿ 6.png";
import result7 from "../../images/שני גונן סדנאותֿ 7.png";
import result8 from "../../images/שני גונן סדנאותֿ 8.png";
import result9 from "../../images/שני גונן סדנאותֿ 9.png";
import result10 from "../../images/שני גונן סדנאותֿ 10.png";
import result11 from "../../images/שני גונן סדנאותֿ 11.png";
import result12 from "../../images/שני גונן סדנאותֿ 12.png";
import result13 from "../../images/שני גונן סדנאותֿ 13.png";
import result14 from "../../images/שני גונן סדנאותֿ 14.png";




const Students = (props) => {
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8, result9,
    result10, result11, result12, result13, result14
  ];

  return (
    <>

      <div className={styles.title} >{props.title}</div>
      {/* <div className={styles.explain}>
        מקבץ בנות שעברו דרכי
      </div> */}
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* First group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
          {/* Second identical group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Students;