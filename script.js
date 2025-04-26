const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  const li = document.createElement('li');
  li.textContent = taskText;
  const deleteSpan = document.createElement('span');
  deleteSpan.textContent = '✖';
  deleteSpan.addEventListener('click', function(e) {
    e.stopPropagation();
    li.remove();
  });
  li.appendChild(deleteSpan);
  li.addEventListener('click', function() {
    li.classList.toggle('checked');
  });
  taskList.appendChild(li);
  taskInput.value = '';
}
