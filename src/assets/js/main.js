var formulario = document.getElementById("formulario");
var tempoDiario = document.getElementById("tempo-diario");
var diasEfetivos = document.getElementById("dias-efetivos");
var diasFerias = document.getElementById("dias-ferias");
var valorProjeto = document.getElementById("valor-projeto");

var resultado = document.getElementById("resultado");
var span = document.createElement("span");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  // Conta para calcular valor da sua hora no projeto

  // By: danielhe4rt

  if (Number(tempoDiario.value) >= 24) {
    alert("O tempo diário não deve ser maior que 24");
  }

  let valorHora =
    valorProjeto.value / (diasEfetivos.value * 4 * tempoDiario.value) +
    diasFerias.value * diasEfetivos.value * tempoDiario.value;

  span.innerHTML = "R$ " + valorHora.toFixed(2);

  resultado.appendChild(span);
});

/*
6 
7 
1 
500
*/
