/* =========================================
   PLAYER DATA
========================================= */

let player = JSON.parse(
    localStorage.getItem("learningArcadePlayer")
);


/* =========================================
   CREATE DEFAULT PLAYER
========================================= */

if (!player) {

    player = {

        name: "Guest Player",

        xp: 0,

        gamesPlayed: 0,

        streak: 0,

        lastPlayed: null

    };

}


/* =========================================
   SAVE PLAYER
========================================= */

function savePlayer() {

    localStorage.setItem(
        "learningArcadePlayer",
        JSON.stringify(player)
    );

}


/* =========================================
   UPDATE PLAYER UI
========================================= */

function updatePlayerUI() {

    const isGuest =
        player.name === "Guest Player";


    /* Quick stats */

    document.getElementById(
        "gamesPlayedStat"
    ).textContent = player.gamesPlayed;


    document.getElementById(
        "xpStat"
    ).textContent = player.xp;


    document.getElementById(
        "streakStat"
    ).textContent = player.streak;


    document.getElementById(
        "playerNameStat"
    ).textContent = isGuest
        ? "Guest"
        : player.name;


    /* Profile */

    document.getElementById(
        "profileName"
    ).textContent = player.name;


    document.getElementById(
        "profileXP"
    ).textContent = player.xp;


    document.getElementById(
        "profileGames"
    ).textContent = player.gamesPlayed;


    document.getElementById(
        "profileStreak"
    ).textContent = player.streak;


    /* Profile message */

    const profileMessage =
        document.getElementById("profileMessage");


    if (isGuest) {

        profileMessage.textContent =
            "Enter your name to start your learning journey.";

    } else {

        profileMessage.textContent =
            "Keep playing and build your English skills!";

    }


    /* Button */

    const playerButton =
        document.getElementById("playerButton");


    if (isGuest) {

        playerButton.textContent =
            "SET PLAYER NAME";

    } else {

        playerButton.textContent =
            "CHANGE NAME";

    }


    /* Avatar */

    document.getElementById(
        "profileAvatar"
    ).textContent = isGuest
        ? "👤"
        : getPlayerInitial();


    /* Leaderboard */

    document.getElementById(
        "leaderboardPlayer"
    ).textContent = isGuest
        ? "Your position"
        : player.name;

}


/* =========================================
   PLAYER INITIAL
========================================= */

function getPlayerInitial() {

    if (!player.name) {
        return "👤";
    }

    return player.name
        .trim()
        .charAt(0)
        .toUpperCase();

}


/* =========================================
   OPEN PLAYER MODAL
========================================= */

function openPlayerModal() {

    const modal =
        document.getElementById("playerModal");


    const input =
        document.getElementById("playerNameInput");


    input.value =
        player.name === "Guest Player"
            ? ""
            : player.name;


    modal.classList.add("show");


    setTimeout(function () {

        input.focus();

    }, 100);

}


/* =========================================
   CLOSE PLAYER MODAL
========================================= */

function closePlayerModal() {

    document
        .getElementById("playerModal")
        .classList.remove("show");

}


/* =========================================
   SAVE PLAYER NAME
========================================= */

function savePlayerName() {

    const input =
        document.getElementById("playerNameInput");


    const name =
        input.value.trim();


    if (!name) {

        input.focus();

        input.style.borderColor = "#ff5c7a";

        return;

    }


    player.name = name;


    savePlayer();

    updatePlayerUI();

    closePlayerModal();

}


/* =========================================
   ENTER KEY
========================================= */

document
    .getElementById("playerNameInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            savePlayerName();

        }

    });


/* =========================================
   CLOSE MODAL BY CLICKING OUTSIDE
========================================= */

document
    .getElementById("playerModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePlayerModal();

        }

    });


/* =========================================
   SCROLL
========================================= */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   OPEN GAME
========================================= */

function openGame(gameName) {

    if (gameName === "match-rush") {

        alert(
            "Match Rush will be connected here next! 🎮"
        );

    }

}


/* =========================================
   LIGHT / DARK MODE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.textContent = "🌙";

}


themeToggle.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "light-mode"
        );


        const isLight =
            document.body.classList.contains(
                "light-mode"
            );


        if (isLight) {

            themeToggle.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            themeToggle.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

updatePlayerUI();