import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { Instance } from 'mobx-state-tree';
import { TaskItem } from '../model/Task';

function TaskCard({ task }: { task: Instance<typeof TaskItem> }) {
  return (
    <div
      className={`bg-white p-2 shadow-lg border border-slate-300  overflow-hidden rounded-md cursor-pointer ease-in-out transition-all duration-300 flex justify-between hover:bg-blue-50`}
    >
      <div className="text-slate-700 font-medium flex flex-col gap-1">
        <h2>
          Title: <span>{task?.title}</span>
        </h2>
        <h3 className="text-sm text-slate-500">
          Description: <span>{task?.description}</span>
        </h3>
        <h4 className="text-sm text-slate-500">
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
      <div>
        <button className="p-2 rounded hover:bg-gray-200 ">
          <Pencil1Icon />
        </button>
        <button className="p-2 rounded hover:bg-gray-200">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
