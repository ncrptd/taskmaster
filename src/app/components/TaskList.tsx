import { taskStore } from '../model/Task';
import TaskCard from './TaskCard';
function TaskList() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h1 className="text-center text-2xl">Tasks</h1>
      <div className="flex gap-2 ">
        <button>
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M220 128a4 4 0 0 1-4 4h-84v84a4 4 0 0 1-8 0v-84H40a4 4 0 0 1 0-8h84V40a4 4 0 0 1 8 0v84h84a4 4 0 0 1 4 4Z"
            />
          </svg>{' '}
          <span>Add Task</span>
        </button>
      </div>
      <div className="p-2 flex flex-col gap-4">
        {taskStore.tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
