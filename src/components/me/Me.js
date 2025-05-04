import React from 'react';
import styles from './Me.module.css';
import shani from "../../images/שני גונן תדמית.png";
import Students from '../recommends/Students';
import Recommends from '../recommends/Recommends';
import UntilToday from '../untiltodayParralex/UntilTodayParallex';

const AboutMe = () => (
  <>
    <div className={styles.header} id="מי אני">נעים מאוד</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={shani} alt="שני גונן" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>שני גונן</h1>
        <div className={styles.subtitle}>"הדרך לאיחוד אמיתי – תמיד מתחילה מבפנים"</div>

        <p className={styles.description}>
          מגיל צעיר הרגשתי חיבור עמוק לעולם הטיפולי והרוחני, וידעתי שאעסוק בתחום.
          לאורך המסע האישי שלי, חוויתי קשרים מאתגרים שלימדו אותי על עצמי, על חוסר ביטחון עצמי
          ועל הקושי לאהוב ולהעריך את עצמי. דרך חוויותיי האישיות הבנתי שהכאב בקשר
          לא בא כדי לשבור אותנו, אלא להחזיר אותנו לעצמנו.
        </p>
        <p className={styles.description}>
          היום, אני כאן ממקום של תיקון. אחרי תהליך עמוק של ריפוי עצמי,
          אני מלווה נשים במסע שלהן. בלי שיפוט, בלי הבטחות ריקות, ובדרך שמחברת אותך פנימה –
          כדי שתוכלי לרפא את הפצעים ולהפסיק לשחזר את הכאב. אני משלבת נומרולוגיה טיפולית, תקשור,
         ואימון תודעתי, אני כאן להזכיר לך שהכל בסדר איתך 
          פשוט עוד לא קיבלת את הכלים הנכונים להביא את עצמך למימוש והגשמה בכל הרבדים.
        </p>

      </div>
    </div>
    <Students title="העברתי סדנאות וייעוצים לעשרות נשים" />
    <UntilToday/>
    <Recommends />
  </>
);

export default AboutMe;