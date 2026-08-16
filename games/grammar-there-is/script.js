const $ = id => document.getElementById(id);

const menuScreen = $('menuScreen');
const practice1Screen = $('practice1Screen');
const practice2Screen = $('practice2Screen');
const practice3Screen = $('practice3Screen');
const completeScreen = $('completeScreen');
const themeToggle = $('themeToggle');

const practice1 = [
    {text:'_____ any free tables in the restaurant?', answer:'Are there'},
    {text:'_____ any elevators. Would you like rooms on the first floor?', answer:"There aren't"},
    {text:"_____ a bathtub in the bathroom. It's very big.", answer:"There's"},
    {text:'_____ a gym? I want to exercise.', answer:'Is there'},
    {text:"_____ a remote control for the TV. Can you ask reception for one?", answer:"There's"},
    {text:'_____ some very ugly pictures in this room.', answer:'There are'},
    {text:'_____ a meeting room in the hotel?', answer:'Is there'},
    {text:'_____ some tables in the yard if you want to eat outside.', answer:'There are'},
    {text:'_____ a parking lot, but we can help you park your car.', answer:"There isn't"},
    {text:'_____ any clean towels?', answer:'Are there'}
];

const p1Options = ["There's", 'There are', 'Is there', 'Are there', "There isn't", "There aren't"];

const practice2 = [
    {text:"There aren't _____ cars in the parking lot.", answer:'any'},
    {text:'There are _____ pillows in the closet.', answer:'some'},
    {text:"There's _____ pool in the spa.", answer:'a'},
    {text:'Are there _____ chairs in the yard?', answer:'any'},
    {text:'Is there _____ TV in the spa?', answer:'a'},
    {text:"There isn't _____ table in the bedroom.", answer:'a'},
    {text:"There aren't _____ windows in my room.", answer:'any'},
    {text:'There are _____ stores in the hotel.', answer:'some'},
    {text:'There are _____ nice T-shirts in the gift shop.', answer:'some'},
    {text:'Are there _____ restaurants in town?', answer:'any'}
];

const p2Options = ['some','any','a'];

const practice3 = [
    {question:'Is there a TV in the room?', image:'tv.jpg', answer:'Yes, there is.', explanation:'Use <strong>there is</strong> because <strong>a TV</strong> is one thing.'},
    {question:'Is there a computer on the desk?', image:'computer.jpg', answer:'Yes, there is.', explanation:'Use <strong>there is</strong> because <strong>a computer</strong> is one thing.'},
    {question:'Are there any books on the shelf?', image:'books.jpg', answer:'Yes, there are.', explanation:'Use <strong>there are</strong> because <strong>books</strong> means more than one.'},
    {question:'Are there any books on the shelf?', image:'no-books.jpg', answer:"No, there aren't.", explanation:'Use <strong>there aren’t</strong> because the plural noun <strong>books</strong> is not there.'},
    {question:'Is there a fridge in the kitchen?', image:'fridge.jpg', answer:'Yes, there is.', explanation:'Use <strong>there is</strong> because <strong>a fridge</strong> is one thing.'},
    {question:'Are there any plates on the table?', image:'plates.jpg', answer:'Yes, there are.', explanation:'Use <strong>there are</strong> because <strong>plates</strong> is plural.'},
    {question:'Are there any chairs in the room?', image:'chairs.jpg', answer:'Yes, there are.', explanation:'Use <strong>there are</strong> because <strong>chairs</strong> is plural.'},
    {question:'Is there a bed in the bedroom?', image:'bed.jpg', answer:'Yes, there is.', explanation:'Use <strong>there is</strong> because <strong>a bed</strong> is one thing.'},
    {question:'Is there a sofa in the room?', image:'no-sofa.jpg', answer:"No, there isn't.", explanation:'Use <strong>there isn’t</strong> because <strong>a sofa</strong> is one thing, but it is not there.'},
    {question:'Are there any flowers on the table?', image:'flowers.jpg', answer:'Yes, there are.', explanation:'Use <strong>there are</strong> because <strong>flowers</strong> is plural.'},
    {question:'Are there any lamps in the room?', image:'lamps.jpg', answer:'Yes, there are.', explanation:'Use <strong>there are</strong> because <strong>lamps</strong> is plural.'},
    {question:'Is there a plant in the bathroom?', image:'no-plant.jpg', answer:"No, there isn't.", explanation:'Use <strong>there isn’t</strong> because <strong>a plant</strong> is one thing, but it is not there.'}
];

let activePractice = null;
let lastPractice = null;
let p3Index = 0;
let p3Score = 0;
let p3Answered = false;

const savedTheme = localStorage.getItem('learningArcadeTheme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const light = document.body.classList.contains('light-mode');
    themeToggle.textContent = light ? '🌙' : '☀️';
    localStorage.setItem('learningArcadeTheme', light ? 'light' : 'dark');
});

// Writes into the same shared profile the homepage and every
// other game use, so There Is / There Are progress shows up
// in the site-wide XP/streak/games-played stats.
function saveArcadeProgress(xp) {
    let player;
    try {
        player = JSON.parse(localStorage.getItem('learningArcadePlayer'));
    } catch (error) {
        player = null;
    }
    if (!player) {
        player = { name: 'Guest Player', xp: 0, gamesPlayed: 0, streak: 0, lastPlayed: null };
    }
    player.xp = Number(player.xp || 0) + xp;
    player.gamesPlayed = Number(player.gamesPlayed || 0) + 1;

    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (player.lastPlayed === today) {
        // already played today, streak unchanged
    } else if (player.lastPlayed === yesterday) {
        player.streak = Number(player.streak || 0) + 1;
        player.lastPlayed = today;
    } else {
        player.streak = 1;
        player.lastPlayed = today;
    }

    try {
        localStorage.setItem('learningArcadePlayer', JSON.stringify(player));
    } catch (error) {
        console.error('Could not save progress:', error);
    }
}

document.querySelectorAll('[data-practice]').forEach(btn => {
    btn.addEventListener('click', () => openPractice(Number(btn.dataset.practice)));
});

document.querySelectorAll('[data-back-menu]').forEach(btn => {
    btn.addEventListener('click', openMenu);
});
$('menuButton').addEventListener('click', openMenu);
$('againButton').addEventListener('click', () => {
    if (lastPractice) openPractice(lastPractice);
});

function hideAll() {
    [menuScreen, practice1Screen, practice2Screen, practice3Screen, completeScreen].forEach(s => s.classList.add('hidden'));
}

function openMenu() {
    hideAll();
    menuScreen.classList.remove('hidden');
    window.scrollTo({top:0,behavior:'smooth'});
}

function openPractice(n) {
    activePractice = n;
    lastPractice = n;
    hideAll();
    if (n === 1) {
        practice1Screen.classList.remove('hidden');
        initDragPractice(1, practice1, p1Options);
    } else if (n === 2) {
        practice2Screen.classList.remove('hidden');
        initDragPractice(2, practice2, p2Options);
    } else {
        practice3Screen.classList.remove('hidden');
        startPractice3();
    }
    window.scrollTo({top:0,behavior:'smooth'});
}

function initDragPractice(n, items, options) {
    const list = $(`p${n}Sentences`);
    const bank = $(`p${n}Bank`);
    const feedback = $(`p${n}Feedback`);
    const count = $(`p${n}Count`);
    list.innerHTML = '';
    bank.innerHTML = '';
    feedback.textContent = '';
    feedback.className = 'practice-feedback';
    count.textContent = '0';

    const tokenPool = {};
    options.forEach(opt => tokenPool[opt] = true);

    items.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'sentence-card';
        const number = document.createElement('div');
        number.className = 'sentence-number';
        number.textContent = i + 1;
        const sentence = document.createElement('div');
        sentence.className = 'sentence-text';
        sentence.innerHTML = item.text.replace('_____', `<span class="drop-zone" data-index="${i}" data-answer="${item.answer}">drop here</span>`);
        card.append(number, sentence);
        list.appendChild(card);
    });

    options.forEach((opt, i) => {
        const chip = document.createElement('div');
        chip.className = 'drag-chip';
        chip.draggable = true;
        chip.textContent = opt;
        chip.dataset.value = opt;
        chip.id = `p${n}-chip-${i}`;
        chip.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', opt);
            e.dataTransfer.effectAllowed = 'copy';
            chip.classList.add('dragging');
        });
        chip.addEventListener('dragend', () => chip.classList.remove('dragging'));
        chip.addEventListener('click', () => {
            bank.querySelectorAll('.drag-chip').forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
        });
        bank.appendChild(chip);
    });

    list.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            fillDropZone(zone, e.dataTransfer.getData('text/plain'), n, items, list, bank, feedback, count);
        });
        zone.addEventListener('click', () => {
            const selected = bank.querySelector('.drag-chip.selected');
            if (!selected) return;
            fillDropZone(zone, selected.dataset.value, n, items, list, bank, feedback, count);
            selected.classList.remove('selected');
        });
    });
}

function fillDropZone(zone, value, n, items, list, bank, feedback, count) {
    if (!value || zone.classList.contains('filled')) return;
    const correct = zone.dataset.answer === value;
    zone.textContent = value;
    zone.classList.add(correct ? 'filled' : 'wrong-fill');
    zone.dataset.value = value;

    const card = zone.closest('.sentence-card');
    if (correct) {
        card.classList.add('completed');
        feedback.textContent = '✓ Correct!';
        feedback.className = 'practice-feedback correct';
        updateDragCount(n, list, count, items.length);
    } else {
        feedback.textContent = `✕ Try again.`;
        feedback.className = 'practice-feedback wrong';
        setTimeout(() => {
            zone.textContent = 'drop here';
            zone.classList.remove('wrong-fill');
            zone.dataset.value = '';
        }, 650);
    }
}

function updateDragCount(n, list, count, total) {
    const done = list.querySelectorAll('.drop-zone.filled').length;
    count.textContent = done;
    if (done === total) {
        const feedback = $(`p${n}Feedback`);
        feedback.innerHTML = '🎉 <strong>Excellent!</strong> Practice complete.';
        feedback.className = 'practice-feedback correct';
        saveArcadeProgress(total * 10);
        setTimeout(() => showComplete(`Practice ${n} complete!`, n === 1 ? 'Great work with There is / There are.' : 'Great work with some, any and a.'), 500);
    }
}

function showComplete(title, text) {
    $('completeTitle').textContent = title;
    $('completeText').textContent = text;
    hideAll();
    completeScreen.classList.remove('hidden');
    window.scrollTo({top:0,behavior:'smooth'});
}

function startPractice3() {
    p3Index = 0;
    p3Score = 0;
    p3Answered = false;
    renderP3();
}

function renderP3() {
    const q = practice3[p3Index];
    p3Answered = false;
    $('p3Current').textContent = p3Index + 1;
    $('p3Image').src = `images/${q.image}`;
    $('p3Image').alt = q.question;
    $('p3Question').textContent = q.question;
    $('p3Feedback').textContent = '';
    $('p3Feedback').className = 'practice-feedback';
    $('p3Explanation').innerHTML = '';
    const opts = ['Yes, there is.','Yes, there are.','No, there isn\'t.','No, there aren\'t.'].sort(() => Math.random() - 0.5);
    const wrap = $('p3Options');
    wrap.innerHTML = '';
    opts.forEach(opt => {
        const b = document.createElement('button');
        b.className = 'picture-option';
        b.type = 'button';
        b.textContent = opt;
        b.addEventListener('click', () => answerP3(b, opt, q));
        wrap.appendChild(b);
    });
}

function answerP3(button, answer, q) {
    if (p3Answered) return;
    p3Answered = true;
    $('p3Options').querySelectorAll('button').forEach(b => b.disabled = true);
    if (answer === q.answer) {
        button.classList.add('correct');
        $('p3Feedback').textContent = '✓ Correct!';
        $('p3Feedback').className = 'practice-feedback correct';
        p3Score++;
    } else {
        button.classList.add('wrong');
        $('p3Options').querySelectorAll('button').forEach(b => {
            if (b.textContent === q.answer) b.classList.add('correct-answer');
        });
        $('p3Feedback').textContent = `✕ The correct answer is ${q.answer}`;
        $('p3Feedback').className = 'practice-feedback wrong';
    }
    $('p3Explanation').innerHTML = `Why? ${q.explanation}`;

    setTimeout(() => {
        nextP3();
    }, 650);
}

function nextP3() {
    if (!p3Answered) return;
    p3Index++;
    if (p3Index >= practice3.length) {
        saveArcadeProgress(p3Score * 10);
        showComplete('Practice 3 complete!', `You got ${p3Score} out of ${practice3.length} picture questions correct.`);
        return;
    }
    renderP3();
}
