// script.js
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Veuillez entrer une tâche !");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskValue}</span>
        <button onclick="removeTask(this)">Supprimer</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Effacer le champ après ajout
}

function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}
