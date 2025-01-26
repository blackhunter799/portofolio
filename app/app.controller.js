angular.module('todoApp').controller('TodoController', function () {
    const vm = this;
  
    // Initial tasks
    vm.tasks = [
      { name: 'Learn AngularJS', completed: false },
      { name: 'Build an app', completed: false },
    ];
  
    // Add a new task
    vm.addTask = function () {
      if (vm.newTask) {
        vm.tasks.push({ name: vm.newTask, completed: false });
        vm.newTask = '';
      }
    };
  
    // Toggle task completion
    vm.toggleTask = function (task) {
      task.completed = !task.completed;
    };
  
    // Remove a task
    vm.removeTask = function (task) {
      const index = vm.tasks.indexOf(task);
      if (index > -1) {
        vm.tasks.splice(index, 1);
      }
    };
  });
  