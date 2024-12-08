const quotes = [
    "הדרך הטובה ביותר לחזות את העתיד היא ליצור אותו!",
    "כל יום הוא הזדמנות חדשה להצליח.",
    "הצעד הקטן ביותר עדיין מקדם אותך קדימה!",
    "אל תחכה להזדמנות, צור אותה!",
    "החלומות שלך לא יעבדו אלא אם אתה כן.",
    "ההצלחה היא לא סופית, הכישלון הוא לא קטלני: האומץ להמשיך הוא מה שקובע!",
    "הדרך להתחיל היא להפסיק לדבר ולהתחיל לעשות.",
    "אל תשפוט כל יום לפי היבול שקצרת, אלא לפי הזרעים שזרעת.",
    "ההצלחה היא היכולת ללכת מכישלון לכישלון בלי לאבד את ההתלהבות!",
    "המסע של אלף מייל מתחיל בצעד אחד.",
    "אתה לא נכשל עד שאתה מפסיק לנסות!",
    "תאמין שאתה יכול, וכבר עשית חצי מהדרך.",
    "החיים הם 10% מה שקורה לך, ו-90% איך אתה מגיב לזה.",
    "אין דבר בלתי ��פשרי למי שמנסה!",
    "כל הצלחה מתחילה בהחלטה לנסות.",
    "אל תפחד מהשינוי, אתה עלול לאבד משהו טוב, אבל אתה עשוי לזכות במשהו טוב יותר!",
    "תחלום בגדול, תתחיל בקטן!",
    "כל מה שאתה יכול לדמיין - אתה יכול להשיג!",
    "אף פעם לא מאוחר מדי להיות מה שיכולת להיות.",
    "הדרך הקשה היא בדרך כלל הדרך הנכונה.",
    "בכל קושי טמונה הזדמנות לצמיחה!",
    "אתה יכול יותר ממה שאתה חושב.",
    "תן לעצמך את ההזדמנות להצליח!",
    "הצלחה היא לא מקרה, היא בחירה.",
    "כל רגע הוא הזדמנות להתחיל מחדש!",
    "תהיה הגרסה הטובה ביותר של עצמך.",
    "אל תחכה למושלם, תתחיל עכשיו!",
    "השינוי מתחיל ברגע שאתה מחליט.",
    "תאמין בעצמך, גם כשאף אחד אחר לא מאמין!",
    "הדרך להצלחה עוברת דרך הנחישות.",
    "כל יום הוא הזדמנות לשנות את העתיד שלך!",
    "תחגוג את ההצלחות הקטנות בדרך להצלחה הגדולה.",
    "אל תפחד מכישלון, פחד מאי-ניסיון!",
    "הצעד הראשון הוא תמיד הקשה ביותר, אבל הכרחי.",
    "תן לחלומות שלך להיות גדולים יותר מהפחדים שלך!",
    "העתיד שלך נקבע על ידי מה שאתה עושה היום.",
    "אל תחכה לרגע המושלם, צור אותו!",
    "כל צעד קטן מקרב אותך למטרה הגדולה.",
    "תהיה אמיץ מספיק לנסות, וחזק מספיק להמשיך!",
    "ההצלחה שלך תלויה במידת הנחישות שלך.",
    "תזכור: גם מסע של אלף מייל מתחיל בצעד קטן!",
    "אל תיתן לפחד לעצור אותך מלהגשים את החלומות שלך.",
    "כל יום הוא הזדמנות חדשה להיות טוב יותר!",
    "תאמין בדרך שלך, גם כשהיא נראית ארוכה.",
    "הכישלון הוא לא הסוף, הוא רק עוד צעד בדרך להצלחה!",
    "תחייך, אתה יוצר את המציאות שלך.",
    "אל תוותר על החלומות שלך בגלל הזמן שייקח להגשים אותם!",
    "תהיה סבלני עם התהליך, אבל נחוש במטרה.",
    "כל רגע הוא הזדמנות לשינוי!",
    "תזכור: אתה חזק יותר ממה שאתה חושב.",
    "ההצלחה נמצאת מעבר לנקודה שבה רוב האנשים מוותרים!",
    "תיצור את המציאות שאתה רוצה לחיות בה.",
    "אל תפחד להיכשל, פחד לא לנסות!",
    "כל יום הוא הזדמנות חדשה להתקדם צעד קדימה.",
    "תאמין בעצמך, וחצי מהדרך כבר נעשתה!",
    "הדרך להצלחה מתחילה בצעד הראשון שלך.",
    "תזכור: גם העץ החזק ביותר התחיל מזרע קטן!",
    "אל תתן לאף אחד להגיד לך שזה בלתי אפשרי.",
    "ההצלחה היא המפגש בין ההזדמנות וההכנה!",
    "תחיה כל יום כאילו זו ההזדמנות האחרונה שלך.",
    "הדרך לפסגה מתחילה בצעד הראשון!"
];

const hebrewQuote = document.querySelector('.hebrew');
const englishQuote = document.querySelector('.english');
const newQuoteButton = document.getElementById('newQuote');
const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('toggleMusic');
const dateElement = document.getElementById('current-date');
const timeElement = document.getElementById('current-time');

let isMusicPlaying = true;

// הוספת פו��קציה לחישוב הזמן שנשאר עד סוף היום
function updateTimeUntilNextDay() {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    
    const timeLeft = endOfDay - now;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('timeUntilNextDay').textContent = 
        `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// עדכון הטיימר כל שנייה
setInterval(updateTimeUntilNextDay, 1000);
updateTimeUntilNextDay(); // הצגה ראשונית

// שיפור פונקציית getRandomQuote כך שא יחזור על אותו משפט
let lastQuoteIndex = -1;

function getDailyQuote() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('lastQuoteDate');
    const savedQuoteIndex = localStorage.getItem('currentQuoteIndex');
    
    if (today !== savedDate || !savedQuoteIndex) {
        const newIndex = Math.floor(Math.random() * quotes.length);
        localStorage.setItem('currentQuoteIndex', newIndex);
        localStorage.setItem('lastQuoteDate', today);
        return quotes[newIndex];
    }
    
    return quotes[parseInt(savedQuoteIndex)];
}

function displayNewQuote() {
    const quoteContainer = document.querySelector('.quote-container');
    quoteContainer.style.opacity = 0;
    
    setTimeout(() => {
        const quote = getDailyQuote();
        document.querySelector('.quote.hebrew').textContent = quote;
        quoteContainer.style.opacity = 1;
    }, 300);
}

function toggleMusic() {
    if (isMusicPlaying) {
        music.pause();
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        let playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            }).catch(error => {
                console.log("Auto-play prevented:", error);
            });
        }
    }
    isMusicPlaying = !isMusicPlaying;
}

function updateDateTime() {
    const now = new Date();
    
    // עדכון תאריך
    const dateOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    dateElement.textContent = now.toLocaleDateString('he-IL', dateOptions);
    
    // עדכון שעה
    timeElement.textContent = now.toLocaleTimeString('he-IL', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    });
}

// הפעלת מוזיקה אוטומטית כטעינת הדף
window.addEventListener('load', function() {
    let playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            isMusicPlaying = true;
        }).catch(error => {
            console.log("Auto-play prevented:", error);
            // נסה להפעיל שוב אחרי שנייה
            setTimeout(() => {
                music.play().then(() => {
                    musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                    isMusicPlaying = true;
                }).catch(() => {});
            }, 1000);
        });
    }
});

// הוספת הפעלת מוזיקה בכל קליק על העמוד
document.addEventListener('click', function() {
    if (!isMusicPlaying) {
        let playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                isMusicPlaying = true;
            }).catch(error => {
                console.log("Auto-play prevented:", error);
            });
        }
    }
}, { once: true }); // יפעל רק פעם אחת

// עדכון זמן כל שנייה
setInterval(updateDateTime, 1000);

// הצגת זמן ראשוני
updateDateTime();

// הצג משפט ראשון
displayNewQuote();

// Event listeners
newQuoteButton.addEventListener('click', () => {
    displayNewQuote();
    newQuoteButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        newQuoteButton.style.transform = 'scale(1)';
    }, 100);
});

musicToggle.addEventListener('click', toggleMusic);

// הוספת מעברים לציטוטים
hebrewQuote.style.transition = 'opacity 0.3s ease';
englishQuote.style.transition = 'opacity 0.3s ease'; 

// פונקציות השיתוף
function shareQuote(platform) {
    const quoteText = document.querySelector('.hebrew').textContent;
    const websiteUrl = 'https://nirfit.github.io/Daily-motivation/';
    const shareText = `${quoteText}\n\nלעוד משפטי מוטיבציה יומיים:\n${websiteUrl}`;
    
    switch(platform) {
        case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`);
            break;
        case 'telegram':
            window.open(`https://t.me/share/url?url=${encodeURIComponent(websiteUrl)}&text=${encodeURIComponent(quoteText)}`);
            break;
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}&quote=${encodeURIComponent(quoteText)}`);
            break;
        case 'instagram':
            // אינסטגרם לא תומך בשיתוף ישיר דרך URL, אז נעתיק את הטקסט
            copyToClipboard(shareText);
            window.open('https://www.instagram.com');
            alert('הטקסט הועתק! כעת תוכל להדביק אותו באינסטגרם');
            break;
    }
}

function copyQuote() {
    const quoteText = document.querySelector('.hebrew').textContent;
    const websiteUrl = 'https://nirfit.github.io/Daily-motivation/';
    const textToCopy = `${quoteText}\n\nלעוד משפטי מוטיבציה יומיים:\n${websiteUrl}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.querySelector('.share-btn.copy');
        const originalIcon = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            copyBtn.innerHTML = originalIcon;
        }, 2000);
    });
}

// פונקציית עזר להעתקה
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => {
        console.error('Failed to copy text: ', err);
    });
} 