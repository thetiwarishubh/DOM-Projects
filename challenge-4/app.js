const input = document.getElementById('taskInput');
const button = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

function updateStats() {
    const tasks = document.querySelectorAll('.task-item');
    const completed = document.querySelectorAll('.task-item.completed');
    totalTasks.textContent = `Total tasks: ${tasks.length}`;
    completedTasks.textContent = `Completed: ${completed.length}`;
    
    // Show/hide empty message
    const emptyMsg = document.querySelector('.empty-list');
    if (tasks.length === 0) {
        if (!emptyMsg) {
            const emptyLi = document.createElement('li');
            emptyLi.className = 'empty-list';
            emptyLi.textContent = 'No tasks yet. Add one above!';
            taskList.appendChild(emptyLi);
        }
    } else if (emptyMsg) {
        emptyMsg.remove();
    }
}

button.addEventListener('click', () => {
    const inputValue = input.value.trim();
    if (inputValue !== '') {
        const li = document.createElement('li');
        li.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'complete-checkbox';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = inputValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-button';
        deleteBtn.textContent = 'Delete';

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        input.value = '';
        updateStats();
    }
});

// Event delegation for delete and checkbox
taskList.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('delete-button')) {
        target.parentElement.remove();
        updateStats();
    }

    if (target.classList.contains('complete-checkbox')) {
        target.parentElement.classList.toggle('completed');
        updateStats();
    }
});
