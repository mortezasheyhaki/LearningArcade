/* =====================================================
   VIDEO QUEST
===================================================== */


/* =====================================================
   SCREENS
===================================================== */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const levelScreen =
    document.getElementById("levelScreen");

const videoSelectScreen =
    document.getElementById("videoSelectScreen");

const lessonScreen =
    document.getElementById("lessonScreen");


/* =====================================================
   HISTORY
===================================================== */

let screenHistory = [];


/* =====================================================
   SHOW SCREEN
===================================================== */

function showScreen(
    screen,
    saveHistory = true
) {

    const currentScreen =
        document.querySelector(
            ".screen:not(.hidden)"
        );


    if (
        saveHistory &&
        currentScreen &&
        currentScreen !== screen
    ) {

        screenHistory.push(
            currentScreen
        );

    }


    [
        welcomeScreen,
        levelScreen,
        videoSelectScreen,
        lessonScreen
    ].forEach(function (item) {

        if (item) {

            item.classList.add(
                "hidden"
            );

        }

    });


    if (screen) {

        screen.classList.remove(
            "hidden"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   BACK
===================================================== */

function goBack() {

    if (
        screenHistory.length > 0
    ) {

        const previousScreen =
            screenHistory.pop();


        showScreen(
            previousScreen,
            false
        );

    }

    else {

        showScreen(
            welcomeScreen,
            false
        );

    }

}


/* =====================================================
   START
===================================================== */

const startBtn =
    document.getElementById(
        "startBtn"
    );


if (startBtn) {

    startBtn.addEventListener(
        "click",
        function () {

            screenHistory = [];

            showScreen(
                levelScreen
            );

        }
    );

}


/* =====================================================
   BACK BUTTONS
===================================================== */

const backBtn =
    document.getElementById(
        "backBtn"
    );


if (backBtn) {

    backBtn.addEventListener(
        "click",
        goBack
    );

}


const backToLevels =
    document.getElementById(
        "backToLevels"
    );


if (backToLevels) {

    backToLevels.addEventListener(
        "click",
        goBack
    );

}


const backToVideos =
    document.getElementById(
        "backToVideos"
    );


if (backToVideos) {

    backToVideos.addEventListener(
        "click",
        goBack
    );

}


/* =====================================================
   LEVEL SELECTION
===================================================== */

document
    .querySelectorAll(
        ".level-card:not(.coming-soon)"
    )
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                showScreen(
                    videoSelectScreen
                );

            }
        );

    });


/* =====================================================
   VIDEO SELECTION
===================================================== */

document
    .querySelectorAll(
        ".video-card"
    )
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                showScreen(
                    lessonScreen
                );


                setTimeout(
                    updateOpenAccordions,
                    100
                );

            }
        );

    });


/* =====================================================
   ACCORDION
===================================================== */

const accordionHeaders =
    document.querySelectorAll(
        ".accordion-header"
    );


accordionHeaders.forEach(function (header) {

    header.addEventListener(
        "click",
        function () {

            const section =
                this.closest(
                    ".accordion-section"
                );


            if (!section) {
                return;
            }


            const content =
                section.querySelector(
                    ".accordion-content"
                );


            const arrow =
                section.querySelector(
                    ".accordion-arrow"
                );


            const isOpen =
                section.classList.contains(
                    "active"
                );


            if (isOpen) {

                section.classList.remove(
                    "active"
                );


                if (content) {

                    content.style.maxHeight =
                        "0px";

                }


                if (arrow) {

                    arrow.textContent =
                        "+";

                }

            }

            else {

                section.classList.add(
                    "active"
                );


                if (content) {

                    content.style.maxHeight =
                        content.scrollHeight +
                        "px";

                }


                if (arrow) {

                    arrow.textContent =
                        "−";

                }

            }

        }
    );

});


/* =====================================================
   INITIAL VIDEO ACCORDION
===================================================== */

const firstAccordion =
    document.querySelector(
        ".accordion-section.active"
    );


if (firstAccordion) {

    const firstContent =
        firstAccordion.querySelector(
            ".accordion-content"
        );


    if (firstContent) {

        firstContent.style.maxHeight =
            firstContent.scrollHeight +
            "px";

    }

}


/* =====================================================
   ACCORDION HEIGHT
===================================================== */

function updateOpenAccordions() {

    document
        .querySelectorAll(
            ".accordion-section.active"
        )
        .forEach(function (section) {

            const content =
                section.querySelector(
                    ".accordion-content"
                );


            if (content) {

                content.style.maxHeight =
                    content.scrollHeight +
                    "px";

            }

        });

}


/* =====================================================
   VOCABULARY MATCHING
===================================================== */

let selectedWord =
    null;

let matchedPairs =
    0;

const totalPairs =
    5;


const wordButtons =
    document.querySelectorAll(
        ".match-word"
    );


const pictureButtons =
    document.querySelectorAll(
        ".match-picture"
    );


const matchFeedback =
    document.getElementById(
        "matchFeedback"
    );


const matchCount =
    document.getElementById(
        "matchCount"
    );


const matchInstruction =
    document.getElementById(
        "matchInstruction"
    );


/* =====================================================
   SELECT WORD
===================================================== */

wordButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            if (
                this.disabled ||
                this.classList.contains(
                    "matched"
                )
            ) {

                return;

            }


            wordButtons.forEach(
                function (word) {

                    word.classList.remove(
                        "selected"
                    );

                }
            );


            this.classList.add(
                "selected"
            );


            selectedWord =
                this;


            if (matchInstruction) {

                matchInstruction.textContent =
                    'Now choose the picture for "' +
                    this.textContent.trim() +
                    '"';

            }


            if (matchFeedback) {

                matchFeedback.className =
                    "feedback";

                matchFeedback.textContent =
                    "";

            }

        }
    );

});


/* =====================================================
   SELECT PICTURE
===================================================== */

pictureButtons.forEach(function (pictureButton) {

    pictureButton.addEventListener(
        "click",
        function () {

            if (
                this.disabled ||
                this.classList.contains(
                    "matched"
                )
            ) {

                return;

            }


            if (!selectedWord) {

                this.classList.add(
                    "wrong"
                );


                if (matchFeedback) {

                    matchFeedback.className =
                        "feedback wrong-feedback";

                    matchFeedback.textContent =
                        "Choose a word first.";

                }


                setTimeout(
                    () => {

                        this.classList.remove(
                            "wrong"
                        );

                    },
                    500
                );


                return;

            }


            const currentWord =
                selectedWord;


            const wordMatch =
                currentWord.dataset.match;


            const pictureMatch =
                this.dataset.match;


            /* CORRECT */

            if (
                wordMatch ===
                pictureMatch
            ) {

                currentWord.classList.remove(
                    "selected"
                );


                currentWord.classList.add(
                    "matched"
                );


                this.classList.add(
                    "matched"
                );


                currentWord.disabled =
                    true;

                this.disabled =
                    true;


                matchedPairs++;


                if (matchCount) {

                    matchCount.textContent =
                        matchedPairs +
                        " / " +
                        totalPairs;

                }


                if (matchFeedback) {

                    matchFeedback.className =
                        "feedback correct-feedback";

                    matchFeedback.textContent =
                        "✓ Correct! Nice match!";

                }


                if (matchInstruction) {

                    matchInstruction.textContent =
                        matchedPairs === totalPairs
                            ? "🎉 All five matched!"
                            : "Choose another word.";

                }


                selectedWord =
                    null;


                if (
                    matchedPairs ===
                    totalPairs
                ) {

                    setTimeout(
                        function () {

                            if (matchFeedback) {

                                matchFeedback.className =
                                    "feedback correct-feedback";

                                matchFeedback.textContent =
                                    "🏆 Excellent! You matched all 5 pictures!";

                            }

                        },
                        350
                    );

                }

            }


            /* WRONG */

            else {

                currentWord.classList.add(
                    "wrong"
                );


                this.classList.add(
                    "wrong"
                );


                if (matchFeedback) {

                    matchFeedback.className =
                        "feedback wrong-feedback";

                    matchFeedback.textContent =
                        "✕ Not the right picture. Try again!";

                }


                setTimeout(
                    function () {

                        currentWord.classList.remove(
                            "wrong"
                        );

                        pictureButton.classList.remove(
                            "wrong"
                        );


                        currentWord.classList.add(
                            "selected"
                        );

                    },
                    600
                );

            }

        }
    );

});


/* =====================================================
   QUIZ
===================================================== */

let quizScore =
    0;


const quizScoreElement =
    document.getElementById(
        "quizScore"
    );


const quizFeedback =
    document.getElementById(
        "quizFeedback"
    );


const quizMessage =
    document.getElementById(
        "quizMessage"
    );


const quizComplete =
    document.getElementById(
        "quizComplete"
    );


const finalQuizScore =
    document.getElementById(
        "finalQuizScore"
    );


document
    .querySelectorAll(
        ".answer-btn"
    )
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const questionCard =
                    this.closest(
                        ".question-card"
                    );


                if (!questionCard) {
                    return;
                }


                if (
                    questionCard.classList.contains(
                        "answered"
                    )
                ) {

                    return;

                }


                const isCorrect =
                    this.dataset.correct ===
                    "true";


                const allButtons =
                    questionCard.querySelectorAll(
                        ".answer-btn"
                    );


                /* CORRECT */

                if (isCorrect) {

                    this.classList.add(
                        "correct"
                    );


                    questionCard.classList.add(
                        "answered"
                    );


                    quizScore++;


                    if (quizScoreElement) {

                        quizScoreElement.textContent =
                            quizScore;

                    }


                    if (quizMessage) {

                        quizMessage.textContent =
                            "✓ Correct!";

                        quizMessage.style.color =
                            "#4ade80";

                    }


                    if (quizFeedback) {

                        quizFeedback.className =
                            "quiz-feedback correct-feedback";

                        quizFeedback.textContent =
                            "Great job! 🎉";

                    }


                    allButtons.forEach(
                        function (answerButton) {

                            answerButton.disabled =
                                true;

                        }
                    );


                    const completed =
                        document.querySelectorAll(
                            ".question-card.answered"
                        ).length;


                    if (
                        completed === 5
                    ) {

                        if (finalQuizScore) {

                            finalQuizScore.textContent =
                                quizScore;

                        }


                        if (quizComplete) {

                            quizComplete.classList.remove(
                                "hidden"
                            );

                        }


                        saveArcadeProgress(
                            quizScore * 10
                        );

                    }

                }


                /* WRONG */

                else {

                    this.classList.add(
                        "wrong"
                    );


                    if (quizMessage) {

                        quizMessage.textContent =
                            "✕ Try again";

                        quizMessage.style.color =
                            "#f87171";

                    }


                    if (quizFeedback) {

                        quizFeedback.className =
                            "quiz-feedback wrong-feedback";

                        quizFeedback.textContent =
                            "Not quite. Try again!";

                    }


                    setTimeout(
                        () => {

                            this.classList.remove(
                                "wrong"
                            );


                            if (quizMessage) {

                                quizMessage.textContent =
                                    "choose the best answer";

                                quizMessage.style.color =
                                    "";

                            }

                        },
                        900
                    );

                }


                updateOpenAccordions();

            }
        );

    });


/* =====================================================
   SPEAK & WRITE
===================================================== */

const speakAnswer =
    document.getElementById(
        "speakAnswer"
    );


const wordCount =
    document.getElementById(
        "wordCount"
    );


const clearAnswer =
    document.getElementById(
        "clearAnswer"
    );


const submitAnswer =
    document.getElementById(
        "submitAnswer"
    );


const speakFeedback =
    document.getElementById(
        "speakFeedback"
    );


const writingArea =
    document.getElementById(
        "writingArea"
    );


const answerResult =
    document.getElementById(
        "answerResult"
    );


const submittedText =
    document.getElementById(
        "submittedText"
    );


const resultMessage =
    document.getElementById(
        "resultMessage"
    );


const editAnswer =
    document.getElementById(
        "editAnswer"
    );


const aResult =
    document.getElementById(
        "aResult"
    );


const anResult =
    document.getElementById(
        "anResult"
    );


const theResult =
    document.getElementById(
        "theResult"
    );


/* =====================================================
   WORD COUNT
===================================================== */

if (
    speakAnswer &&
    wordCount
) {

    speakAnswer.addEventListener(
        "input",
        function () {

            const text =
                this.value.trim();


            if (!text) {

                wordCount.textContent =
                    "0 words";

                return;

            }


            const words =
                text
                    .split(/\s+/)
                    .filter(Boolean);


            wordCount.textContent =
                words.length +
                (
                    words.length === 1
                        ? " word"
                        : " words"
                );

        }
    );

}


/* =====================================================
   ARTICLE CHECK
===================================================== */

function checkArticles(text) {

    const lowerText =
        text.toLowerCase();


    return {

        a:
            /\ba\b/.test(
                lowerText
            ),

        an:
            /\ban\b/.test(
                lowerText
            ),

        the:
            /\bthe\b/.test(
                lowerText
            )

    };

}


/* =====================================================
   UPDATE ARTICLE RESULT
===================================================== */

function updateArticleResult(
    element,
    found
) {

    if (!element) {
        return;
    }


    element.classList.remove(
        "found",
        "not-found"
    );


    const status =
        element.querySelector(
            "strong"
        );


    if (found) {

        element.classList.add(
            "found"
        );


        if (status) {

            status.textContent =
                "✓ used";

        }

    }

    else {

        element.classList.add(
            "not-found"
        );


        if (status) {

            status.textContent =
                "— not used";

        }

    }

}


/* =====================================================
   SUBMIT
===================================================== */

if (
    submitAnswer &&
    speakAnswer
) {

    submitAnswer.addEventListener(
        "click",
        function () {

            const answer =
                speakAnswer.value.trim();


            /* EMPTY */

            if (!answer) {

                if (speakFeedback) {

                    speakFeedback.className =
                        "speak-feedback speak-error";

                    speakFeedback.textContent =
                        "Please write your answer first.";

                }


                speakAnswer.focus();

                return;

            }


            /* WORD COUNT */

            const words =
                answer
                    .split(/\s+/)
                    .filter(Boolean);


            /* SHOW ANSWER */

            if (submittedText) {

                submittedText.textContent =
                    answer;

            }


            /* ARTICLE CHECK */

            const articles =
                checkArticles(
                    answer
                );


            updateArticleResult(
                aResult,
                articles.a
            );


            updateArticleResult(
                anResult,
                articles.an
            );


            updateArticleResult(
                theResult,
                articles.the
            );


            /* RESULT MESSAGE */

            let message =
                "Nice work! You wrote " +
                words.length +
                (
                    words.length === 1
                        ? " word."
                        : " words."
                );


            const missing = [];


            if (!articles.a) {
                missing.push("a");
            }


            if (!articles.an) {
                missing.push("an");
            }


            if (!articles.the) {
                missing.push("the");
            }


            if (missing.length === 0) {

                message +=
                    " 🎉 You used all three articles: a, an and the.";

            }

            else {

                message +=
                    " Try to use " +
                    missing.join(", ") +
                    " too.";

            }


            if (resultMessage) {

                resultMessage.textContent =
                    message;

            }


            /* HIDE WRITING AREA */

            if (writingArea) {

                writingArea.classList.add(
                    "hidden"
                );

            }


            /* SHOW RESULT */

            if (answerResult) {

                answerResult.classList.remove(
                    "hidden"
                );

            }


            /* FEEDBACK */

            if (speakFeedback) {

                speakFeedback.className =
                    "speak-feedback speak-success";

                speakFeedback.textContent =
                    "✓ Answer submitted!";

            }


            updateOpenAccordions();

        }
    );

}


/* =====================================================
   EDIT
===================================================== */

if (
    editAnswer &&
    speakAnswer
) {

    editAnswer.addEventListener(
        "click",
        function () {

            if (answerResult) {

                answerResult.classList.add(
                    "hidden"
                );

            }


            if (writingArea) {

                writingArea.classList.remove(
                    "hidden"
                );

            }


            if (speakFeedback) {

                speakFeedback.className =
                    "speak-feedback";

                speakFeedback.textContent =
                    "";

            }


            speakAnswer.focus();


            updateOpenAccordions();

        }
    );

}


/* =====================================================
   CLEAR
===================================================== */

if (
    clearAnswer &&
    speakAnswer
) {

    clearAnswer.addEventListener(
        "click",
        function () {

            speakAnswer.value =
                "";


            if (wordCount) {

                wordCount.textContent =
                    "0 words";

            }


            if (speakFeedback) {

                speakFeedback.className =
                    "speak-feedback";

                speakFeedback.textContent =
                    "";

            }


            if (answerResult) {

                answerResult.classList.add(
                    "hidden"
                );

            }


            if (writingArea) {

                writingArea.classList.remove(
                    "hidden"
                );

            }


            speakAnswer.focus();


            updateOpenAccordions();

        }
    );

}


/* =====================================================
   DARK / LIGHT
===================================================== */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


function updateThemeButton() {

    if (!themeBtn) {
        return;
    }


    const isLight =
        document.body.classList.contains(
            "light-mode"
        );


    if (isLight) {

        themeBtn.textContent =
            "🌙";

        themeBtn.title =
            "Switch to dark mode";

    }

    else {

        themeBtn.textContent =
            "☀️";

        themeBtn.title =
            "Switch to light mode";

    }

}


let savedTheme = null;

try {

    savedTheme =
        localStorage.getItem(
            "learningArcadeTheme"
        );

} catch (error) {

    console.error(
        "Could not load theme:",
        error
    );

    savedTheme = null;

}


if (
    savedTheme === "light"
) {

    document.body.classList.add(
        "light-mode"
    );

}


updateThemeButton();


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-mode"
            );


            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            try {

                localStorage.setItem(
                    "learningArcadeTheme",
                    isLight
                        ? "light"
                        : "dark"
                );

            } catch (error) {

                console.error(
                    "Could not save theme:",
                    error
                );

            }


            updateThemeButton();

        }
    );

}


/* =====================================================
   SAVE ARCADE PLAYER DATA
   Writes into the same shared profile the homepage,
   Match Rush, Multiple Choice, and Grammar Battle use,
   so Video Quest progress shows up in the site-wide
   XP/streak/games-played stats.
===================================================== */

function saveArcadeProgress(xp) {

    let player;


    try {

        player =
            JSON.parse(
                localStorage.getItem(
                    "learningArcadePlayer"
                )
            );

    } catch (error) {

        player = null;

    }


    if (!player) {

        player = {

            name: "Guest Player",

            xp: 0,

            gamesPlayed: 0,

            streak: 0,

            lastPlayed: null

        };

    }


    player.xp =
        Number(player.xp || 0) +
        xp;


    player.gamesPlayed =
        Number(
            player.gamesPlayed || 0
        ) + 1;


    const today =
        new Date()
            .toISOString()
            .split("T")[0];

    const yesterday =
        new Date(
            Date.now() - 86400000
        )
            .toISOString()
            .split("T")[0];


    if (
        player.lastPlayed === today
    ) {

        // already played today, streak unchanged

    } else if (
        player.lastPlayed === yesterday
    ) {

        player.streak =
            Number(
                player.streak || 0
            ) + 1;

        player.lastPlayed =
            today;

    } else {

        player.streak = 1;

        player.lastPlayed =
            today;

    }


    try {

        localStorage.setItem(
            "learningArcadePlayer",
            JSON.stringify(player)
        );

    } catch (error) {

        console.error(
            "Could not save progress:",
            error
        );

    }

}


/* =====================================================
   INITIAL SCREEN
===================================================== */

showScreen(
    welcomeScreen,
    false
);
