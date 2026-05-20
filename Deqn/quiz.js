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
        question: "3. Which band released the iconic album 'Follow the Leader' ?",
        options: [
            { text: "Korn", value: "A" },
            { text: "Slipknot", value: "B" },
            { text: "System of a Down", value: "C" },
            { text: "Deftones", value: "D" }
        ],
        correct: "A"
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
        question: "5. Which band released the album 'Dirt' in 1992, featuring the hit single 'Would?'?",
        options: [
            { text: "NIrvana", value: "A" },
            { text: "Alice in Chains", value: "B" },
            { text: "Pearl Jam", value: "C" },
            { text: "Soundgarden", value: "D" }
        ],
        correct: "B"
    },
    {
        question: "6. Who is the singer of the metal band Megadeth?",
        options: [
            { text: "Jonathan Davis", value: "A" },
            { text: "James Hetfield", value: "B" },
            { text: "Jon Bon Jovi", value: "C" },
            { text: "Dave Mustaine", value: "D" }
        ],
        correct: "D"
    },
    {
        question: "7. Which metal band features members performing in matching jumpsuits and unique horror-themed masks?",
        options: [
            { text: "Metallica", value: "A" },
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
        question: "10.From which Metallica album is the famous song 'Nothing Else Matters'?",
        options: [
            { text: "Ride the Lightning", value: "A" },
            { text: "The Black Album", value: "B" },
            { text: "Kill 'Em All", value: "C" },
            { text: "And Justice for All", value: "D" }
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
        question: "14. Which rock band released the album 'Perfect Strangers' ?",
        options: [
            { text: "Deep Purple", value: "A" },
            { text: "Rainbow", value: "B" },
            { text: "Black Sabbath", value: "C" },
            { text: "Led Zeppelin", value: "D" }
        ],
        correct: "A"
    },
    {
        question: "15. Who was the creator of the rock band 'Rainbow' and also a former guitarist of Deep Purple?",
        options: [
            { text: "Ronnie James Dio", value: "A" },
            { text: "Tony Iommi", value: "B" },
            { text: "Ritchie Blackmore", value: "C" },
            { text: "David Gilmour", value: "D" }
        ],
        correct: "C"
    },
    {
        question: "16. Which progressive metal band is known for the album 'Scream Bloody Gore'?",
        options: [
            { text: "Pantera", value: "A" },
            { text: "Cannibal Corpse", value: "B" },
            { text: "Morbid Angel", value: "C" },
            { text: "Death", value: "D" }
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
    });
});

    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = false;

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

    
   

  
}


showQuestion(0);


function checkAnswers() {
    let score = 0;
    let resultsHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;

    resultsHTML = '';

    questions.forEach((q, i) => {

        const correctOption = q.options.find(opt => opt.value === q.correct);
        const userOption = q.options.find(opt => opt.value === answers[i]);

        const isCorrect = answers[i] === q.correct;

        if (isCorrect) score++;

        resultsHTML += `
            <div class="result-question ${isCorrect ? 'correct' : 'wrong'}">
                <h3>${q.question}</h3>

                <p>
                    Your answer:
                    <strong>
                        ${userOption ? userOption.text : 'No answer'}
                    </strong>
                </p>

                <p>
                    Correct answer:
                    <strong>${correctOption.text}</strong>
                </p>

                <p class="status">
                    ${isCorrect ? '✅ Correct' : '❌ Wrong'}
                </p>
            </div>
            <hr>
        `;
    });

    const result = document.getElementById('result');

    result.style.display = 'block';

    result.innerHTML = `
        <h1>Your Score: ${score} / ${questions.length}</h1>
        ${resultsHTML}
    `;

    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('navigation').style.display = 'none';
}