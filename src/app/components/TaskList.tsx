'use client';
import { PlusIcon } from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';

import { taskState } from '../model/Task';
import { observer } from 'mobx-react-lite';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import { useState } from 'react';

const TaskList = observer(() => {
  const { tasks } = taskState;
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 ">
      <h1 className="text-center text-2xl text-blue-400 mb-4">TaskMaster</h1>

      <div className="p-2 flex flex-col gap-4 ">
        <div>
          <Dialog.Root open={open}>
            <Dialog.Trigger
              className="flex gap-2 items-center justify-center  bg-slate-50 p-2 rounded hover:shadow-lg"
              onClick={() => setOpen(true)}
            >
              <PlusIcon className="w-6 h-6" />
              <span>Add Task</span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 flex justify-center items-center">
                <Dialog.Content className=" p-4">
                  <TaskModal setOpen={setOpen} initialValue={undefined} />
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
});

export default TaskList;
