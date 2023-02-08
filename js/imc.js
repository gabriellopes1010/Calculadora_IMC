export default function imc() {
  const weightValue = document.querySelector('#weight');
  const heightValue = document.querySelector('#height');

  let A = weightValue.value;
  let B = heightValue.value;

  return A / ((B * 2) / 100);
}
