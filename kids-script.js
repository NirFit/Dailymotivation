// ===== KIDS ENGLISH LEARNING - LESSONS DATA =====

const lessons = [
    {
        // Topic 0: Colors
        title: "🎨 Colors - צבעים",
        words: [
            { emoji: "", english: "Red", hebrew: "אדום", color: "#e74c3c" },
            { emoji: "", english: "Blue", hebrew: "כחול", color: "#3498db" },
            { emoji: "", english: "Green", hebrew: "ירוק", color: "#2ecc71" },
            { emoji: "", english: "Yellow", hebrew: "צהוב", color: "#f1c40f" },
            { emoji: "", english: "Orange", hebrew: "כתום", color: "#e67e22" },
            { emoji: "", english: "Purple", hebrew: "סגול", color: "#9b59b6" },
            { emoji: "", english: "Pink", hebrew: "ורוד", color: "#e91e8b" },
            { emoji: "", english: "White", hebrew: "לבן", color: "#ecf0f1" },
            { emoji: "", english: "Black", hebrew: "שחור", color: "#2c3e50" },
            { emoji: "", english: "Brown", hebrew: "חום", color: "#8B4513" }
        ],
        isColor: true
    },
    {
        // Topic 1: Numbers
        title: "🔢 Numbers - מספרים",
        words: [
            { emoji: "1️⃣", english: "One", hebrew: "אחת" },
            { emoji: "2️⃣", english: "Two", hebrew: "שתיים" },
            { emoji: "3️⃣", english: "Three", hebrew: "שלוש" },
            { emoji: "4️⃣", english: "Four", hebrew: "ארבע" },
            { emoji: "5️⃣", english: "Five", hebrew: "חמש" },
            { emoji: "6️⃣", english: "Six", hebrew: "שש" },
            { emoji: "7️⃣", english: "Seven", hebrew: "שבע" },
            { emoji: "8️⃣", english: "Eight", hebrew: "שמונה" },
            { emoji: "9️⃣", english: "Nine", hebrew: "תשע" },
            { emoji: "🔟", english: "Ten", hebrew: "עשר" }
        ]
    },
    {
        // Topic 2: Animals
        title: "🐱 Animals - חיות",
        words: [
            { emoji: "🐱", english: "Cat", hebrew: "חתול" },
            { emoji: "🐶", english: "Dog", hebrew: "כלב" },
            { emoji: "🐟", english: "Fish", hebrew: "דג" },
            { emoji: "🐦", english: "Bird", hebrew: "ציפור" },
            { emoji: "🐰", english: "Rabbit", hebrew: "ארנב" },
            { emoji: "🐴", english: "Horse", hebrew: "סוס" },
            { emoji: "🐮", english: "Cow", hebrew: "פרה" },
            { emoji: "🐷", english: "Pig", hebrew: "חזיר" },
            { emoji: "🐸", english: "Frog", hebrew: "צפרדע" },
            { emoji: "🦁", english: "Lion", hebrew: "אריה" }
        ]
    },
    {
        // Topic 3: Fruits
        title: "🍎 Fruits - פירות",
        words: [
            { emoji: "🍎", english: "Apple", hebrew: "תפוח" },
            { emoji: "🍌", english: "Banana", hebrew: "בננה" },
            { emoji: "🍊", english: "Orange", hebrew: "תפוז" },
            { emoji: "🍇", english: "Grapes", hebrew: "ענבים" },
            { emoji: "🍓", english: "Strawberry", hebrew: "תות" },
            { emoji: "🍉", english: "Watermelon", hebrew: "אבטיח" },
            { emoji: "🍑", english: "Peach", hebrew: "אפרסק" },
            { emoji: "🍋", english: "Lemon", hebrew: "לימון" },
            { emoji: "🍒", english: "Cherry", hebrew: "דובדבן" },
            { emoji: "🥝", english: "Kiwi", hebrew: "קיווי" }
        ]
    },
    {
        // Topic 4: Family
        title: "👨‍👩‍👧‍👦 Family - משפחה",
        words: [
            { emoji: "👩", english: "Mother", hebrew: "אמא" },
            { emoji: "👨", english: "Father", hebrew: "אבא" },
            { emoji: "👧", english: "Sister", hebrew: "אחות" },
            { emoji: "👦", english: "Brother", hebrew: "אח" },
            { emoji: "👶", english: "Baby", hebrew: "תינוק" },
            { emoji: "👵", english: "Grandmother", hebrew: "סבתא" },
            { emoji: "👴", english: "Grandfather", hebrew: "סבא" },
            { emoji: "👨‍👩‍👧", english: "Family", hebrew: "משפחה" },
            { emoji: "🧒", english: "Child", hebrew: "ילד" },
            { emoji: "👫", english: "Friends", hebrew: "חברים" }
        ]
    },
    {
        // Topic 5: Body
        title: "👋 Body - גוף",
        words: [
            { emoji: "👀", english: "Eyes", hebrew: "עיניים" },
            { emoji: "👃", english: "Nose", hebrew: "אף" },
            { emoji: "👄", english: "Mouth", hebrew: "פה" },
            { emoji: "👂", english: "Ear", hebrew: "אוזן" },
            { emoji: "🤚", english: "Hand", hebrew: "יד" },
            { emoji: "🦶", english: "Foot", hebrew: "רגל" },
            { emoji: "🦷", english: "Tooth", hebrew: "שן" },
            { emoji: "💪", english: "Arm", hebrew: "זרוע" },
            { emoji: "🦵", english: "Leg", hebrew: "רגל" },
            { emoji: "🧠", english: "Head", hebrew: "ראש" }
        ]
    }
];

// Daily sentences
const dailySentences = [
    { en: "Hello! How are you?", he: "שלום! מה שלומך?" },
    { en: "My name is...", he: "השם שלי הוא..." },
    { en: "Good morning!", he: "בוקר טוב!" },
    { en: "Thank you very much!", he: "תודה רבה!" },
    { en: "I love to learn!", he: "אני אוהב ללמוד!" },
    { en: "What is your name?", he: "מה השם שלך?" },
    { en: "I am happy today!", he: "אני שמח היום!" },
    { en: "Please and thank you!", he: "בבקשה ותודה!" },
    { en: "Let's play together!", he: "בואו נשחק ביחד!" },
    { en: "I can do it!", he: "אני יכול לעשות את זה!" },
    { en: "Good night, sleep well!", he: "לילה טוב, שינה טובה!" },
    { en: "The sun is shining!", he: "השמש זורחת!" },
    { en: "I like ice cream!", he: "אני אוהב גלידה!" },
    { en: "One, two, three, go!", he: "אחת, שתיים, שלוש, קדימה!" },
    { en: "Red, blue, green!", he: "אדום, כחול, ירוק!" },
    { en: "I see a big dog!", he: "אני רואה כלב גדול!" },
    { en: "The cat is cute!", he: "החתול חמוד!" },
    { en: "I eat an apple.", he: "אני אוכל תפוח." },
    { en: "It is raining today.", he: "יורד גשם היום." },
    { en: "I have a book.", he: "יש לי ספר." },
    { en: "She is my friend.", he: "היא החברה שלי." },
    { en: "The bird can fly!", he: "הציפור יכולה לעוף!" },
    { en: "I want water, please.", he: "אני רוצה מים, בבקשה." },
    { en: "This is my family.", he: "זו המשפחה שלי." },
    { en: "Today is a good day!", he: "היום הוא יום טוב!" },
    { en: "Open the door, please.", he: "תפתח את הדלת, בבקשה." },
    { en: "I love my mother!", he: "אני אוהב את אמא שלי!" },
    { en: "Where is the ball?", he: "איפה הכדור?" },
    { en: "Look at the stars!", he: "תסתכל על הכוכבים!" },
    { en: "Goodbye, see you tomorrow!", he: "להתראות, נתראה מחר!" },
    { en: "Five little monkeys!", he: "חמישה קופים קטנים!" }
];

// Card color themes for variety
const cardColors = [
    "#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#9b59b6",
    "#e67e22", "#1abc9c", "#e91e63", "#00bcd4", "#8bc34a"
];

// ===== STATE =====
let currentTopic = 0;
let quizScore = 0;
let quizTotal = 0;
let currentQuizIndex = 0;
let quizWords = [];
let answered = false;

// ===== SPEECH SYNTHESIS =====
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.75;
        utterance.pitch = 1.1;
        utterance.volume = 1;

        // Try to find a good English voice
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female'))
            || voices.find(v => v.lang.startsWith('en-US'))
            || voices.find(v => v.lang.startsWith('en'));
        if (englishVoice) {
            utterance.voice = englishVoice;
        }

        window.speechSynthesis.speak(utterance);
        return utterance;
    }
}

// ===== RENDER WORDS =====
function renderWords() {
    const grid = document.getElementById('words-grid');
    const lesson = lessons[currentTopic];

    document.getElementById('lesson-title').textContent = lesson.title;

    grid.innerHTML = '';

    lesson.words.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.style.setProperty('--card-color', cardColors[index % cardColors.length]);
        card.style.borderTop = `4px solid ${cardColors[index % cardColors.length]}`;
        card.style.animationDelay = `${index * 0.05}s`;

        let visualContent = '';
        if (lesson.isColor) {
            visualContent = `<div class="color-swatch" style="background-color: ${word.color};"></div>`;
        } else {
            visualContent = `<span class="word-emoji">${word.emoji}</span>`;
        }

        card.innerHTML = `
            <span class="word-speaker"><i class="fas fa-volume-up"></i></span>
            ${visualContent}
            <div class="word-english">${word.english}</div>
            <div class="word-hebrew">${word.hebrew}</div>
        `;

        card.addEventListener('click', () => {
            // Visual feedback
            card.classList.add('speaking');
            setTimeout(() => card.classList.remove('speaking'), 800);
            // Speak the word
            speak(word.english);
        });

        grid.appendChild(card);
    });
}

// ===== TOPIC SWITCHING =====
function switchTopic(topicIndex) {
    currentTopic = topicIndex;

    // Update active button
    document.querySelectorAll('.topic-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === topicIndex);
    });

    // Re-render words
    renderWords();

    // Reset quiz for new topic
    resetQuiz();

    // Scroll to lesson area
    document.querySelector('.lesson-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== QUIZ LOGIC =====
function resetQuiz() {
    quizScore = 0;
    quizTotal = 0;
    currentQuizIndex = 0;
    answered = false;

    // Shuffle words for quiz
    quizWords = [...lessons[currentTopic].words].sort(() => Math.random() - 0.5);

    updateScoreDisplay();
    loadQuizQuestion();
}

function loadQuizQuestion() {
    if (currentQuizIndex >= quizWords.length) {
        // Quiz complete - show results
        showQuizComplete();
        return;
    }

    answered = false;
    const word = quizWords[currentQuizIndex];
    const lesson = lessons[currentTopic];

    // Set question display
    if (lesson.isColor) {
        document.getElementById('quiz-emoji').innerHTML = `<div class="color-swatch" style="background-color: ${word.color}; width: 60px; height: 60px; margin: 0 auto;"></div>`;
    } else {
        document.getElementById('quiz-emoji').textContent = word.emoji;
    }
    document.getElementById('quiz-hebrew-word').textContent = word.hebrew;
    document.getElementById('quiz-prompt').textContent = "?מה זה באנגלית";

    // Generate options (1 correct + 3 wrong)
    const otherWords = lesson.words.filter(w => w.english !== word.english);
    const shuffledOthers = otherWords.sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [word, ...shuffledOthers].sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt.english;
        btn.addEventListener('click', () => checkAnswer(btn, opt.english, word.english));
        optionsContainer.appendChild(btn);
    });

    // Hide feedback and next button
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-feedback').className = 'quiz-feedback';
    document.getElementById('quiz-next-btn').classList.remove('visible');
}

function checkAnswer(btn, selected, correct) {
    if (answered) return;
    answered = true;
    quizTotal++;

    const allOptions = document.querySelectorAll('.quiz-option');
    allOptions.forEach(opt => {
        opt.disabled = true;
        if (opt.textContent === correct) {
            opt.classList.add('correct');
        }
    });

    const feedback = document.getElementById('quiz-feedback');

    if (selected === correct) {
        quizScore++;
        btn.classList.add('correct');
        feedback.textContent = "🎉 מעולה! כל הכבוד!";
        feedback.className = 'quiz-feedback correct';
        speak(correct);
    } else {
        btn.classList.add('wrong');
        feedback.textContent = `😊 לא נורא! התשובה הנכונה: ${correct}`;
        feedback.className = 'quiz-feedback wrong';
        // Speak the correct answer so they learn
        setTimeout(() => speak(correct), 500);
    }

    updateScoreDisplay();
    document.getElementById('quiz-next-btn').classList.add('visible');
}

function nextQuestion() {
    currentQuizIndex++;
    loadQuizQuestion();
}

function showQuizComplete() {
    const feedback = document.getElementById('quiz-feedback');
    const percentage = Math.round((quizScore / quizTotal) * 100);
    let message = '';

    if (percentage === 100) {
        message = "🏆🌟 מושלם! אלוף/ה! 100%!";
    } else if (percentage >= 70) {
        message = `🎉 כל הכבוד! קיבלת ${quizScore} מתוך ${quizTotal}!`;
    } else {
        message = `💪 יופי! קיבלת ${quizScore} מתוך ${quizTotal}. נמשיך להתאמן!`;
    }

    feedback.textContent = message;
    feedback.className = 'quiz-feedback correct';

    document.getElementById('quiz-options').innerHTML = `
        <button class="quiz-option" onclick="resetQuiz()" style="grid-column: 1 / -1; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-color: #667eea; font-family: 'Heebo', sans-serif;">
            🔄 שחקו שוב!
        </button>
    `;

    document.getElementById('quiz-emoji').textContent = percentage === 100 ? "🏆" : "🎯";
    document.getElementById('quiz-hebrew-word').textContent = percentage === 100 ? "מושלם!" : "סיימנו!";
    document.getElementById('quiz-prompt').textContent = "";
    document.getElementById('quiz-next-btn').classList.remove('visible');
}

function updateScoreDisplay() {
    const starsEl = document.getElementById('score-stars');
    const textEl = document.getElementById('score-text');

    let stars = '';
    for (let i = 0; i < quizScore; i++) {
        stars += '⭐';
    }
    starsEl.textContent = stars;
    textEl.textContent = `${quizScore} / ${quizTotal}`;
}

// ===== DAILY SENTENCE =====
function getDailySentence() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    return dailySentences[dayOfYear % dailySentences.length];
}

function displayDailySentence() {
    const sentence = getDailySentence();
    document.getElementById('daily-sentence-en').textContent = sentence.en;
    document.getElementById('daily-sentence-he').textContent = sentence.he;
}

function speakDailySentence() {
    const sentence = getDailySentence();
    speak(sentence.en);
}

// ===== LESSON NUMBER =====
function setLessonNumber() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today - startOfYear) / 86400000);
    document.getElementById('lesson-number').textContent = `שיעור ${dayOfYear}`;
}

// ===== INIT =====
function init() {
    // Load voices (needed for some browsers)
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }

    setLessonNumber();
    renderWords();
    resetQuiz();
    displayDailySentence();
}

// Run on load
document.addEventListener('DOMContentLoaded', init);
