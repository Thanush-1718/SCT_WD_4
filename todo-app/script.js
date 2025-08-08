const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const descInput = document.getElementById("descInput");
const timeInput = document.getElementById("timeInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = taskInput.value.trim();
    const desc = descInput.value.trim();
    const time = timeInput.value;

    if (title === "") return;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <div>
            <strong>${title}</strong><br>
            ${desc ? `<small>${desc}</small><br>` : ""}
            ${time ? `<small>📅 ${new Date(time).toLocaleString()}</small>` : ""}
        </div>
        <div class="task-actions">
            <button onclick="toggleComplete(this)">✅</button>
            <button onclick="editTask(this)">✏️</button>
            <button onclick="deleteTask(this)">🗑️</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    taskForm.reset();
});

function toggleComplete(btn) {
    const task = btn.closest("li");
    task.classList.toggle("completed");
}

function deleteTask(btn) {
    const task = btn.closest("li");
    task.remove();
}

function editTask(btn) {
    const task = btn.closest("li");
    const content = task.querySelector("strong").innerText;
    const desc = task.querySelector("small")?.innerText || "";
    taskInput.value = content;
    descInput.value = desc.includes("📅") ? "" : desc;
    timeInput.value = "";
    task.remove();
}
