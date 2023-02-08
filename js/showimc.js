import imc from './imc.js';

export default function showImc() {
  const resultInput = document.querySelector('#result');
  const menssageText = document.querySelector("#menssage")
  let resultimc = imc();

  if(!resultimc ===false){
  console.log(`O IMC da pessoa foi de ${resultimc.toFixed(2)}`);
  resultInput.value = resultimc;
  resultInput.classList.remove('error');
  resultInput.value = resultimc.toFixed(2);
  if (resultimc < 18.5) {
    menssageText.textContent=(`O paciente foi considerado em situação MAGREZA`)}
  else if (resultimc < 25) menssageText.textContent=(`O paciente foi considerado em situação considerado NORMAL`);
  else if (resultimc < 30) menssageText.textContent=(`O paciente foi considerado em situação SOBREPESO`);
  else if (resultimc < 40)  menssageText.textContent=(`O IMC foi considerado OBESIDADE`);
  else if (resultimc >= 40)
  menssageText.textContent=(`O paciente foi considerado em situação OBESIDADE GRAVE`);
}else{
  resultInput.value = 'Error';
  resultInput.classList.add('error');
}}
