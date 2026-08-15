/* =====================================================
   GRAMMAR BATTLE
   THERE IS / THERE ARE
===================================================== */


/* =====================================================
   HELPER
===================================================== */

const $ = id => document.getElementById(id);


/* =====================================================
   SCREENS
===================================================== */

const menuScreen =
    $("menuScreen");

const practice1Screen =
    $("practice1Screen");

const practice2Screen =
    $("practice2Screen");

const practice3Screen =
    $("practice3Screen");

const completeScreen =
    $("completeScreen");

const themeToggle =
    $("themeToggle");


/* =====================================================
   PRACTICE 1
===================================================== */

const practice1 = [

    {
        text:
            "_____ any free tables in the restaurant?",
        answer:
            "Are there"
    },

    {
        text:
            "_____ any elevators. Would you like rooms on the first floor?",
        answer:
            "There aren't"
    },

    {
        text:
            "_____ a bathtub in the bathroom. It's very big.",
        answer:
            "There's"
    },

    {
        text:
            "_____ a gym? I want to exercise.",
        answer:
            "Is there"
    },

    {
        text:
            "_____ a remote control for the TV. Can you ask reception for one?",
        answer:
            "There isn't"
    },

    {
        text:
            "_____ some very ugly pictures in this room.",
        answer:
            "There are"
    },

    {
        text:
            "_____ a meeting room in the hotel?",
        answer:
            "Is there"
    },

    {
        text:
            "_____ some tables in the yard if you want to eat outside.",
        answer:
            "There are"
    },

    {
        text:
            "_____ a parking lot, but we can help you park your car.",
        answer:
            "There isn't"
    },

    {
        text:
            "_____ any clean towels?",
        answer:
            "Are there"
    }

];


const p1Options = [
    "There's",
    "There are",
    "Is there",
    "Are there",
    "There isn't",
    "There aren't"
];


/* =====================================================
   PRACTICE 2
===================================================== */

const practice2 = [

    {
        text:
            "There aren't _____ cars in the parking lot.",
        answer:
            "any"
    },

    {
        text:
            "There are _____ pillows in the closet.",
        answer:
            "some"
    },

    {
        text:
            "There's _____ pool in the spa.",
        answer:
            "a"
    },

    {
        text:
            "Are there _____ chairs in the yard?",
        answer:
            "any"
    },

    {
        text:
            "Is there _____ TV in the spa?",
        answer:
            "a"
    },

    {
        text:
            "There isn't _____ table in the bedroom.",
        answer:
            "a"
    },

    {
        text:
            "There aren't _____ windows in my room.",
        answer:
            "any"
    },

    {
        text:
            "There are _____ stores in the hotel.",
        answer:
            "some"
    },

    {
        text:
            "There are _____ nice T-shirts in the gift shop.",
        answer:
            "some"
    },

    {
        text:
            "Are there _____ restaurants in town?",
        answer:
            "any"
    }

];


const p2Options = [
    "some",
    "any",
    "a"
];


/* =====================================================
   PRACTICE 3
===================================================== */

const practice3 = [

    {
        question:
            "Is there a TV in the room?",

        image:
            "tv.jpg",

        answer:
            "Yes, there is.",

        explanation:
            "Use <strong>there is</strong> because <strong>a TV</strong> is one thing."
    },

    {
        question:
            "Is there a computer on the desk?",

        image:
            "computer.jpg",

        answer:
            "Yes, there is.",

        explanation:
            "Use <strong>there is</strong> because <strong>a computer</strong> is one thing."
    },

    {
        question:
            "Are there any books on the shelf?",

        image:
            "books.jpg",

        answer:
            "Yes, there are.",

        explanation:
            "Use <strong>there are</strong> because <strong>books</strong> is plural."
    },

    {
        question:
            "Are there any books on the shelf?",

        image:
            "no-books.jpg",

        answer:
            "No, there aren't.",

        explanation:
            "Use <strong>there aren't</strong> because the plural noun <strong>books</strong> is not there."
    },

    {
        question:
            "Is there a fridge in the kitchen?",

        image:
            "fridge.jpg",

        answer:
            "Yes, there is.",

        explanation:
            "Use <strong>there is</strong> because <strong>a fridge</strong> is one thing."
    },

    {
        question:
            "Are there any plates on the table?",

        image:
            "plates.jpg",

        answer:
            "Yes, there are.",

        explanation:
            "Use <strong>there are</strong> because <strong>plates</strong> is plural."
    },

    {
        question:
            "Are there any chairs in the room?",

        image:
            "chairs.jpg",

        answer:
            "Yes, there are.",

        explanation:
            "Use <strong>there are</strong> because <strong>chairs</strong> is plural."
    },

    {
        question:
            "Is there a bed in the bedroom?",

        image:
            "bed.jpg",

        answer:
            "Yes, there is.",

        explanation:
            "Use <strong>there is</strong> because <strong>a bed</strong> is one thing."
    },

    {
        question:
            "Is there a sofa in the room?",

        image:
            "no-sofa.jpg",

        answer:
            "No, there isn't.",

        explanation:
            "Use <strong>there isn't</strong> because <strong>a sofa</strong> is one thing, but it is not there."
    },

    {
        question:
            "Are there any flowers on the table?",

        image:
            "flowers.jpg",

        answer:
            "Yes, there are.",

        explanation:
            "Use <strong>there are</strong> because <strong>flowers</strong> is plural."
    },

    {
        question:
            "Are there any lamps in the room?",

        image:
            "lamps.jpg",

        answer:
            "Yes, there are.",

        explanation:
            "Use <strong>there are</strong> because <strong>lamps</strong> is plural."
    },

    {
        question:
            "Is there a plant in the bathroom?",

        image:
            "no-plant.jpg",

        answer:
            "No, there isn't.",

        explanation:
            "Use <strong>there isn't</strong> because <strong>a plant</strong> is one thing, but it is not there."
    }

];


/* =====================================================
   STATE
===================================================== */

let activePractice = null;
let lastPractice = null;

let p3Index = 0;
let p3Score = 0;
let p3Answered = false;


/* =====================================================
   PRACTICE 1 / 2 COMPLETION STATE
===================================================== */

let p1Completing = false;
let p2Completing = false;

let p1CompletionTimer = null;
let p2CompletionTimer = null;


/*
 * Every attempt gets a new ID.
 * Old completion callbacks can never
 * complete a newer attempt.
 */

let p1AttemptId = 0;
let p2AttemptId = 0;


/* =====================================================
   THEME
===================================================== */

const savedTheme =
    localStorage.getItem(
        "grammarThereIsTheme"
    );


if (
    savedTheme === "light"
) {

    document.body.classList.add(
        "light-mode"
    );

    themeToggle.textContent =
        "🌙";
}


themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light-mode"
        );

        const light =
            document.body.classList.contains(
                "light-mode"
            );

        themeToggle.textContent =
            light
                ? "🌙"
                : "☀️";

        localStorage.setItem(
            "grammarThereIsTheme",
            light
                ? "light"
                : "dark"
        );

    }
);


/* =====================================================
   MENU BUTTONS
===================================================== */

document
    .querySelectorAll("[data-practice]")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    openPractice(
                        Number(
                            button.dataset.practice
                        )
                    );

                }
            );

        }
    );


document
    .querySelectorAll("[data-back-menu]")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                openMenu
            );

        }
    );


$("menuButton").addEventListener(
    "click",
    openMenu
);


$("againButton").addEventListener(
    "click",
    function () {

        if (lastPractice) {

            openPractice(
                lastPractice
            );

        }

    }
);


/* =====================================================
   SCREEN CONTROL
===================================================== */

function hideAll() {

    [
        menuScreen,
        practice1Screen,
        practice2Screen,
        practice3Screen,
        completeScreen

    ].forEach(
        function (screen) {

            screen.classList.add(
                "hidden"
            );

        }
    );

}


/* =====================================================
   OPEN MENU
===================================================== */

function openMenu() {

    removeP3Toast();


    /*
     * Invalidate any active Practice 1
     * completion transition.
     */

    if (
        activePractice === 1
    ) {

        p1AttemptId++;

        if (
            p1CompletionTimer !== null
        ) {

            clearTimeout(
                p1CompletionTimer
            );

            p1CompletionTimer =
                null;
        }

        p1Completing =
            false;
    }


    /*
     * Invalidate any active Practice 2
     * completion transition.
     */

    if (
        activePractice === 2
    ) {

        p2AttemptId++;

        if (
            p2CompletionTimer !== null
        ) {

            clearTimeout(
                p2CompletionTimer
            );

            p2CompletionTimer =
                null;
        }

        p2Completing =
            false;
    }


    activePractice =
        null;


    hideAll();


    menuScreen.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   OPEN PRACTICE
===================================================== */

function openPractice(number) {

    removeP3Toast();

    activePractice =
        number;

    lastPractice =
        number;


    /* =============================================
       RESET PRACTICE 1
    ============================================== */

    if (
        number === 1
    ) {

        p1AttemptId++;


        if (
            p1CompletionTimer !== null
        ) {

            clearTimeout(
                p1CompletionTimer
            );

            p1CompletionTimer =
                null;
        }


        p1Completing =
            false;

    }


    /* =============================================
       RESET PRACTICE 2
    ============================================== */

    if (
        number === 2
    ) {

        p2AttemptId++;


        if (
            p2CompletionTimer !== null
        ) {

            clearTimeout(
                p2CompletionTimer
            );

            p2CompletionTimer =
                null;
        }


        p2Completing =
            false;

    }


    hideAll();


    if (
        number === 1
    ) {

        practice1Screen.classList.remove(
            "hidden"
        );


        initDragPractice(
            1,
            practice1,
            p1Options
        );

    }


    else if (
        number === 2
    ) {

        practice2Screen.classList.remove(
            "hidden"
        );


        initDragPractice(
            2,
            practice2,
            p2Options
        );

    }


    else {

        practice3Screen.classList.remove(
            "hidden"
        );


        startPractice3();

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   INITIALIZE PRACTICE 1 / 2
===================================================== */

function initDragPractice(
    number,
    items,
    options
) {

    const list =
        $(`p${number}Sentences`);

    const bank =
        $(`p${number}Bank`);

    const feedback =
        $(`p${number}Feedback`);

    const count =
        $(`p${number}Count`);


    /* Reset */

    list.innerHTML =
        "";

    bank.innerHTML =
        "";

    feedback.textContent =
        "";

    feedback.className =
        "practice-feedback";

    count.textContent =
        "0";


    /* =================================================
       CREATE SENTENCES
    ================================================= */

    items.forEach(
        function (item, index) {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "sentence-card";


            const numberEl =
                document.createElement(
                    "div"
                );

            numberEl.className =
                "sentence-number";

            numberEl.textContent =
                index + 1;


            const sentence =
                document.createElement(
                    "div"
                );

            sentence.className =
                "sentence-text";


            sentence.innerHTML =
                item.text.replace(
                    "_____",
                    `
                    <span
                        class="drop-zone"
                        data-index="${index}"
                        data-answer="${item.answer}"
                        data-value=""
                    >
                        drop here
                    </span>
                    `
                );


            card.appendChild(
                numberEl
            );

            card.appendChild(
                sentence
            );

            list.appendChild(
                card
            );

        }
    );


    /* =================================================
       CREATE WORD BANK
    ================================================= */

    options.forEach(
        function (option, index) {

            const chip =
                document.createElement(
                    "button"
                );

            chip.type =
                "button";

            chip.className =
                "drag-chip";

            chip.textContent =
                option;

            chip.dataset.value =
                option;

            chip.draggable =
                true;

            chip.id =
                `p${number}-chip-${index}`;


            /* =========================================
               DESKTOP DRAG
            ========================================== */

            chip.addEventListener(
                "dragstart",
                function (event) {

                    event.dataTransfer.effectAllowed =
                        "copy";

                    event.dataTransfer.setData(
                        "text/plain",
                        option
                    );

                    chip.classList.add(
                        "dragging"
                    );

                }
            );


            chip.addEventListener(
                "dragend",
                function () {

                    chip.classList.remove(
                        "dragging"
                    );

                }
            );


            /* =========================================
               MOBILE / TOUCH TAP
            ========================================== */

            chip.addEventListener(
                "pointerup",
                function (event) {

                    if (
                        event.pointerType !== "touch" &&
                        event.pointerType !== "pen"
                    ) {

                        return;
                    }


                    bank
                        .querySelectorAll(
                            ".drag-chip"
                        )
                        .forEach(
                            function (item) {

                                item.classList.remove(
                                    "selected"
                                );

                            }
                        );


                    chip.classList.add(
                        "selected"
                    );

                }
            );


            bank.appendChild(
                chip
            );

        }
    );


    /* =================================================
       DROP ZONES
    ================================================= */

    list
        .querySelectorAll(
            ".drop-zone"
        )
        .forEach(
            function (zone) {


                /* =================================
                   DESKTOP DRAG OVER
                ================================== */

                zone.addEventListener(
                    "dragover",
                    function (event) {

                        event.preventDefault();

                        zone.classList.add(
                            "drag-over"
                        );

                        event.dataTransfer.dropEffect =
                            "copy";

                    }
                );


                /* =================================
                   DESKTOP DRAG LEAVE
                ================================== */

                zone.addEventListener(
                    "dragleave",
                    function () {

                        zone.classList.remove(
                            "drag-over"
                        );

                    }
                );


                /* =================================
                   DESKTOP DROP
                ================================== */

                zone.addEventListener(
                    "drop",
                    function (event) {

                        event.preventDefault();

                        zone.classList.remove(
                            "drag-over"
                        );


                        const draggedValue =
                            event.dataTransfer.getData(
                                "text/plain"
                            );


                        if (!draggedValue) {

                            return;
                        }


                        /*
                         * If occupied, clear the
                         * old answer first.
                         */

                        if (
                            zone.classList.contains(
                                "filled"
                            ) ||
                            zone.classList.contains(
                                "wrong-fill"
                            )
                        ) {

                            clearDropZoneToBank(
                                zone,
                                number,
                                bank,
                                feedback,
                                list,
                                count,
                                items.length
                            );

                        }


                        /*
                         * Then place the newly
                         * dragged value.
                         */

                        fillDropZone(
                            zone,
                            draggedValue,
                            number,
                            items,
                            list,
                            bank,
                            feedback,
                            count
                        );

                    }
                );


                /* =================================
                   MOBILE / TOUCH
                ================================== */

                zone.addEventListener(
                    "pointerup",
                    function (event) {

                        if (
                            event.pointerType !== "touch" &&
                            event.pointerType !== "pen"
                        ) {

                            return;
                        }


                        /* Occupied = return to bank */

                        if (
                            zone.classList.contains(
                                "filled"
                            ) ||
                            zone.classList.contains(
                                "wrong-fill"
                            )
                        ) {

                            clearDropZoneToBank(
                                zone,
                                number,
                                bank,
                                feedback,
                                list,
                                count,
                                items.length
                            );

                            return;
                        }


                        /* Empty = tap-to-fill */

                        const selected =
                            bank.querySelector(
                                ".drag-chip.selected"
                            );


                        if (!selected) {

                            return;
                        }


                        fillDropZone(
                            zone,
                            selected.dataset.value,
                            number,
                            items,
                            list,
                            bank,
                            feedback,
                            count
                        );


                        selected.classList.remove(
                            "selected"
                        );

                    }
                );

            }
        );

}


/* =====================================================
   FILL DROP ZONE
===================================================== */

function fillDropZone(
    zone,
    value,
    number,
    items,
    list,
    bank,
    feedback,
    count
) {

    /* Ignore during completion */

    if (
        (number === 1 && p1Completing) ||
        (number === 2 && p2Completing)
    ) {

        return;
    }


    if (!value) {

        return;
    }


    /*
     * Correctly filled zones cannot be overwritten
     * unless they were explicitly cleared first.
     */

    if (
        zone.classList.contains(
            "filled"
        )
    ) {

        return;
    }


    /*
     * Cancel any pending wrong-answer timeout.
     */

    if (
        zone._wrongTimeout
    ) {

        clearTimeout(
            zone._wrongTimeout
        );

        zone._wrongTimeout =
            null;
    }


    const correct =
        zone.dataset.answer ===
        value;


    zone.dataset.value =
        value;

    zone.textContent =
        value;


    zone.classList.remove(
        "filled",
        "wrong-fill"
    );


    const card =
        zone.closest(
            ".sentence-card"
        );


    /* =================================================
       CORRECT
    ================================================== */

    if (correct) {

        zone.classList.add(
            "filled"
        );


        if (card) {

            card.classList.add(
                "completed"
            );

        }


        feedback.textContent =
            "✓ Correct!";


        feedback.className =
            "practice-feedback correct";


        updateDragCount(
            number,
            list,
            count,
            items.length
        );


        return;
    }


    /* =================================================
       WRONG
    ================================================== */

    zone.classList.add(
        "wrong-fill"
    );


    if (card) {

        card.classList.remove(
            "completed"
        );

    }


    feedback.textContent =
        "✕ Try again.";


    feedback.className =
        "practice-feedback wrong";


    /*
     * Keep incorrect answer visible briefly.
     * A tap or replacement drop can cancel it.
     */

    zone._wrongTimeout =
        setTimeout(
            function () {

                zone._wrongTimeout =
                    null;


                zone.textContent =
                    "drop here";

                zone.dataset.value =
                    "";


                zone.classList.remove(
                    "wrong-fill"
                );


                if (card) {

                    card.classList.remove(
                        "completed"
                    );

                }

            },
            650
        );

}


/* =====================================================
   CLEAR OCCUPIED DROP ZONE
   Original bank chip remains in bank.
===================================================== */

function clearDropZoneToBank(
    zone,
    number,
    bank,
    feedback,
    list,
    count,
    total
) {

    if (
        (number === 1 && p1Completing) ||
        (number === 2 && p2Completing)
    ) {

        return;
    }


    const oldValue =
        zone.dataset.value;


    if (!oldValue) {

        return;
    }


    /* Cancel wrong-answer timer */

    if (
        zone._wrongTimeout
    ) {

        clearTimeout(
            zone._wrongTimeout
        );

        zone._wrongTimeout =
            null;
    }


    /* Clear zone */

    zone.textContent =
        "drop here";

    zone.dataset.value =
        "";


    zone.classList.remove(
        "filled",
        "wrong-fill"
    );


    /* Reset sentence */

    const card =
        zone.closest(
            ".sentence-card"
        );


    if (card) {

        card.classList.remove(
            "completed"
        );

    }


    /*
     * The original chip was never removed
     * from the bank, so simply highlight it briefly.
     */

    const originalChip =
        Array.from(
            bank.querySelectorAll(
                ".drag-chip"
            )
        ).find(
            function (chip) {

                return (
                    chip.dataset.value ===
                    oldValue
                );

            }
        );


    if (originalChip) {

        originalChip.classList.remove(
            "selected"
        );

        originalChip.classList.add(
            "returned"
        );


        setTimeout(
            function () {

                if (
                    originalChip &&
                    originalChip.isConnected
                ) {

                    originalChip.classList.remove(
                        "returned"
                    );

                }

            },
            350
        );

    }


    feedback.textContent =
        "Word returned to the bank.";

    feedback.className =
        "practice-feedback";


    /*
     * Returning a word must never cause
     * completion.
     */

    updateDragCount(
        number,
        list,
        count,
        total,
        false
    );

}


/* =====================================================
   UPDATE DRAG PROGRESS
===================================================== */

function updateDragCount(
    number,
    list,
    count,
    total,
    allowComplete = true
) {

    /*
     * Only correctly filled blanks count.
     */

    const done =
        list.querySelectorAll(
            ".drop-zone.filled"
        ).length;


    count.textContent =
        done;


    /*
     * Returning an answer cannot complete.
     */

    if (!allowComplete) {

        return;
    }


    if (
        done !== total
    ) {

        return;
    }


    let currentAttemptId =
        null;


    /* =============================================
       PRACTICE 1 LOCK
    ============================================== */

    if (
        number === 1
    ) {

        if (
            p1Completing
        ) {

            return;
        }


        p1Completing =
            true;


        currentAttemptId =
            p1AttemptId;

    }


    /* =============================================
       PRACTICE 2 LOCK
    ============================================== */

    else if (
        number === 2
    ) {

        if (
            p2Completing
        ) {

            return;
        }


        p2Completing =
            true;


        currentAttemptId =
            p2AttemptId;

    }


    else {

        return;
    }


    const feedback =
        $(
            `p${number}Feedback`
        );


    feedback.innerHTML =
        "🎉 <strong>Excellent!</strong> Practice complete.";

    feedback.className =
        "practice-feedback correct";


    /* =============================================
       PRACTICE 1 COMPLETION TIMER
    ============================================== */

    if (
        number === 1
    ) {

        if (
            p1CompletionTimer !== null
        ) {

            clearTimeout(
                p1CompletionTimer
            );

            p1CompletionTimer =
                null;
        }


        p1CompletionTimer =
            setTimeout(
                function () {

                    /*
                     * Only clear the timer reference
                     * when it still belongs to this attempt.
                     */

                    if (
                        currentAttemptId ===
                        p1AttemptId
                    ) {

                        p1CompletionTimer =
                            null;
                    }


                    /*
                     * Stale callback:
                     * a new attempt exists.
                     *
                     * DO NOT reset the new lock.
                     */

                    if (
                        currentAttemptId !==
                        p1AttemptId
                    ) {

                        return;
                    }


                    /*
                     * Same attempt, but Practice 1
                     * is no longer active.
                     *
                     * Safe to unlock.
                     */

                    if (
                        activePractice !==
                        1
                    ) {

                        p1Completing =
                            false;

                        return;
                    }


                    showComplete(
                        "Practice 1 complete!",
                        "Great work with There is / There are."
                    );


                    p1Completing =
                        false;

                },
                500
            );

    }


    /* =============================================
       PRACTICE 2 COMPLETION TIMER
    ============================================== */

    if (
        number === 2
    ) {

        if (
            p2CompletionTimer !== null
        ) {

            clearTimeout(
                p2CompletionTimer
            );

            p2CompletionTimer =
                null;
        }


        p2CompletionTimer =
            setTimeout(
                function () {

                    /*
                     * Only clear the timer reference
                     * when it still belongs to this attempt.
                     */

                    if (
                        currentAttemptId ===
                        p2AttemptId
                    ) {

                        p2CompletionTimer =
                            null;
                    }


                    /*
                     * Stale callback:
                     * a new attempt exists.
                     */

                    if (
                        currentAttemptId !==
                        p2AttemptId
                    ) {

                        return;
                    }


                    /*
                     * Same attempt, but Practice 2
                     * is no longer active.
                     */

                    if (
                        activePractice !==
                        2
                    ) {

                        p2Completing =
                            false;

                        return;
                    }


                    showComplete(
                        "Practice 2 complete!",
                        "Great work with some, any and a."
                    );


                    p2Completing =
                        false;

                },
                500
            );

    }

}


/* =====================================================
   COMPLETE SCREEN
===================================================== */

function showComplete(
    title,
    text
) {

    removeP3Toast();


    $("completeTitle").textContent =
        title;


    $("completeText").textContent =
        text;


    hideAll();


    completeScreen.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   PRACTICE 3 START
===================================================== */

function startPractice3() {

    p3Index =
        0;

    p3Score =
        0;

    p3Answered =
        false;

    removeP3Toast();

    renderP3();

}


/* =====================================================
   PRACTICE 3 RENDER
===================================================== */

function renderP3() {

    const question =
        practice3[p3Index];


    p3Answered =
        false;


    $("p3Current").textContent =
        p3Index + 1;


    $("p3Image").src =
        `images/${question.image}`;


    $("p3Image").alt =
        question.question;


    $("p3Question").textContent =
        question.question;


    $("p3Feedback").textContent =
        "";

    $("p3Feedback").className =
        "practice-feedback";


    $("p3Explanation").innerHTML =
        "";


    const options = [

        "Yes, there is.",

        "Yes, there are.",

        "No, there isn't.",

        "No, there aren't."

    ].sort(
        function () {

            return Math.random() - 0.5;

        }
    );


    const wrapper =
        $("p3Options");


    wrapper.innerHTML =
        "";


    options.forEach(
        function (option) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "picture-option";


            button.textContent =
                option;


            button.addEventListener(
                "click",
                function () {

                    answerP3(
                        button,
                        option,
                        question
                    );

                }
            );


            wrapper.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   PRACTICE 3 ANSWER
===================================================== */

function answerP3(
    button,
    answer,
    question
) {

    if (
        p3Answered
    ) {

        return;
    }


    p3Answered =
        true;


    const wrapper =
        $("p3Options");


    const buttons =
        wrapper.querySelectorAll(
            "button"
        );


    buttons.forEach(
        function (item) {

            item.disabled =
                true;

        }
    );


    let isCorrect =
        false;


    if (
        answer ===
        question.answer
    ) {

        isCorrect =
            true;


        p3Score++;


        button.classList.add(
            "correct"
        );


        $("p3Feedback").textContent =
            "✓ Correct!";

        $("p3Feedback").className =
            "practice-feedback correct";

    }

    else {

        button.classList.add(
            "wrong"
        );


        buttons.forEach(
            function (item) {

                if (
                    item.textContent ===
                    question.answer
                ) {

                    item.classList.add(
                        "correct-answer"
                    );

                }

            }
        );


        $("p3Feedback").textContent =
            "✕ Not quite.";

        $("p3Feedback").className =
            "practice-feedback wrong";

    }


    const explanation =
        question.explanation ||
        `The correct answer is ${question.answer}.`;


    $("p3Explanation").innerHTML =
        `Why? ${explanation}`;


    showP3Toast(
        isCorrect,
        question.answer,
        explanation
    );


    /* Immediate next question */

    p3Index++;


    if (
        p3Index >=
        practice3.length
    ) {

        removeP3Toast();


        showComplete(
            "Practice 3 complete!",
            `You got ${p3Score} out of ${practice3.length} picture questions correct.`
        );


        return;
    }


    renderP3();

}


/* =====================================================
   PRACTICE 3 ACCESSIBLE TOAST
===================================================== */

function showP3Toast(
    isCorrect,
    correctAnswer,
    explanation
) {

    removeP3Toast();


    const toast =
        document.createElement(
            "div"
        );


    toast.id =
        "p3FeedbackToast";


    /*
     * One screen-reader live-region mechanism.
     */

    toast.setAttribute(
        "role",
        "status"
    );


    toast.className =
        isCorrect
            ? "p3-toast p3-toast-correct"
            : "p3-toast p3-toast-wrong";


    toast.innerHTML = `

        <div
            class="p3-toast-icon"
            aria-hidden="true"
        >
            ${
                isCorrect
                    ? "✓"
                    : "✕"
            }
        </div>


        <div class="p3-toast-content">

            <strong>
                ${
                    isCorrect
                        ? "Correct!"
                        : "Not quite."
                }
            </strong>


            <span>

                Correct answer:

                <b>
                    ${correctAnswer}
                </b>

            </span>


            <small>
                ${explanation}
            </small>

        </div>


        <button
            type="button"
            class="p3-toast-close"
            aria-label="Dismiss feedback"
            title="Dismiss feedback"
        >
            ×
        </button>

    `;


    document.body.appendChild(
        toast
    );


    const closeButton =
        toast.querySelector(
            ".p3-toast-close"
        );


    closeButton.addEventListener(
        "click",
        function () {

            dismissP3Toast();

        }
    );


    function handleToastKeydown(
        event
    ) {

        if (
            event.key ===
            "Escape"
        ) {

            event.preventDefault();

            dismissP3Toast();

        }

    }


    document.addEventListener(
        "keydown",
        handleToastKeydown
    );


    toast._keydownHandler =
        handleToastKeydown;


    requestAnimationFrame(
        function () {

            toast.classList.add(
                "show"
            );

        }
    );


    setTimeout(
        function () {

            if (
                toast.isConnected
            ) {

                closeButton.focus();

            }

        },
        50
    );


    toast._dismissTimer =
        setTimeout(
            function () {

                dismissP3Toast();

            },
            2200
        );

}


/* =====================================================
   RETURN FOCUS TO NEW PRACTICE 3 QUESTION
===================================================== */

function focusP3Question() {

    const screen =
        $("practice3Screen");


    if (
        !screen ||
        screen.classList.contains(
            "hidden"
        )
    ) {

        return;
    }


    const firstAnswer =
        document.querySelector(
            "#p3Options .picture-option:not(:disabled)"
        );


    if (
        firstAnswer
    ) {

        requestAnimationFrame(
            function () {

                firstAnswer.focus();

            }
        );


        return;
    }


    const question =
        $("p3Question");


    if (!question) {
        return;
    }


    if (
        !question.hasAttribute(
            "tabindex"
        )
    ) {

        question.setAttribute(
            "tabindex",
            "-1"
        );

    }


    requestAnimationFrame(
        function () {

            question.focus();

        }
    );

}


/* =====================================================
   DISMISS P3 TOAST
===================================================== */

function dismissP3Toast() {

    const toast =
        document.getElementById(
            "p3FeedbackToast"
        );


    if (!toast) {

        return;
    }


    if (
        toast._isDismissing
    ) {

        return;
    }


    toast._isDismissing =
        true;


    if (
        toast._dismissTimer
    ) {

        clearTimeout(
            toast._dismissTimer
        );

        toast._dismissTimer =
            null;
    }


    if (
        toast._keydownHandler
    ) {

        document.removeEventListener(
            "keydown",
            toast._keydownHandler
        );

        toast._keydownHandler =
            null;
    }


    toast.classList.remove(
        "show"
    );


    setTimeout(
        function () {

            if (
                toast.isConnected
            ) {

                toast.remove();

            }


            focusP3Question();

        },
        250
    );

}


/* =====================================================
   REMOVE P3 TOAST IMMEDIATELY
===================================================== */

function removeP3Toast() {

    const toast =
        document.getElementById(
            "p3FeedbackToast"
        );


    if (!toast) {

        return;
    }


    if (
        toast._dismissTimer
    ) {

        clearTimeout(
            toast._dismissTimer
        );

        toast._dismissTimer =
            null;
    }


    if (
        toast._keydownHandler
    ) {

        document.removeEventListener(
            "keydown",
            toast._keydownHandler
        );

        toast._keydownHandler =
            null;
    }


    toast.remove();

}