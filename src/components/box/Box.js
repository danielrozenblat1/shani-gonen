import { useEffect, useRef } from "react";
import styles from "./Box.module.css";
import { Player } from "@lordicon/react";
import ScrollReveal from "scrollreveal";

const Box = (props) => {
  const playerRef = useRef(null);
  
  // הפעלת האנימציה של האייקון לאחר השהייה
  const handleComplete = () => {
    setTimeout(() => {
      playerRef?.current?.playFromBeginning();
    }, 3000); // הפעלה מחדש לאחר 3 שניות
  };
  
  useEffect(() => {
    // הפעלת האנימציה בטעינה הראשונית
    playerRef?.current?.playFromBeginning();
  }, []);
  
  useEffect(() => {
    // אפקטים של ScrollReveal עם אנימציות עדינות יותר
    ScrollReveal().reveal(`.${styles.box}`, {
      duration: 800,
      distance: "20px",
      origin: "bottom",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
      viewFactor: 0.2,
      delay: 150,
      opacity: 0,
    });
    
    // אנימצית כותרת מעודנת
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 800,
      distance: "10px",
      origin: "right",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
      viewFactor: 0.2,
      delay: 250,
      opacity: 0,
    });
    
    // אנימצית תיאור מעודנת
    ScrollReveal().reveal(`.${styles.description}`, {
      duration: 800,
      distance: "10px",
      origin: "right",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
      viewFactor: 0.2,
      delay: 350,
      opacity: 0,
    });
    
    // אנימציית אייקון מעודנת
    ScrollReveal().reveal(`.${styles.icon}`, {
      duration: 800,
      distance: "10px",
      origin: "right",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
      viewFactor: 0.2,
      delay: 200,
      opacity: 0,
    });
  }, []);
  
  return (
    <div className={styles.box}>
      <div className={styles.icon}>
        <Player 
          icon={props.icon} 
          ref={playerRef} 
          size="100%" 
          loop={false} 
          colorize="#8A5466"
          onComplete={handleComplete}
        />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};

export default Box;