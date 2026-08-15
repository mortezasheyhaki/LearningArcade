/* =====================================================
   GRAMMAR BATTLE
   BE + COUNTRIES & NATIONALITIES
   + THERE IS / THERE ARE
===================================================== */


/* =====================================================
   SETTINGS
===================================================== */

const TOTAL_QUESTIONS = 15;

const XP_PER_CORRECT = 10;


/* =====================================================
   QUESTION BANK
===================================================== */

const questionBank = [

    /* =================================================
       POSITIVE
    ================================================= */

    {
        type: "positive",

        text:
            "She _____ from Brazil.",

        options:
            [
                "am",
                "is",
                "are"
            ],

        answer:
            "is"
    },


    {
        type: "positive",

        text:
            "They _____ from Canada.",

        options:
            [
                "am",
                "is",
                "are"
            ],

        answer:
            "are"
    },


    {
        type: "positive",

        text:
            "I _____ from Japan.",

        options:
            [
                "am",
                "is",
                "are"
            ],

        answer:
            "am"
    },


    {
        type: "positive",

        text:
            "He _____ Turkish.",

        options:
            [
                "am",
                "is",
                "are"
            ],

        answer:
            "is"
    },


    {
        type: "positive",

        text:
            "We _____ from Mexico.",

        options:
            [
                "am",
                "is",
                "are"
            ],

        answer:
            "are"
    },


    /* =================================================
       NEGATIVE
    ================================================= */

    {
        type: "negative",

        text:
            "I _____ from Spain.",

        options:
            [
                "isn't",
                "aren't",
                "am not"
            ],

        answer:
            "am not"
    },


    {
        type: "negative",

        text:
            "He _____ Japanese.",

        options:
            [
                "isn't",
                "aren't",
                "am not"
            ],

        answer:
            "isn't"
    },


    {
        type: "negative",

        text:
            "They _____ from China.",

        options:
            [
                "isn't",
                "aren't",
                "am not"
            ],

        answer:
            "aren't"
    },


    {
        type: "negative",

        text:
            "She _____ Canadian.",

        options:
            [
                "isn't",
                "aren't",
                "am not"
            ],

        answer:
            "isn't"
    },


    {
        type: "negative",

        text:
            "We _____ from Peru.",

        options:
            [
                "isn't",
                "aren't",
                "am not"
            ],

        answer:
            "aren't"
    },


    /* =================================================
       QUESTION + SHORT ANSWER
    ================================================= */

    {
        type: "question",

        text:
            "Maria is from Japan.<br><br>Is Maria Japanese?",

        options:
            [
                "Yes, she is.",
                "No, she isn't.",
                "Yes, they are."
            ],

        answer:
            "Yes, she is."
    },


    {
        type: "question",

        text:
            "David is from Brazil.<br><br>Is David Chinese?",

        options:
            [
                "Yes, he is.",
                "No, he isn't.",
                "No, they aren't."
            ],

        answer:
            "No, he isn't."
    },


    {
        type: "question",

        text:
            "Anna and Leo are from Canada.<br><br>Are they Canadian?",

        options:
            [
                "Yes, they are.",
                "No, they aren't.",
                "Yes, she is."
            ],

        answer:
            "Yes, they are."
    },


    {
        type: "question",

        text:
            "Sara is from Mexico.<br><br>Is Sara Spanish?",

        options:
            [
                "Yes, she is.",
                "No, she isn't.",
                "Yes, they are."
            ],

        answer:
            "No, she isn't."
    },


    {
        type: "question",

        text:
            "Tom and Jack are from Vietnam.<br><br>Are they Vietnamese?",

        options:
            [
                "Yes, they are.",
                "No, they aren't.",
                "Yes, he is."
            ],

        answer:
            "Yes, they are."
    }

];


/* =====================================================
   ELEMENTS
===================================================== */

const targetScreen =
    document.getElementById(
        "targetScreen"
    );

const gameScreen =
    document.getElementById(
        "gameScreen"
    );

const resultScreen =
    document.getElementById(
        "resultScreen"
    );

const startBattleButton =
    document.getElementById(
        "startBattleButton"
    );

const retryButton =
    document.getElementById(
        "retryButton"
    );

const grammarButton =
    document.getElementById(
        "grammarButton"
    );

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const questionType =
    document.getElementById(
        "questionType"
    );

const questionText =
    document.getElementById(
        "questionText"
    );

const questionHint =
    document.getElementById(
        "questionHint"
    );

const answersContainer =
    document.getElementById(
        "answersContainer"
    );

const feedback =
    document.getElementById(
        "feedback"
    );

const scoreElement =
    document.getElementById(
        "score"
    );

const questionNumberElement =
    document.getElementById(
        "questionNumber"
    );

const comboElement =
    document.getElementById(
        "combo"
    );

const progressText =
    document.getElementById(
        "progressText"
    );

const progressFill =
    document.getElementById(
        "progressFill"
    );


/* =====================================================
   RESULTS
===================================================== */

const finalScore =
    document.getElementById(
        "finalScore"
    );

const finalCorrect =
    document.getElementById(
        "finalCorrect"
    );

const finalWrong =
    document.getElementById(
        "finalWrong"
    );

const finalAccuracy =
    document.getElementById(
        "finalAccuracy"
    );

const positiveResult =
    document.getElementById(
        "positiveResult"
    );

const negativeResult =
    document.getElementById(
        "negativeResult"
    );

const questionResult =
    document.getElementById(
        "questionResult"
    );

const earnedXP =
    document.getElementById(
        "earnedXP"
    );


/* =====================================================
   GRAMMAR SELECTION
===================================================== */

let selectedGrammar =
    "be";


/*
 * The existing HTML already contains the BE card.
 * We add the new "There Is / There Are" card
 * automatically with JavaScript.
 */

const grammarGrid =
    document.querySelector(
        ".grammar-grid"
    );


function createThereIsGrammarCard() {

    if (
        !grammarGrid
    ) {

        return;

    }


    /*
     * Avoid creating the card twice.
     */

    if (
        document.querySelector(
            '[data-grammar="there-is"]'
        )
    ) {

        return;

    }


    const card =
        document.createElement(
            "button"
        );


    card.type =
        "button";


    card.className =
        "grammar-card";


    card.dataset.grammar =
        "there-is";


    card.innerHTML = `

        <span class="grammar-card-icon">
            🏠
        </span>


        <span class="grammar-card-title">
            There Is / There Are
        </span>


        <span class="grammar-card-text">
            Positive • Negative • Questions
        </span>


        <span class="grammar-card-topic">
            Rooms &amp; Places
        </span>

    `;


    grammarGrid.appendChild(
        card
    );

}


/*
 * Create the new grammar card.
 */

createThereIsGrammarCard();


/* =====================================================
   GRAMMAR CARD SELECTION
===================================================== */

function setupGrammarCards() {

    const cards =
        document.querySelectorAll(
            ".grammar-card"
        );


    cards.forEach(
        function (card) {

            /*
             * Locked cards remain disabled.
             */

            if (
                card.disabled
            ) {

                return;

            }


            /*
             * Existing BE card doesn't have
             * data-grammar in the original HTML.
             *
             * The first available card is BE.
             */

            if (
                !card.dataset.grammar
            ) {

                card.dataset.grammar =
                    "be";

            }


            card.addEventListener(
                "click",
                function () {

                    /*
                     * Remove selected state
                     * from all cards.
                     */

                    cards.forEach(
                        function (item) {

                            item.classList.remove(
                                "selected"
                            );

                        }
                    );


                    /*
                     * Select current card.
                     */

                    card.classList.add(
                        "selected"
                    );


                    selectedGrammar =
                        card.dataset.grammar;

                }
            );

        }
    );


    /*
     * Make sure BE is initially selected.
     */

    const beCard =
        document.querySelector(
            '[data-grammar="be"]'
        );


    if (
        beCard
    ) {

        beCard.classList.add(
            "selected"
        );

        selectedGrammar =
            "be";

    }

}


setupGrammarCards();


/* =====================================================
   GAME STATE
===================================================== */

let questions = [];

let currentQuestion = 0;

let score = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let combo = 0;

let bestCombo = 0;

let positiveCorrect = 0;

let negativeCorrect = 0;

let questionCorrect = 0;

let gameActive = false;


/* =====================================================
   SHUFFLE
===================================================== */

function shuffle(array) {

    const result =
        [...array];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            result[i],
            result[j]
        ] = [
            result[j],
            result[i]
        ];

    }


    return result;

}


/* =====================================================
   THEME
===================================================== */

function loadTheme() {

    const saved =
        localStorage.getItem(
            "grammarBattleTheme"
        );


    if (
        saved === "light"
    ) {

        document.body.classList.add(
            "light-mode"
        );

        themeToggle.textContent =
            "🌙";

    } else {

        themeToggle.textContent =
            "☀️";

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
            "grammarBattleTheme",
            isLight
                ? "light"
                : "dark"
        );


        themeToggle.textContent =
            isLight
                ? "🌙"
                : "☀️";

    }
);


loadTheme();


/* =====================================================
   START BATTLE
===================================================== */

startBattleButton.addEventListener(
    "click",
    function () {

        /*
         * THERE IS / THERE ARE
         * opens the separate game.
         *
         * This path is relative to the current
         * Grammar Battle folder.
         */

        if (
            selectedGrammar ===
            "there-is"
        ) {

            window.location.href =
                "../grammar-there-is/index.html";

            return;

        }


        /*
         * BE continues to use the current
         * built-in Grammar Battle.
         */

        startBattle();

    }
);


/* =====================================================
   RETRY
===================================================== */

retryButton.addEventListener(
    "click",
    startBattle
);


/* =====================================================
   CHOOSE GRAMMAR
===================================================== */

grammarButton.addEventListener(
    "click",
    function () {

        resultScreen.classList.add(
            "hidden"
        );

        targetScreen.classList.remove(
            "hidden"
        );

    }
);


/* =====================================================
   START BE BATTLE
===================================================== */

function startBattle() {

    questions =
        shuffle(
            questionBank
        );


    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    combo = 0;

    bestCombo = 0;

    positiveCorrect = 0;

    negativeCorrect = 0;

    questionCorrect = 0;

    gameActive = true;


    scoreElement.textContent =
        "0";


    comboElement.textContent =
        "×1";


    questionNumberElement.textContent =
        `1 / ${TOTAL_QUESTIONS}`;


    progressText.textContent =
        `0 / ${TOTAL_QUESTIONS}`;


    progressFill.style.width =
        "0%";


    feedback.textContent =
        "";


    feedback.className =
        "feedback";


    targetScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.add(
        "hidden"
    );


    gameScreen.classList.remove(
        "hidden"
    );


    showQuestion();

}


/* =====================================================
   QUESTION TYPE
===================================================== */

function setQuestionType(
    type
) {

    if (
        type === "positive"
    ) {

        questionType.textContent =
            "COMPLETE THE SENTENCE";

        questionHint.textContent =
            "Choose the correct BE verb.";

        return;

    }


    if (
        type === "negative"
    ) {

        questionType.textContent =
            "MAKE IT NEGATIVE";

        questionHint.textContent =
            "Choose the correct negative form.";

        return;

    }


    questionType.textContent =
        "ANSWER THE QUESTION";

    questionHint.textContent =
        "Choose the best short answer.";

}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    if (
        currentQuestion >=
        questions.length
    ) {

        finishBattle();

        return;

    }


    const question =
        questions[
            currentQuestion
        ];


    setQuestionType(
        question.type
    );


    questionText.innerHTML =
        question.text;


    questionNumberElement.textContent =
        `${currentQuestion + 1} / ${TOTAL_QUESTIONS}`;


    progressText.textContent =
        `${currentQuestion} / ${TOTAL_QUESTIONS}`;


    progressFill.style.width =
        `${(
            currentQuestion /
            TOTAL_QUESTIONS
        ) * 100}%`;


    feedback.textContent =
        "";


    feedback.className =
        "feedback";


    answersContainer.innerHTML =
        "";


    const options =
        shuffle(
            question.options
        );


    options.forEach(
        function (option) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answer-button";


            button.textContent =
                option;


            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        option,
                        question,
                        button
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   CHECK ANSWER
===================================================== */

function checkAnswer(
    selected,
    question,
    selectedButton
) {

    if (
        !gameActive
    ) {

        return;

    }


    document
        .querySelectorAll(
            ".answer-button"
        )
        .forEach(
            function (button) {

                button.disabled =
                    true;

            }
        );


    if (
        selected ===
        question.answer
    ) {

        handleCorrect(
            question,
            selectedButton
        );

    } else {

        handleWrong(
            question,
            selectedButton
        );

    }

}


/* =====================================================
   CORRECT
===================================================== */

function handleCorrect(
    question,
    selectedButton
) {

    correctAnswers++;

    combo++;


    bestCombo =
        Math.max(
            bestCombo,
            combo
        );


    const points =
        10 +
        (
            (combo - 1) *
            5
        );


    score +=
        points;


    selectedButton.classList.add(
        "correct"
    );


    scoreElement.textContent =
        score;


    comboElement.textContent =
        "×" + combo;


    feedback.textContent =
        `✅ Correct! +${points} points`;


    feedback.className =
        "feedback correct";


    if (
        question.type ===
        "positive"
    ) {

        positiveCorrect++;

    }


    if (
        question.type ===
        "negative"
    ) {

        negativeCorrect++;

    }


    if (
        question.type ===
        "question"
    ) {

        questionCorrect++;

    }


    setTimeout(
        function () {

            currentQuestion++;

            showQuestion();

        },
        650
    );

}


/* =====================================================
   WRONG
===================================================== */

function handleWrong(
    question,
    selectedButton
) {

    wrongAnswers++;

    combo =
        0;


    selectedButton.classList.add(
        "wrong"
    );


    comboElement.textContent =
        "×1";


    document
        .querySelectorAll(
            ".answer-button"
        )
        .forEach(
            function (button) {

                if (
                    button.textContent.trim() ===
                    question.answer
                ) {

                    button.classList.add(
                        "correct-answer"
                    );

                }

            }
        );


    feedback.textContent =
        `❌ Correct answer: ${question.answer}`;


    feedback.className =
        "feedback wrong";


    setTimeout(
        function () {

            currentQuestion++;

            showQuestion();

        },
        900
    );

}


/* =====================================================
   FINISH
===================================================== */

function finishBattle() {

    gameActive =
        false;


    const accuracy =
        Math.round(
            (
                correctAnswers /
                TOTAL_QUESTIONS
            ) * 100
        );


    const xp =
        correctAnswers *
        XP_PER_CORRECT;


    finalScore.textContent =
        `${correctAnswers} / ${TOTAL_QUESTIONS}`;


    finalCorrect.textContent =
        correctAnswers;


    finalWrong.textContent =
        wrongAnswers;


    finalAccuracy.textContent =
        accuracy + "%";


    positiveResult.textContent =
        `${positiveCorrect} / 5`;


    negativeResult.textContent =
        `${negativeCorrect} / 5`;


    questionResult.textContent =
        `${questionCorrect} / 5`;


    earnedXP.textContent =
        "+" +
        xp +
        " XP";


    progressText.textContent =
        `${TOTAL_QUESTIONS} / ${TOTAL_QUESTIONS}`;


    progressFill.style.width =
        "100%";


    saveProgress(
        xp
    );


    gameScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.remove(
        "hidden"
    );

}


/* =====================================================
   SAVE PROGRESS
===================================================== */

function saveProgress(
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

        player =
            null;

    }


    if (
        !player
    ) {

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
        player.lastPlayed !==
        today
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
