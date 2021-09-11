const a = document.querySelector('#lengthA');
const b = document.querySelector('#lengthB');
const checkAreaBtn = document.querySelector('#check-hypotenuse-btn');
const hypotenuse = document.querySelector('#output-value');

function calculateArea() {
  const aInCm = Number(a.value);
  const bInCm = Number(b.value);

  if(aInCm && bInCm){
    const res = Math.sqrt(aInCm * aInCm + bInCm * bInCm);
    const hypotenuseValue = res.toFixed(3);
    hypotenuse.innerText = `The length of hypotenuse is ${hypotenuseValue} cm`;
  } else{
    hypotenuse.innerText = 'Please enter both the values!'
  }
}

checkAreaBtn.addEventListener('click', calculateArea);
