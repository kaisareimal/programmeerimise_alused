document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('toggleSortOrder').addEventListener('click', toggleSortOrder);
document.getElementById('filterAll').addEventListener('click', () => filterTasks('all'));
document.getElementById('filterCompleted').addEventListener('click', () => filterTasks('completed'));
document.getElementById('filterIncomplete').addEventListener('click', () => filterTasks('incomplete'));

let sortOrderAsc = true; // Muutuja sortimisjärjestuse jaoks

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement('li');
    const taskTextNode = document.createElement('span');
    taskTextNode.textContent = taskText;
    taskItem.appendChild(taskTextNode);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        taskTextNode.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });
    taskItem.prepend(checkbox);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Muuda';
    editBtn.addEventListener('click', () => editTask(taskTextNode));
    taskItem.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Kustuta';
    deleteBtn.addEventListener('click', () => taskItem.remove());
    taskItem.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(taskItem);
    taskInput.value = "";
}

function editTask(taskTextNode) {
    const newText = prompt("Muuda ülesannet:", taskTextNode.textContent);
    if (newText) taskTextNode.textContent = newText;
}

function toggleSortOrder() {
    sortOrderAsc = !sortOrderAsc;
    document.getElementById('toggleSortOrder').textContent = sortOrderAsc ? 'Lõpetatud üleval' : 'Lõpetatud all';
    sortTasks();
}

function sortTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.children);

    tasks.sort((a, b) => {
        const aChecked = a.querySelector('input[type="checkbox"]').checked;
        const bChecked = b.querySelector('input[type="checkbox"]').checked;
        return sortOrderAsc ? bChecked - aChecked : aChecked - bChecked;
    });

    taskList.innerHTML = "";
    tasks.forEach(task => taskList.appendChild(task));
}

function filterTasks(filter) {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        const isChecked = task.querySelector('input[type="checkbox"]').checked;
        switch (filter) {
            case 'all':
                task.style.display = '';
                break;
            case 'completed':
                task.style.display = isChecked ? '' : 'none';
                break;
            case 'incomplete':
                task.style.display = isChecked ? 'none' : '';
                break;
        }
    });
}
