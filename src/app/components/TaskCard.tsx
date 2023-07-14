import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { Instance, clone } from 'mobx-state-tree';
import { TaskItem, taskState } from '../model/Task';
import * as Dialog from '@radix-ui/react-dialog';
import TaskModal from './TaskModal';
import { useState } from 'react';

function TaskCard({ task }: { task: Instance<typeof TaskItem> }) {
  const [open, setOpen] = useState(false);
  const [cloneTask, setClone] = useState<
    Instance<typeof TaskItem> | undefined
  >();

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
        <Dialog.Root open={open}>
          <Dialog.Trigger
            className="p-2 rounded hover:bg-gray-200"
            onClick={() => {
              setOpen(true);
              const clonedTask = clone(task);
              setClone(clonedTask);
            }}
          >
            <Pencil1Icon />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 flex justify-center items-center">
              <Dialog.Content className=" p-4">
                <TaskModal setOpen={setOpen} initialValue={cloneTask} />
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
        <button
          className="p-2 rounded hover:bg-gray-200"
          onClick={() => taskState.deleteTask(task)}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
