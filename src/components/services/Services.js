import React from 'react';
import { Users, Heart, MessageCircle, Sparkles, Compass } from 'lucide-react';
import styles from './Services.module.css';
import question from "../../images/רק שאלה.jpg";
import groups from "../../images/שני גונן רקע.png"
import questions from "../../images/ייעוץ נומרולוגי.jpg"
import livui from "../../images//שני גונן ייעוץ.png"
import tikshur from "../../images/תקשור שני.jpg"
const ServicesComponent = () => {
  const phoneNumber = "972546723229";
  
  const services = [
    {
      id: 1,
      title: "רק שאלה – תשובה ממוקדת ומדויקת",
      subtitle: "בתקשור: שלחי שאלה אחת ותקבלי מענה כתוב, אינטואיטיבי ומעמיק. בנומרולוגיה: שאלה אחת ספציפית על פי תאריך הלידה – פגישה של עד חצי שעה בזום.",
      forWhom: "למי זה מתאים?",
      solution: "למי שצריכה הכוונה נקודתית ברגע של בלבול.",
      icon: <MessageCircle size={20} className={styles.icon} />,
      image: question
    },
    {
      id: 2,
      title: "ייעוץ נומרולוגי מלא – פתיחת מפת חיים",
      subtitle: "פגישה מעמיקה של שעה וחצי (בזום או פרונטלית), בה נפתח את המפה הנומרולוגית האישית שלך. נכיר את התכונות, האתגרים, הייעוד, הדפוסים והפוטנציאל שלך בכל תחומי החיים.",
      forWhom: "למי זה מתאים?",
      solution: "מתאים לכל מי שרוצה לקבל בהירות, דיוק והכוונה במסע האישי שלה.",
      icon: <Compass size={20} className={styles.icon} />,
      image: questions
    },
    {
      id: 3,
      title: "תקשור מלא – שלוש שאלות, מענה כתוב",
      subtitle: "שלחי עד שלוש שאלות ותקבלי מענה כתוב, מפורט ומחובר למהות הנשמתית שלך. התשובות מתקבלות באנרגיה של אמת, חמלה והכוונה גבוהה.",
      forWhom: "למי זה מתאים?",
      solution: "למי שמבקשת תובנות עומק מהדרכה עליונה.",
      icon: <Sparkles size={20} className={styles.icon} />,
      image: tikshur
    },
    {
      id: 4,
      title: "תהליך ליווי אישי – מסע של ריפוי והתפתחות",
      subtitle: "מפגש אישי שבועי (שעה), בזום או פרונטלי. תהליך רך אך עמוק של ריפוי פנימי, חיבור לאנרגיה הנשית, חיזוק אהבה עצמית והנחיה מתוך הכלים שלי: נומרולוגיה טיפולית, תקשור, תטא הילינג ואימון תודעתי.",
      forWhom: "למי זה מתאים?",
      solution: "מתאים לנשים שרוצות ללוות את עצמן הביתה – לעצמן.",
      icon: <Heart size={20} className={styles.icon} />,
      image: livui
    },
    {
      id: 5,
      title: "הנחיית מעגלי נשים ואירועים מיוחדים",
      subtitle: "אפשרות להזמין אותי להנחות ערבי נשים, סדנאות, מעגלי נשים, מסיבות רווקות או ערבי הפרשת חלה. כל אירוע מותאם באופן אישי, באווירה חמה ומרגשת, ומשלב תכנים מעוררי השראה וחיבור.",
      forWhom: "למי זה מתאים?",
      solution: "לקבוצות נשים המחפשות חיבור, העצמה והשראה.",
      icon: <Users size={20} className={styles.icon} />,
      image: groups
    }
  ];

  const handleButtonClick = (serviceTitle) => {
    // Generate WhatsApp link with pre-filled message
    const message = `היי שני, הגעתי מהדף. אשמח לשמוע עוד על ${serviceTitle}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.innerContainer}>
        <h2 className={styles.heading}>השירותים שלי</h2>
        
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div 
              key={service.id} 
              className={styles.serviceCard}
            >
              {/* Decorative shape */}
              <div className={styles.decorativeShape}></div>
              
              <div className={styles.cardContent}>
                {/* Right side - Text Content */}
                <div className={styles.textContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                  
                  <div className={styles.forWhomSection}>
                    <div className={styles.forWhomHeader}>
                      {service.icon}
                      <h4 className={styles.forWhomTitle}>{service.forWhom || "למי זה מתאים?"}</h4>
                    </div>
                    <p className={styles.solutionText}>{service.solution}</p>
                  </div>
                </div>
                
                {/* Left side - Image */}
                <div className={styles.imageContainer}>
                  <img src={service.image} alt={service.title} className={styles.serviceImage} />
                  <button
                    onClick={() => handleButtonClick(service.title)}
                    className={styles.ctaButton}
                  >
                    לעוד פרטים
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;