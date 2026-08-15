/* =====================================================
   LEARNING ARCADE - MAIN SCRIPT
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const arcadeNav =
    document.querySelector(".arcade-nav");

const navLinks =
    document.querySelectorAll(".arcade-nav .nav-link");

const startPlayingButton =
    document.getElementById("startPlayingButton");

const playerButton =
    document.getElementById("playerButton");

const playerModal =
    document.getElementById("playerModal");

const modalClose =
    document.getElementById("modalClose");

const savePlayerButton =
    document.getElementById("savePlayerButton");

const playerNameInput =
    document.getElementById("playerNameInput");


/* =====================================================
   PLAYER DISPLAY ELEMENTS
===================================================== */

const gamesPlayedStat =
    document.getElementById("gamesPlayedStat");

const xpStat =
    document.getElementById("xpStat");

const streakStat =
    document.getElementById("streakStat");

const playerNameStat =
    document.getElementById("playerNameStat");

const profileName =
    document.getElementById("profileName");

const profileMessage =
    document.getElementById("profileMessage");

const profileXP =
    document.getElementById("profileXP");

const profileGames =
    document.getElementById("profileGames");

const profileStreak =
    document.getElementById("profileStreak");

const leaderboardPlayer =
    document.getElementById("leaderboardPlayer");


/* =====================================================
   LOCAL STORAGE KEYS
===================================================== */

const PLAYER_KEY =
    "learningArcadePlayer";

const THEME_KEY =
    "learningArcadeTheme";


/* =====================================================
   DEFAULT PLAYER
===================================================== */

function getDefaultPlayer() {

    return {

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


/* =====================================================
   LOAD PLAYER
===================================================== */

function loadPlayer() {

    try {

        const saved =
            localStorage.getItem(
                PLAYER_KEY
            );


        if (!saved) {
            return getDefaultPlayer();
        }


        const player =
            JSON.parse(saved);


        return {
            ...getDefaultPlayer(),
            ...player
        };

    } catch (error) {

        console.error(
            "Could not load player:",
            error
        );

        return getDefaultPlayer();
    }
}


/* =====================================================
   SAVE PLAYER
===================================================== */

function savePlayer(player) {

    localStorage.setItem(
        PLAYER_KEY,
        JSON.stringify(player)
    );
}


/* =====================================================
   UPDATE PLAYER UI
===================================================== */

function updatePlayerUI() {

    const player =
        loadPlayer();


    const displayName =
        player.name &&
        player.name.trim()
            ? player.name.trim()
            : "Guest Player";


    gamesPlayedStat.textContent =
        Number(
            player.gamesPlayed || 0
        ).toLocaleString();


    xpStat.textContent =
        Number(
            player.xp || 0
        ).toLocaleString();


    streakStat.textContent =
        Number(
            player.streak || 0
        );


    playerNameStat.textContent =
        displayName === "Guest Player"
            ? "Guest"
            : displayName;


    profileName.textContent =
        displayName;


    profileXP.textContent =
        Number(
            player.xp || 0
        ).toLocaleString();


    profileGames.textContent =
        Number(
            player.gamesPlayed || 0
        );


    profileStreak.textContent =
        Number(
            player.streak || 0
        );


    if (
        displayName ===
        "Guest Player"
    ) {

        profileMessage.textContent =
            "Enter your name to start your learning journey.";

    } else {

        profileMessage.textContent =
            "Keep playing and improving your English!";

    }


    if (leaderboardPlayer) {

        leaderboardPlayer.textContent =
            displayName === "Guest Player"
                ? "Your position"
                : displayName;

    }


    if (playerButton) {

        playerButton.textContent =
            displayName === "Guest Player"
                ? "SET PLAYER NAME"
                : "EDIT PLAYER NAME";

    }

}


/* =====================================================
   THEME
===================================================== */

function applyTheme(theme) {

    if (
        theme === "light"
    ) {

        document.body.classList.add(
            "light-mode"
        );

        themeToggle.textContent =
            "🌙";

    } else {

        document.body.classList.remove(
            "light-mode"
        );

        themeToggle.textContent =
            "☀️";
    }

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            THEME_KEY
        );


    if (
        savedTheme === "light"
    ) {

        applyTheme("light");

    } else {

        applyTheme("dark");
    }

}


themeToggle.addEventListener(
    "click",
    function () {

        const lightMode =
            document.body.classList.contains(
                "light-mode"
            );


        const newTheme =
            lightMode
                ? "dark"
                : "light";


        applyTheme(
            newTheme
        );


        localStorage.setItem(
            THEME_KEY,
            newTheme
        );

    }
);


/* =====================================================
   PLAYER MODAL
===================================================== */

function openPlayerModal() {

    const player =
        loadPlayer();


    playerNameInput.value =
        player.name === "Guest Player"
            ? ""
            : player.name;


    playerModal.classList.add(
        "show"
    );


    setTimeout(
        function () {

            playerNameInput.focus();

        },
        100
    );

}


function closePlayerModal() {

    playerModal.classList.remove(
        "show"
    );

}


playerButton.addEventListener(
    "click",
    openPlayerModal
);


modalClose.addEventListener(
    "click",
    closePlayerModal
);


playerModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            playerModal
        ) {

            closePlayerModal();

        }

    }
);


/* =====================================================
   SAVE PLAYER NAME
===================================================== */

function savePlayerName() {

    const name =
        playerNameInput.value.trim();


    if (!name) {

        playerNameInput.focus();

        playerNameInput.classList.add(
            "input-error"
        );


        setTimeout(
            function () {

                playerNameInput.classList.remove(
                    "input-error"
                );

            },
            500
        );


        return;
    }


    const player =
        loadPlayer();


    player.name =
        name;


    savePlayer(
        player
    );


    updatePlayerUI();

    closePlayerModal();

}


savePlayerButton.addEventListener(
    "click",
    savePlayerName
);


/* =====================================================
   ENTER KEY IN NAME FIELD
===================================================== */

playerNameInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Enter"
        ) {

            event.preventDefault();

            savePlayerName();

        }


        if (
            event.key ===
            "Escape"
        ) {

            closePlayerModal();

        }

    }
);


/* =====================================================
   SCROLL TO SECTION
===================================================== */

function scrollToSection(
    sectionId
) {

    const section =
        document.getElementById(
            sectionId
        );


    if (!section) {
        return;
    }


    section.scrollIntoView({
        behavior:
            "smooth",

        block:
            "start"
    });

}


startPlayingButton.addEventListener(
    "click",
    function () {

        scrollToSection(
            "games"
        );

    }
);


/* =====================================================
   NAVIGATION LINKS
===================================================== */

navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                const sectionId =
                    link.dataset.section;


                if (sectionId) {

                    scrollToSection(
                        sectionId
                    );

                }

            }
        );

    }
);


/* =====================================================
   ACTIVE NAVIGATION ON SCROLL
===================================================== */

const trackedSections = [
    "home",
    "games",
    "leaderboard",
    "profile"
];


const sectionObserver =
    new IntersectionObserver(
        function (entries) {

            const visibleSections =
                entries
                    .filter(
                        entry =>
                            entry.isIntersecting
                    )
                    .sort(
                        (
                            a,
                            b
                        ) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );


            if (
                visibleSections.length ===
                0
            ) {
                return;
            }


            const currentId =
                visibleSections[0]
                    .target
                    .id;


            navLinks.forEach(
                function (link) {

                    link.classList.toggle(
                        "active",
                        link.dataset.section ===
                        currentId
                    );

                }
            );

        },
        {
            rootMargin:
                "-20% 0px -55% 0px",

            threshold:
                [
                    0,
                    0.1,
                    0.25,
                    0.5,
                    0.75
                ]
        }
    );


trackedSections.forEach(
    function (sectionId) {

        const section =
            document.getElementById(
                sectionId
            );


        if (section) {

            sectionObserver.observe(
                section
            );

        }

    }
);


/* =====================================================
   NAV SCROLL EFFECT
   12px sustained movement
   + 250ms cooldown
===================================================== */

let lastScrollY =
    window.scrollY;

let direction =
    null;

let directionStartY =
    window.scrollY;

let lastToggleTime =
    0;


const SCROLL_THRESHOLD =
    12;


const NAV_COOLDOWN =
    250;


window.addEventListener(
    "scroll",
    function () {

        if (!arcadeNav) {
            return;
        }


        const currentScrollY =
            window.scrollY;


        /* =============================================
           ALWAYS SHOW FULL NAV NEAR TOP
        ============================================== */

        if (
            currentScrollY <= 20
        ) {

            arcadeNav.classList.remove(
                "nav-scrolled"
            );


            direction =
                null;


            directionStartY =
                currentScrollY;


            lastScrollY =
                currentScrollY;


            return;
        }


        const delta =
            currentScrollY -
            lastScrollY;


        /*
         * Ignore extremely tiny movements.
         */

        if (
            Math.abs(delta) < 1
        ) {

            return;
        }


        const newDirection =
            delta > 0
                ? "down"
                : "up";


        /* =============================================
           DIRECTION CHANGE
        ============================================== */

        if (
            newDirection !==
            direction
        ) {

            direction =
                newDirection;


            directionStartY =
                currentScrollY;
        }


        /* =============================================
           COOLDOWN
        ============================================== */

        const now =
            performance.now();


        const cooldownActive =
            now -
            lastToggleTime <
            NAV_COOLDOWN;


        if (
            cooldownActive
        ) {

            lastScrollY =
                currentScrollY;

            return;
        }


        /* =============================================
           SUSTAINED SCROLL DOWN
        ============================================== */

        if (
            direction === "down" &&

            currentScrollY -
            directionStartY >=
            SCROLL_THRESHOLD
        ) {

            if (
                !arcadeNav.classList.contains(
                    "nav-scrolled"
                )
            ) {

                arcadeNav.classList.add(
                    "nav-scrolled"
                );


                lastToggleTime =
                    now;
            }


            directionStartY =
                currentScrollY;
        }


        /* =============================================
           SUSTAINED SCROLL UP
        ============================================== */

        if (
            direction === "up" &&

            directionStartY -
            currentScrollY >=
            SCROLL_THRESHOLD
        ) {

            if (
                arcadeNav.classList.contains(
                    "nav-scrolled"
                )
            ) {

                arcadeNav.classList.remove(
                    "nav-scrolled"
                );


                lastToggleTime =
                    now;
            }


            directionStartY =
                currentScrollY;
        }


        lastScrollY =
            currentScrollY;

    },
    {
        passive:
            true
    }
);


/* =====================================================
   INITIALIZE
===================================================== */

loadTheme();

updatePlayerUI();
