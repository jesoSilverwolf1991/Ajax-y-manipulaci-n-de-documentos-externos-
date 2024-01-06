$(document).ready(function() {
 
    loadTasks();
  
   
    window.addTask = function() {
      var newTaskText = $('#new-task').val();
      if (newTaskText.trim() !== '') {
        var newTask = { text: newTaskText, completed: false };
        addTaskToList(newTask);
        saveTasks();
        $('#new-task').val('');
      }
    };
  
    window.toggleTask = function(index) {
      var tasks = getTasks();
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      loadTasks();
    };
  
 
    function loadTasks() {
      var tasks = getTasks();
      var taskList = $('#task-list');
      taskList.empty();
  
      for (var i = 0; i < tasks.length; i++) {
        addTaskToList(tasks[i], i);
      }
    }
  
 
    function addTaskToList(task, index) {
      var taskList = $('#task-list');
      var taskItem = $('<li class="task-item"></li>');
  
      if (task.completed) {
        taskItem.addClass('completed');
      }
  
      taskItem.append($('<span>' + task.text + '</span>'));
      taskItem.append($('<button onclick="toggleTask(' + index + ')">Toggle</button>'));
  
      taskList.append(taskItem);
    }
  

    function getTasks() {
      var tasks = localStorage.getItem('tasks');
      return tasks ? JSON.parse(tasks) : [];
    }
  

    function saveTasks() {
      var tasks = getTasks();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
  