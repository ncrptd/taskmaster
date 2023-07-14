import { Task } from '../model/Task';

function TaskCard({ task }: { task: Task }) {
  return (
    <div
      className={`p-2 shadow-lg border border-slate-300 overflow-hidden rounded-md cursor-pointer ease-in-out transition-all duration-300 flex justify-between hover:bg-blue-50`}
    >
      <div className="text-slate-700 font-medium">
        <h2>
          Title: <span>{task?.title}</span>
        </h2>
        <h3>
          Description: <span>{task?.description}</span>
        </h3>
        <h4>
          Status:{' '}
          <span
            className={`font-semibold ${
              task?.status === 'Completed'
                ? 'text-green-600'
                : task?.status === 'To Do'
                ? 'text-orange-500'
                : 'text-purple-500'
            }`}
          >
            {task?.status}
          </span>{' '}
        </h4>
      </div>
      <div className="flex gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="hover:text-slate-500"
        >
          <path
            fill="currentColor"
            d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="hover:text-slate-500"
        >
          <path
            fill="currentColor"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
          />
        </svg>
      </div>
    </div>
  );
}

export default TaskCard;
