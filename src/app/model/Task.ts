import { Instance, onSnapshot, types } from 'mobx-state-tree';
import { title } from 'process';
import { v4 as uuidv4 } from 'uuid';

const TaskItem = types
  .model({
    title: types.string,
    description: types.string,
    status: types.string,
    id: types.string,
  })
  .actions((self) => ({
    addtitle(newTitle: string) {
      self.title = newTitle;
    },
    addDescription(newDescription: string) {
      self.description = newDescription;
    },
    changeStatus(status: string) {
      self.status = status;
    },
    clearProperties() {
      (self.title = ''),
        (self.description = ''),
        (self.status = ''),
        (self.id = '');
    },
  }));

const Tasks = types
  .model({
    tasks: types.optional(types.array(TaskItem), []),
  })
  .actions((self) => ({
    addTodo(task: Instance<typeof TaskItem>) {
      self.tasks.push({ ...task, id: uuidv4() });
    },
    editTodo(task: Instance<typeof TaskItem>) {
      self.tasks.map((t) => (t.id === task.id ? task : t));
    },
  }));

const taskState = Tasks.create({
  tasks: [
    {
      title: 'Complete math homework',
      description: 'Finish the calculus and linear algebra assignments ',
      status: 'To Do',
      id: '1',
    },
    {
      title: 'Buy birthday gift',
      description: "Get a gift for my friend's birthday party",
      status: 'In Progress',
      id: '2',
    },
    {
      title: 'Schedule dentist appointment',
      description: 'Call the dentist and schedule a check-up',
      status: 'Completed',
      id: '3',
    },
    {
      title: 'Clean bathroom',
      description: 'Scrub the sink, toilet, and shower',
      status: 'Completed',
      id: '4',
    },
    {
      title: 'Practice guitar',
      description: 'Learn to play the new song I just downloaded',
      status: 'Completed',
      id: '5',
    },
  ],
});

const taskItemState = TaskItem.create({
  title: '',
  description: '',
  status: '',
  id: '',
});
export { taskState, taskItemState, TaskItem, Tasks };

onSnapshot(taskState, (snapshot) => {
  console.log(snapshot);
});
