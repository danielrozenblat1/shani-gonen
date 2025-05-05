import React, { useState, useEffect, useRef } from 'react';
import styles from "./SecondScreen.module.css";
import { Star, Search, Brain, Zap, Heart } from 'lucide-react';

const NumerologyScreen = () => {
    const INTRO_TEXTS = [

        "נמשכת שוב לקשר שמכאיב – אבל לא מצליחה לשחרר?",
        "מרגישה שלאחרונה את פשוט.. לא את?",
     
        "יודעת שמגיע לך יותר – אבל לא מצליחה לבחור בעצמך?"
    ];

    const [text, setText] = useState(INTRO_TEXTS[0]);
    const [fadeIn, setFadeIn] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setText(INTRO_TEXTS[(INTRO_TEXTS.indexOf(text) + 1) % INTRO_TEXTS.length]);
                setFadeIn(true);
            }, 500);
        }, 4000);
        return () => clearInterval(intervalId);
    }, [text]);

    // Handle parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div className={styles.container} id="נומרולוגיה" ref={containerRef}>
            <div className={styles.introBox}>
                <span className={`${styles.textTransition} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
                    {text}
                </span>
            </div>
     
            <div className={styles.description}>
                אם את מרגישה שאת רצה בלופים, נמשכת שוב לאותם מקומות וקשרים שלא עושים לך טוב ולא מצליחה לשים את הפוקוס על עצמך.  
            </div>
            
            <div className={styles.subtitleSmall}>
                וזה תמיד מתבטא ב...
            </div>

            <div className={styles.concernsContainer}>
                <div className={styles.concernItem}>
                    <div className={styles.iconCircle}>
                        <Search className={styles.icon} size={24} strokeWidth={1} />
                    </div>
                    <span>תחושת בלבול – את לא באמת יודעת מי את או מה את רוצה</span>
                </div>
                <div className={styles.concernItem}>
                    <div className={styles.iconCircle}>
                        <Heart className={styles.icon} size={24} strokeWidth={1} />
                    </div>
                    <span>קשרים שיש בהם משיכה חזקה אבל היחסים בהם מאוד מאתגרים</span>
                </div>
                <div className={styles.concernItem}>
                    <div className={styles.iconCircle}>
                        <Zap className={styles.icon} size={24} strokeWidth={1} />
                    </div>
                    <span>פחד לשחרר – וגם פחד להתחיל משהו חדש</span>
                </div>
                <div className={styles.concernItem}>
                    <div className={styles.iconCircle}>
                        <Brain className={styles.icon} size={24} strokeWidth={1} />
                    </div>
                    <span>קולות בראש – "אני לא מספיק", "אני לא שווה"</span>
                </div>
                <div className={styles.concernItem}>
                    <div className={styles.iconCircle}>
                        <Star className={styles.icon} size={24} strokeWidth={1} />
                    </div>
                    <span>רצון להרגיש שייכת – לעצמך, לאהבה, לחיים שלך</span>
                </div>
            </div>
            <div className={styles.subtitleSmall}>
      חשוב לי שתביני שאת לא לבד
            </div>
            <div className={styles.description}>
            אני יודעת איך זה מרגיש ואני כאן כדי לעזור לך לחזור להרגיש בטוחה בעצמך
            </div>
            
            <div className={styles.description}>
                אני כאן לא כדי לתקן אותך.  
                אלא להזכיר לך מי את באמת – ולתת לך כלים להתמודדות.
            </div>
            <div className={styles.description}>
                דרך המספרים – נחשפים דפוסים, כאבים, ומתנות שעד היום לא ידעת איך להשתמש בהן.
            </div>
            <div className={styles.subtitleSmall}>
              ובעזרת נומורולוגיה, תקשור, כלים נכונים והתמקדות נכונה בשורש הבעיה, את תוכלי
            </div>
        </div>
    );
};

export default NumerologyScreen;