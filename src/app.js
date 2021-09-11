const angleInputs = document.querySelectorAll('.angle-input');
const triangleOutput = document.querySelector('#triangle-output');
const checkBtn = document.querySelector('#check-btn');
const hint = document.getElementById('hint');

function checkIfValidTriangle() {
   let sum = 0;
   angleInputs.forEach(angle => {
      if (angle.value) {
         sum = sum + Number(angle.value);
         if (sum === 180) {
            triangleOutput.innerText =
               'You have successfully constructed a triangle!';
            hint.classList.replace('show-hint', 'hide-hint');
         } else {
            triangleOutput.innerText =
               "That doesn't quite form a triangle, try again";
            hint.classList.replace('hide-hint', 'show-hint');
         }
      } else {
         triangleOutput.innerText = 'Please enter all the values!';
      }
   });
}

function showHint() {
   hint.innerText = 'Sum of angles of triangle = 180';
}

checkBtn.addEventListener('click', checkIfValidTriangle);
hint.addEventListener('click', showHint);
