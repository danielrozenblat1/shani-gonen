import { useState, useEffect } from 'react';
import Box from "../components/box/Box";
import styles from "./ForthScreen.module.css";
import couple from "../icons/wired-outline-630-couple-man-woman-hover-pinch (2).json";
import selfLove from "../icons/wired-outline-436-love-care-loop-cycle.json"; // יש להוסיף אייקון מתאים
import balance from "../icons/wired-outline-441-yin-yang-hover-balance.json"; // יש להוסיף אייקון מתאים
import spiritualPath from "../icons/wired-outline-633-female-standing-morph-jump.json"; // יש להוסיף אייקון מתאים
import Button from "../components/button/Button";

const ForthScreen = () => {
  return (
    <>

      <div className={styles.row}>
        <Box 
          title="לנהל קשרים בריאים" 
          description="תוכלי להבין מה הדפוסים שחסמו אותך עד היום מלהתנהל בקשר בצורה בריאה, לזהות קשרים נשמתיים וקארמתיים ולהפסיק לשחזר מערכות יחסים רעילות" 
          icon={couple}
        />
        <Box 
          title="להתחבר לאהבה עצמית" 
          description="תלמדי להכיר בערך העצמי שלך, לאהוב ולהעריך את עצמך ולרפא פצעים רגשיים מהעבר שמונעים ממך לחיות חיים מלאים ומספקים"
          icon={selfLove}
        />
        <Box 
          title="לפתח איזון רגשי" 
          description="תשחררי שליטת יתר ופחדים, תפתחי יכולת להתמסר ולסמוך, ותשיגי ביטחון עצמי שיאפשר לך לקבל החלטות נכונות לחייך"
          icon={balance}
        />
        <Box 
          title="להתחבר לאנרגיה הנקבית שלך" 
          description="תגלי את החיבור לחכמה הנשית שלך, תזכרי מי את באמת ותמצאי את הדרך למגנט אלייך שפע, מערכות יחסים בריאות ודברים טובים לחיים מתוך מקום מאוזן ושלם"
          icon={spiritualPath}
        />
      </div>
    </>
  );
};

export default ForthScreen;