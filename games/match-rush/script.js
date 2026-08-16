/* =========================================
   MATCH RUSH
   VERB + PHRASE CHALLENGE
========================================= */


/* =========================================
   SETTINGS
========================================= */

const GAME_TIME = 90;

const POINTS_PER_CORRECT = 100;

const MAX_COMBO = 5;

const TOTAL_MATCHES = 39;


/* =========================================
   VOCABULARY
   39 target collocations
========================================= */

const vocabulary = [

    {
        phrase: "in an apartment",
        answer: "LIVE",
        distractors: ["PLAY", "DRINK"]
    },

    {
        phrase: "breakfast",
        answer: "HAVE",
        distractors: ["PLAY", "LISTEN"]
    },

    {
        phrase: "TV shows",
        answer: "WATCH",
        distractors: ["DRINK", "WORK"]
    },

    {
        phrase: "to music",
        answer: "LISTEN",
        distractors: ["EAT", "WORK"]
    },

    {
        phrase: "a newspaper",
        answer: "READ",
        distractors: ["PLAY", "DRINK"]
    },

    {
        phrase: "fast food",
        answer: "EAT",
        distractors: ["LISTEN", "LIVE"]
    },

    {
        phrase: "tea",
        answer: "DRINK",
        distractors: ["READ", "PLAY"]
    },

    {
        phrase: "Spanish",
        answer: "SPEAK",
        distractors: ["EAT", "SWIM"]
    },

    {
        phrase: "a coffee",
        answer: "WANT",
        distractors: ["SWIM", "READ"]
    },

    {
        phrase: "dogs",
        answer: "LIKE",
        distractors: ["DRINK", "SWIM"]
    },

    {
        phrase: "in a bank",
        answer: "WORK",
        distractors: ["EAT", "PLAY"]
    },

    {
        phrase: "English",
        answer: "STUDY",
        distractors: ["DRINK", "WALK"]
    },

    {
        phrase: "to English classes",
        answer: "GO",
        distractors: ["EAT", "READ"]
    },

    {
        phrase: "a new phone",
        answer: "NEED",
        distractors: ["SWIM", "PLAY"]
    },

    {
        phrase: "up",
        answer: "GET",
        distractors: ["DRINK", "READ"]
    },

    {
        phrase: "a bath",
        answer: "TAKE",
        distractors: ["PLAY", "SPEAK"]
    },

    {
        phrase: "lunch",
        answer: "HAVE",
        distractors: ["PLAY", "LISTEN"]
    },

    {
        phrase: "work",
        answer: "FINISH",
        distractors: ["SWIM", "DRINK"]
    },

    {
        phrase: "home",
        answer: "GO",
        distractors: ["EAT", "READ"]
    },

    {
        phrase: "shopping",
        answer: "GO",
        distractors: ["DRINK", "PLAY"]
    },

    {
        phrase: "dinner",
        answer: "MAKE",
        distractors: ["SWIM", "LISTEN"]
    },

    {
        phrase: "housework",
        answer: "DO",
        distractors: ["DRINK", "PLAY"]
    },

    {
        phrase: "homework",
        answer: "DO",
        distractors: ["SWIM", "WATCH"]
    },

    {
        phrase: "to bed",
        answer: "GO",
        distractors: ["EAT", "SPEAK"]
    },

    {
        phrase: "a shower",
        answer: "TAKE",
        distractors: ["READ", "PLAY"]
    },

    {
        phrase: "to the movies",
        answer: "GO",
        distractors: ["DRINK", "STUDY"]
    },

    {
        phrase: "to the beach",
        answer: "GO",
        distractors: ["EAT", "READ"]
    },

    {
        phrase: "to school",
        answer: "GO",
        distractors: ["DRINK", "PLAY"]
    },

    {
        phrase: "tennis",
        answer: "PLAY",
        distractors: ["READ", "DRINK"]
    },

    {
        phrase: "exercise",
        answer: "DO",
        distractors: ["WATCH", "LISTEN"]
    },

    {
        phrase: "out",
        answer: "GO",
        distractors: ["READ", "DRINK"]
    },

    {
        phrase: "computer games",
        answer: "PLAY",
        distractors: ["DRINK", "STUDY"]
    },

    {
        phrase: "in the mountains",
        answer: "HIKE",
        distractors: ["DRINK", "READ"]
    },

    {
        phrase: "in the park",
        answer: "WALK",
        distractors: ["EAT", "SPEAK"]
    },

    {
        phrase: "the piano",
        answer: "PLAY",
        distractors: ["DRINK", "STUDY"]
    },

    {
        phrase: "in the ocean",
        answer: "SWIM",
        distractors: ["READ", "WORK"]
    },

    {
        phrase: "friends",
        answer: "MEET",
        distractors: ["DRINK", "PLAY"]
    },

    {
        phrase: "at home",
        answer: "RELAX",
        distractors: ["EAT", "SPEAK"]
    },

    {
        phrase: "to another city",
        answer: "TRAVEL",
        distractors: ["DRINK", "PLAY"]
    }

];


/* =========================================
   GAME STATE
========================================= */

let questions = [];

let currentQuestion = 0;

let timeLeft = GAME_TIME;

let timerInterval = null;

let score = 0;

let combo = 0;

let bestCombo = 1;

let correctAnswers = 0;

let totalAnswers = 0;

let gameActive = false;


/* =========================================
   ELEMENTS
========================================= */

const startScreen =
    document.getElementById("startScreen");

const gameScreen =
    document.getElementById("gameScreen");

const resultScreen =
    document.getElementById("resultScreen");

const startButton =
    document.getElementById("startButton");

const playAgainButton =
    document.getElementById("playAgainButton");

const timerElement =
    document.getElementById("timer");

const timerBox =
    document.getElementById("timerBox");

const scoreElement =
    document.getElementById("score");

const comboElement =
    document.getElementById("combo");

const matchedElement =
    document.getElementById("matched");

const phraseElement =
    document.getElementById("phrase");

const messageElement =
    document.getElementById("message");

const answersContainer =
    document.getElementById("answersContainer");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const themeToggle =
    document.getElementById("themeToggle");


/* =========================================
   RESULT ELEMENTS
========================================= */

const finalScoreElement =
    document.getElementById("finalScore");

const finalMatchedElement =
    document.getElementById("finalMatched");

const finalAccuracyElement =
    document.getElementById("finalAccuracy");

const finalBestComboElement =
    document.getElementById("finalBestCombo");

const xpEarnedElement =
    document.getElementById("xpEarned");


/* =========================================
   THEME
========================================= */

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "learningArcadeTheme"
        );


    if (
        savedTheme === "light"
    ) {

        document.body.classList.add(
            "light-mode"
        );

        themeToggle.textContent =
            "🌙";

        themeToggle.title =
            "Switch to dark mode";

    } else {

        themeToggle.textContent =
            "☀️";

        themeToggle.title =
            "Switch to light mode";

    }

}


themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light-mode"
        );


        const isLight =
            document.body.classList.contains(
                "light-mode"
            );


        localStorage.setItem(
            "learningArcadeTheme",
            isLight
                ? "light"
                : "dark"
        );


        themeToggle.textContent =
            isLight
                ? "🌙"
                : "☀️";


        themeToggle.title =
            isLight
                ? "Switch to dark mode"
                : "Switch to light mode";

    }
);


loadTheme();


/* =========================================
   BUTTONS
========================================= */

startButton.addEventListener(
    "click",
    startGame
);


playAgainButton.addEventListener(
    "click",
    startGame
);


/* =========================================
   START GAME
========================================= */

function startGame() {

    timeLeft = GAME_TIME;

    score = 0;

    combo = 0;

    bestCombo = 1;

    correctAnswers = 0;

    totalAnswers = 0;

    currentQuestion = 0;

    gameActive = true;


    questions =
        shuffle([
            ...vocabulary
        ]);


    scoreElement.textContent =
        "0";


    comboElement.textContent =
        "×1";


    matchedElement.textContent =
        "0";


    timerElement.textContent =
        GAME_TIME;


    progressText.textContent =
        `0 / ${TOTAL_MATCHES}`;


    progressFill.style.width =
        "0%";


    timerBox.classList.remove(
        "warning",
        "danger"
    );


    startScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.add(
        "hidden"
    );


    gameScreen.classList.remove(
        "hidden"
    );


    showQuestion();


    clearInterval(
        timerInterval
    );


    timerInterval =
        setInterval(
            updateTimer,
            1000
        );

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    if (
        currentQuestion >=
        questions.length
    ) {

        endGame();

        return;

    }


    const question =
        questions[currentQuestion];


    phraseElement.innerHTML =
        `<span>_____</span> ${question.phrase}`;


    messageElement.textContent =
        "Choose the correct verb.";


    answersContainer.innerHTML =
        "";


    const choices =
        shuffle([
            question.answer,
            ...question.distractors
        ]);


    choices.forEach(
        function (choice) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.type =
                "button";


            button.textContent =
                choice.toLowerCase();


            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        choice,
                        question.answer,
                        button
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );


    progressText.textContent =
        `${currentQuestion} / ${TOTAL_MATCHES}`;


    progressFill.style.width =
        `${(
            currentQuestion /
            TOTAL_MATCHES
        ) * 100}%`;

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(
    selected,
    correct,
    selectedButton
) {

    if (!gameActive) {
        return;
    }


    totalAnswers++;


    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    if (
        selected === correct
    ) {

        handleCorrect(
            selectedButton
        );

    } else {

        handleWrong(
            selectedButton,
            correct
        );

    }

}


/* =========================================
   CORRECT
========================================= */

function handleCorrect(
    selectedButton
) {

    correctAnswers++;

    combo++;


    bestCombo =
        Math.max(
            bestCombo,
            combo
        );


    const multiplier =
        Math.min(
            combo,
            MAX_COMBO
        );


    const points =
        POINTS_PER_CORRECT *
        multiplier;


    score += points;


    selectedButton.classList.add(
        "correct"
    );


    scoreElement.textContent =
        score;


    comboElement.textContent =
        "×" + multiplier;


    matchedElement.textContent =
        correctAnswers;


    messageElement.textContent =
        `✅ Correct! +${points} points`;


    progressText.textContent =
        `${correctAnswers} / ${TOTAL_MATCHES}`;


    progressFill.style.width =
        `${(
            correctAnswers /
            TOTAL_MATCHES
        ) * 100}%`;


    setTimeout(
        function () {

            currentQuestion++;

            showQuestion();

        },
        550
    );

}


/* =========================================
   WRONG
========================================= */

function handleWrong(
    selectedButton,
    correct
) {

    combo = 0;


    selectedButton.classList.add(
        "wrong"
    );


    comboElement.textContent =
        "×1";


    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(
        function (button) {

            if (
                button.textContent.trim() ===
                correct.toLowerCase()
            ) {

                button.classList.add(
                    "correct-answer"
                );

            }

        }
    );


    messageElement.textContent =
        `❌ Correct answer: ${correct}`;


    setTimeout(
        function () {

            currentQuestion++;

            showQuestion();

        },
        800
    );

}


/* =========================================
   TIMER
========================================= */

function updateTimer() {

    timeLeft--;


    timerElement.textContent =
        timeLeft;


    if (
        timeLeft <= 30
    ) {

        timerBox.classList.add(
            "warning"
        );

    }


    if (
        timeLeft <= 10
    ) {

        timerBox.classList.add(
            "danger"
        );

    }


    if (
        timeLeft <= 0
    ) {

        endGame();

    }

}


/* =========================================
   END GAME
========================================= */

function endGame() {

    if (!gameActive) {
        return;
    }


    gameActive = false;


    clearInterval(
        timerInterval
    );


    const accuracy =
        totalAnswers > 0
            ? Math.round(
                (
                    correctAnswers /
                    totalAnswers
                ) * 100
            )
            : 0;


    const xp =
        Math.floor(
            score / 10
        );


    /* FINAL SCORE */

    finalScoreElement.textContent =
        score;


    /* FINAL MATCHED */

    finalMatchedElement.textContent =
        `${correctAnswers} / ${TOTAL_MATCHES}`;


    /* FINAL ACCURACY */

    finalAccuracyElement.textContent =
        accuracy + "%";


    /* BEST COMBO */

    finalBestComboElement.textContent =
        "×" +
        Math.min(
            bestCombo,
            MAX_COMBO
        );


    /* XP */

    xpEarnedElement.textContent =
        "+" + xp + " XP";


    /* PROGRESS */

    progressText.textContent =
        `${correctAnswers} / ${TOTAL_MATCHES}`;


    progressFill.style.width =
        "100%";


    /* SHOW RESULT */

    gameScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.remove(
        "hidden"
    );


    saveGameProgress(
        xp
    );

}


/* =========================================
   SAVE PROGRESS
========================================= */

function saveGameProgress(
    xp
) {

    let player;


    try {

        player =
            JSON.parse(
                localStorage.getItem(
                    "learningArcadePlayer"
                )
            );

    } catch (
        error
    ) {

        player = null;

    }


    if (!player) {

        player = {

            name:
                "Guest Player",

            xp:
                0,

            gamesPlayed:
                0,

            streak:
                0,

            lastPlayed:
                null

        };

    }


    player.xp =
        Number(
            player.xp || 0
        ) + xp;


    player.gamesPlayed =
        Number(
            player.gamesPlayed || 0
        ) + 1;


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    if (
        player.lastPlayed !== today
    ) {

        player.streak =
            Number(
                player.streak || 0
            ) + 1;

        player.lastPlayed =
            today;

    }


    localStorage.setItem(
        "learningArcadePlayer",
        JSON.stringify(
            player
        )
    );

}


/* =========================================
   SHUFFLE
========================================= */

function shuffle(
    array
) {

    for (
        let i =
            array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }


    return array;

}
