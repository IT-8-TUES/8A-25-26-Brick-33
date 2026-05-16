const questions = [
    {
        question: "1. Which band released the album \"Abbey Road\"?",
        options: [
            { text: "The Beatles", value: "A" },
            { text: "The Rolling Stones", value: "B" },
            { text: "Pink Floyd", value: "C" },
            { text: "Queen", value: "D" }
        ],
        correct: "A"
    },
    {
        question: "2. What instrument is Louis Armstrong famous for playing?",
        options: [
            { text: "Piano", value: "A" },
            { text: "Trumpet", value: "B" },
            { text: "Saxophone", value: "C" },
            { text: "Guitar", value: "D" }
        ],
        correct: "B"
    },
    {
        question: "3. Which genre is Taylor Swift best known for?",
        options: [
            { text: "Country and pop", value: "A" },
            { text: "Heavy metal", value: "B" },
            { text: "Classical", value: "C" },
            { text: "Jazz", value: "D" }
        ],
        correct: "A"
    },
    {
        question: "4. Which composer wrote \"Symphony No. 9\" also known as the \"Ode to Joy\"?",
        options: [
            { text: "Mozart", value: "A" },
            { text: "Bach", value: "B" },
            { text: "Beethoven", value: "C" },
            { text: "Chopin", value: "D" }
        ],
        correct: "C"
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