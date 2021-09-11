const quizForm = document.querySelector('.quiz-form');
const outputEl = document.querySelector('#output');

const correctAnswers = ['90°', 'right angled', 'one right angle', '3, 4, 5', 'Equilateral triangle', '85°', '40°', 'a + b + c', 'no', '45°'];

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
