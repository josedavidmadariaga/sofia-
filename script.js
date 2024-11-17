document.getElementById("startQuiz").addEventListener("click", function() {
  document.getElementById("quiz").style.display = "block";
});

function checkAnswer() {
  // Verificar las respuestas de la Pregunta 1
  const respuesta1_1 = document.getElementById("respuesta1_1").checked; // Opción A de la Pregunta 1
  const respuesta1_2 = document.getElementById("respuesta1_2").checked; // Opción B de la Pregunta 1
  const respuesta1_3 = document.getElementById("respuesta1_3").checked; // Opción C de la Pregunta 1

  // Verificar las respuestas de la Pregunta 2
  const respuesta2_1 = document.getElementById("respuesta2_1").checked; // Opción A de la Pregunta 2
  const respuesta2_2 = document.getElementById("respuesta2_2").checked; // Opción B de la Pregunta 2
  const respuesta2_3 = document.getElementById("respuesta2_3").checked; // Opción C de la Pregunta 2

  // Verificar las respuestas de la Pregunta 3
  const respuesta3_1 = document.getElementById("respuesta3_1").checked; // Opción A de la Pregunta 3
  const respuesta3_2 = document.getElementById("respuesta3_2").checked; // Opción B de la Pregunta 3
  const respuesta3_3 = document.getElementById("respuesta3_3").checked; // Opción C de la Pregunta 3

  // Verificar las respuestas de la Pregunta 4
  const respuesta4_1 = document.getElementById("respuesta4_1").checked; // Opción A de la Pregunta 4
  const respuesta4_2 = document.getElementById("respuesta4_2").checked; // Opción B de la Pregunta 4
  const respuesta4_3 = document.getElementById("respuesta4_3").checked; // Opción C de la Pregunta 4

  const resultado = document.getElementById("resultado");

  // Comprobar si todas las respuestas son correctas
  if (respuesta1_1 && respuesta2_3 && respuesta3_1 && respuesta4_1) {
    resultado.innerHTML = "¡Correcto! Has respondido correctamente todas las preguntas.";
    resultado.style.color = "green";
  } else if (respuesta1_1 && respuesta2_3 && respuesta3_1) {
    // Correcta la pregunta 1, 2 y 3, pero incorrecta la 4
    resultado.innerHTML = "Correcto en las preguntas 1, 2 y 3, pero incorrecto en la 4. Inténtalo de nuevo.";
    resultado.style.color = "orange";
  } else if (respuesta2_3 && respuesta3_1 && respuesta4_1) {
    // Correcta la pregunta 2, 3 y 4, pero incorrecta la 1
    resultado.innerHTML = "Correcto en las preguntas 2, 3 y 4, pero incorrecto en la 1. Inténtalo de nuevo.";
    resultado.style.color = "orange";
  } else if (respuesta1_1 && respuesta3_1 && respuesta4_1) {
    // Correcta la pregunta 1, 3 y 4, pero incorrecta la 2
    resultado.innerHTML = "Correcto en las preguntas 1, 3 y 4, pero incorrecto en la 2. Inténtalo de nuevo.";
    resultado.style.color = "orange";
  } else {
    // Todas las respuestas incorrectas
    resultado.innerHTML = "Incorrecto. Inténtalo de nuevo.";
    resultado.style.color = "red";
  }
}
