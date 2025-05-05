import React, { useEffect, useRef, useState } from 'react';
import styles from './UntilTodayParallex.module.css';
import { Star, Heart, ThumbsUp, Package, Zap, Award, Smile, Users, BookOpen } from 'lucide-react';

const UntilToday = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Check which items are visible
      const newVisibleItems = [];
      let closestToCenter = null;
      let closestDistance = Infinity;
      
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        const rect = item.getBoundingClientRect();
        
        // Consider an item visible when it's at least partially in the viewport
        // Using a smaller threshold for more gradual appearance
        if (rect.top < viewportHeight * 0.95 && rect.bottom > viewportHeight * 0.05) {
          newVisibleItems.push(index);
          
          // Find which item is closest to center
          const distanceFromCenter = Math.abs(rect.top + rect.height/2 - viewportHeight/2);
          if (distanceFromCenter < closestDistance) {
            closestDistance = distanceFromCenter;
            closestToCenter = index;
          }
        }
      });
      
      setVisibleItems(prevVisible => {
        // Only update if there's a change
        if (prevVisible.length !== newVisibleItems.length || 
            !prevVisible.every(item => newVisibleItems.includes(item))) {
          return newVisibleItems;
        }
        return prevVisible;
      });
      
      // Update active index (closest to center)
      setActiveIndex(closestToCenter);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize visible items after a small delay to allow rendering
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const achievements = [
    {
      icon: <Award className={styles.icon} />,
      text: "ריפאו קשרים נשמתיים וחוויות קארמתיות שחזרו בחייהן",
    },
    {
      icon: <Heart className={styles.icon} />,
      text: "למדו להביע את עצמן בקשרים מתוך חיבור לאנרגיה נקבית מאוזנת",
    },
    {
      icon: <ThumbsUp className={styles.icon} />,
      text: "פיתחו אומץ לצאת מאזור הנוחות ולבחור בעצמן לראשונה",
    },
    {
        icon: <Package className={styles.icon} />,
        text: "גילו את הייחודיות שלהן והפסיקו לחיות חיים של חוסר הגשמה וריצוי אחרים",
      },
    {
      icon: <Star className={styles.icon} />,
      text: "שחררו חסמים כלכליים ויצרו מערכת יחסים בריאה עם כסף",
    },
  
   
 
    {
        icon: <Award className={styles.icon} />,
        text: "השתחררו מדפוסי ה״אובר שליטה״ ולמדו לשחרר כשאפשר וכשצריך ",
      },
  


  ];

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>:שיחד איתי</h1>
        </div>
        <div className={styles.itemsContainer}>
          {achievements.map((item, index) => (
            <div 
              className={`
                ${styles.item} 
                ${activeIndex === index ? styles.active : ''} 
                ${visibleItems.includes(index) ? styles.visible : ''} 
                ${index % 2 === 0 ? styles.fromRight : styles.fromLeft}
              `}
              key={index}
              ref={el => itemsRef.current[index] = el}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h2 className={styles.itemText}>{item.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UntilToday;