const base = document.querySelector('#base');
const height = document.querySelector('#height');
const checkAreaBtn = document.querySelector('#check-area-btn');
const area = document.querySelector('#output-value');

function calculateArea() {
  const baseInCm = Number(base.value);
  const heightInCm = Number(height.value);
  const areaValue = 0.5 * baseInCm * heightInCm;

  area.innerHTML = `The area of the triangle is ${areaValue} cm<sup>2</sup>`;
}

checkAreaBtn.addEventListener('click', calculateArea);
