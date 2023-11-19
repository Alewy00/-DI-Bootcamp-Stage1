export class todo {
  constructor() {
    this.tasks = [];
  }

  addTask(name, complete = false) {
    let task = {
      name,
      complete,
    };
    this.tasks.push(task);
  }

  markTask(name) {
    this.tasks.forEach((task) => {
      if (task.name === name) {
        task.complete = true;
        console.log(`${task.name} is completed`);
      }
    });
  }

  AllTasks() {
    this.tasks.forEach((task) => {
      console.log(task.name);
    });
  }
}
