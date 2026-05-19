const questions = [
    {
        question: "1. Who is the lead singer of System of a Down?",
        options: [
            { text: "Serj Tankian", value: "A" },
            { text: "Daron Malakian", value: "B" },
            { text: "Kirt Cobain", value: "C" },
            { text: "John Lennon", value: "D" }
        ],
        correct: "A"
    },
    {
        question: "2. Which band released the legendary 1970 heavy metal album 'Paranoid'?",
        options: [
            { text: "Led Zeppelin", value: "A" },
            { text: "Black Sabbath", value: "B" },
            { text: "Deep Purple", value: "C" },
            { text: "Iron Maiden", value: "D" }
        ],
        correct: "B"
    },
    {
        question: "3. Who is the famous mascot of the heavy metal band Iron Maiden?",
        options: [
            { text: "Vic Rattlehead", value: "A" },
            { text: "Murray", value: "B" },
            { text: "Eddie", value: "C" },
            { text: "The Guy", value: "D" }
        ],
        correct: "C"
    },
    {
        question: "4. What was the name of Metallica's debut studio album released in 1983?",
        options: [
            { text: "Ride the Lightning", value: "A" },
            { text: "Master of Puppets", value: "B" },
            { text: "Kill 'Em All", value: "C" },
            { text: "And Justice for All", value: "D" }
        ],
        correct: "C"
    },
    {
        question: "5. Which alternative rock band released the diamond-certified album 'Nevermind' in 1991?",
        options: [
            { text: "Pearl Jam", value: "A" },
            { text: "Soundgarden", value: "B" },
            { text: "Alice in Chains", value: "C" },
            { text: "Nirvana", value: "D" }
        ],
        correct: "D"
    },
    {
        question: "6. Who is the lead guitarist of the hard rock band Guns N' Roses?",
        options: [
            { text: "Slash", value: "A" },
            { text: "Brian May", value: "B" },
            { text: "Kirk Hammett", value: "C" },
            { text: "Angus Young", value: "D" }
        ],
        correct: "A"
    },
    {
        question: "7. Which metal band features members performing in matching jumpsuits and unique horror-themed masks?",
        options: [
            { text: "Mushroomhead", value: "A" },
            { text: "Slipknot", value: "B" },
            { text: "Mudvayne", value: "C" },
            { text: "GWAR", value: "D" }
        ],
        correct: "B"
    },
    {
        question: "8. Legendary frontman Freddie Mercury was the lead singer of which rock band?",
        options: [
            { text: "The Who", value: "A" },
            { text: "Pink Floyd", value: "B" },
            { text: "Queen", value: "C" },
            { text: "The Rolling Stones", value: "D" }
        ],
        correct: "C"
    },
    {
        question: "9. Which progressive rock band is famous for their 1973 concept album 'The Dark Side of the Moon'?",
        options: [
            { text: "Pink Floyd", value: "A" },
            { text: "Rush", value: "B" },
            { text: "Yes", value: "C" },
            { text: "Genesis", value: "D" }
        ],
        correct: "A"
    },
    {
        question: "10. Who is the lead vocalist and primary lyricist for the metal band Tool?",
        options: [
            { text: "Chino Moreno", value: "A" },
            { text: "Maynard James Keenan", value: "B" },
            { text: "Jonathan Davis", value: "C" },
            { text: "Trent Reznor", value: "D" }
        ],
        correct: "B"
    },
    {
        question: "11. Angus Young, known for performing in a schoolboy uniform, is the lead guitarist for which band?",
        options: [
            { text: "Iron Maiden", value: "A" },
            { text: "Def Leppard", value: "B" },
            { text: "Judas Priest", value: "C" },
            { text: "AC/DC", value: "D" }
        ],
        correct: "D"
    },
    {
        question: "12. Jimmy Page and Robert Plant were core members of which seminal rock band?",
        options: [
            { text: "Led Zeppelin", value: "A" },
            { text: "The Doors", value: "B" },
            { text: "Cream", value: "C" },
            { text: "Black Sabbath", value: "D" }
        ],
        correct: "A"
    },
    {
        question: "13. Which American nu-metal band released the massive hit albums 'Hybrid Theory' and 'Meteora'?",
        options: [
            { text: "Korn", value: "A" },
            { text: "Disturbed", value: "B" },
            { text: "Linkin Park", value: "C" },
            { text: "Evanescence", value: "D" }
        ],
        correct: "C"
    },
    {
        question: "14. What is the title of Avenged Sevenfold's 2005 breakthrough album featuring 'Bat Country'?",
        options: [
            { text: "City of Evil", value: "A" },
            { text: "Waking the Fallen", value: "B" },
            { text: "Nightmare", value: "C" },
            { text: "Hail to the King", value: "D" }
        ],
        correct: "A"
    },
    {
        question: "15. Who was the iconic bassist and frontman of the hard rock band Motörhead?",
        options: [
            { text: "Geezer Butler", value: "A" },
            { text: "Lemmy Kilmister", value: "B" },
            { text: "Cliff Burton", value: "C" },
            { text: "Steve Harris", value: "D" }
        ],
        correct: "B"
    },
    {
        question: "16. Which industrial rock band is driven by sole official member Trent Reznor?",
        options: [
            { text: "Rammstein", value: "A" },
            { text: "Ministry", value: "B" },
            { text: "Marilyn Manson", value: "C" },
            { text: "Nine Inch Nails", value: "D" }
        ],
        correct: "D"
    }
];

let currentIndex = 0;
let answers = {};

function showQuestion(index) {
    const q = questions[index];
    const container = document.getElementById('questionContainer');
    
    container.innerHTML = `
        <div class="question">
            <h2>${q.question}</h2>
            <div class="options">
                ${q.options.map(opt => `
                    <label>
                        <input type="radio" name="q" value="${opt.value}" ${answers[index] === opt.value ? 'checked' : ''}> 
                        ${opt.text}
                    </label>
                `).join('')}
            </div>
        </div>
    `;

    const radios = container.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            answers[index] = radio.value;
            document.getElementById('nextBtn').disabled = false;
        });
    });

    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = !answers[index];

    if (index === questions.length - 1) {
        document.getElementById('nextBtn').textContent = 'Submit';
    } else {
        document.getElementById('nextBtn').textContent = 'Next →';
    }
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        showQuestion(currentIndex);
    } else {
        checkAnswers();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion(currentIndex);
    }
});

function checkAnswers() {
    let score = 0;
    questions.forEach((q, i) => {
        if (answers[i] === q.correct) score++;
    });

    
    const result = document.getElementById('result');
    result.style.display = 'block';
    result.textContent = 'You scored ' + score + ' out of ' + questions.length + '.';
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('navigation').style.display = 'none';

  
}


showQuestion(0);