const submit = document.querySelector("#submit");
const clearBtn = document.querySelector("#clear");
const prev = document.querySelector("#prev");
const question = document.querySelector("#questions");
const allOptions = document.querySelectorAll('input[name="answer"]');
const optionEls = [
    document.querySelector("#option1"),
    document.querySelector("#option2"),
    document.querySelector("#option3"),
    document.querySelector("#option4")
];

const Qbox = document.querySelector("#Qbox");
const resultPage = document.querySelector("#resultPage");
const restartBtn = document.querySelector("#restart");

const allQuestions = [
    "Q1. Who is PM of India?",
    "Q2. What color is the sky on a clear day?",
    "Q3. How many legs does a spider have?",
    "Q4. Which animal is famously known as the Ship of the Desert?",
    "Q5. What do bees collect from flowers to make honey?",
    "Q6. How many days are there in a regular (non-leap) year?",
    "Q7. Which planet in our solar system is known as the Red Planet?",
    "Q8. Which is the tallest living land animal on Earth?",
    "Q9. How many letters are there in the English alphabet?",
    "Q10. What is the name of a house made entirely out of ice?"
];

const option1 = ["Narendra Modi", "Green", "4", "Camel", "Water", "300", "Venus", "Giraffe", "22", "Tent"];
const option2 = ["Rahul Gandhi", "Blue", "6", "Horse", "Mud", "350", "Mars", "Elephant", "24", "Igloo"];
const option3 = ["Amit Shah", "Red", "8", "Lion", "Nectar", "365", "Jupiter", "Kangaroo", "26", "Cabin"];
const option4 = ["Yogi Adityanath", "Yellow", "10", "Elephant", "Leaves", "366", "Saturn", "Gorilla", "28", "Castle"];
const allOptionSets = [option1, option2, option3, option4];

const answers = [
    "Narendra Modi", "Blue", "8", "Camel", "Nectar",
    "365", "Mars", "Giraffe", "26", "Igloo"
];

// In-memory state (resets on page reload, which is fine for a quiz)
let currentQuestion = 0;
let userAnswers = new Array(allQuestions.length).fill(null);
let scoreChart = null;

function loadQuestion(idx) {
    question.innerText = allQuestions[idx];

    optionEls.forEach((el, i) => {
        el.innerText = allOptionSets[i][idx];
    });

    allOptions.forEach(radio => { radio.checked = false; });

    if (userAnswers[idx] !== null && userAnswers[idx] !== undefined) {
        allOptions[userAnswers[idx]].checked = true;
    }

    prev.disabled = idx === 0;
    submit.innerText = idx === allQuestions.length - 1 ? "FINISH QUIZ" : "SUBMIT & NEXT";
}

allOptions.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        userAnswers[currentQuestion] = index;
    });
});

prev.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
});

clearBtn.addEventListener("click", () => {
    allOptions.forEach(radio => { radio.checked = false; });
    userAnswers[currentQuestion] = null;
});

submit.addEventListener("click", () => {
    const selected = userAnswers[currentQuestion];

    if (selected === null || selected === undefined) {
        alert("Please select an option before continuing.");
        return;
    }

    if (currentQuestion < allQuestions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        showResults();
    }
});

function showResults() {
    let correct = 0;

    userAnswers.forEach((selectedIndex, qIdx) => {
        if (selectedIndex === null || selectedIndex === undefined) return;
        const selectedText = allOptionSets[selectedIndex][qIdx];
        if (selectedText === answers[qIdx]) correct++;
    });

    const total = allQuestions.length;
    const wrong = total - correct;
    const percent = Math.round((correct / total) * 100);

    document.querySelector("#correctCount").innerText = correct;
    document.querySelector("#wrongCount").innerText = wrong;
    document.querySelector("#scorePercent").innerText = percent + "%";

    Qbox.style.display = "none";
    resultPage.style.display = "flex";

    const ctx = document.querySelector("#scoreChart").getContext("2d");
    if (scoreChart) scoreChart.destroy();

    scoreChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Correct", "Wrong"],
            datasets: [{
                data: [correct, wrong],
                backgroundColor: ["#0284c7", "#f87171"],
                borderWidth: 0
            }]
        },
        options: {
            cutout: "65%",
            plugins: {
                legend: {
                    position: "bottom",
                    labels: { color: "#1e293b", font: { size: 12, weight: "600" } }
                }
            }
        }
    });
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    userAnswers = new Array(allQuestions.length).fill(null);

    resultPage.style.display = "none";
    Qbox.style.display = "flex";

    loadQuestion(0);
});

loadQuestion(0);
