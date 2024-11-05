const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

function showData(dataArray) {
  const listaPersonas = document.getElementById('lista-personas'); // Asegúrate de tener un elemento con este ID en tu HTML
  for (const item of dataArray) {
    const li = document.createElement('li');
    li.textContent = `${item.name} ${item.lastname}`;
    listaPersonas.appendChild(li);
  }
}

window.onload = function() {
  fetch(DATA_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      showData(data.students); // Cambié para mostrar solo los estudiantes
    })
    .catch(error => {
      console.error('Hubo un problema con la petición Fetch:', error);
    });
};
