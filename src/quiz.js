const quizForm = document.querySelector('.quiz-form');
const outputEl = document.querySelector('#output');

const correctAnswers = ['90°', 'right angled'];

function calculateScore(e) {
  e.preventDefault();
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  outputEl.innerText = `Your score is ${score}`;
}

quizForm.addEventListener('submit', calculateScore);
