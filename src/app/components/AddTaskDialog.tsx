import { Cross1Icon } from '@radix-ui/react-icons';
import { taskItemState, taskState } from '../model/Task';
import { observer } from 'mobx-react-lite';

const AddTaskDialog = observer((props: { setOpen: any }) => {
  {
    const task = taskItemState;

    return (
      <form
        className="bg-white p-4 rounded-lg flex flex-col gap-4 text-sm relative"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            task.title === '' ||
            task.description === '' ||
            task.status === ''
          ) {
            return;
          } else {
            taskState.addTask(task);
            props.setOpen(false);
            task.clearProperties();
          }
        }}
      >
        <Cross1Icon
          className="absolute top-5 right-5 cursor-pointer hover:text-red-500"
          onClick={() => {
            taskItemState.clearProperties();
            props.setOpen(false);
          }}
        />
        <h2>Add Task</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            placeholder="Title"
            className="p-2 border border-slate-400"
            value={task?.title}
            onChange={(e) => task.addtitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col  gap-1">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            placeholder="Description"
            id="
            Description"
            className="p-2 border border-slate-400"
            value={task?.description}
            onChange={(e) => {
              task?.addDescription(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Status</p>

          <div className="flex gap-2">
            <div className="flex gap-2 bg-orange-100 px-2 py-1 justify-center items-center flex-wrap">
              <label htmlFor="To Do" className="cursor-pointer">
                To Do
              </label>
              <input
                type="radio"
                name="To Do"
                id="To Do"
                value="To Do"
                className="cursor-pointer"
                checked={task?.status === 'To Do'}
                onChange={(e) => task.changeStatus(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 bg-purple-100 px-2 py-1 justify-center items-center ">
              <label htmlFor="In Progress" className="cursor-pointer">
                In Progress
              </label>
              <input
                type="radio"
                name="In Progress"
                id="In Progress"
                value="In Progress"
                className="cursor-pointer"
                checked={task?.status === 'In Progress'}
                onChange={(e) => task.changeStatus(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 bg-green-100 px-2 py-1 justify-center items-center">
              <label htmlFor="Completed" className="cursor-pointer">
                Completed
              </label>
              <input
                type="radio"
                name="Completed"
                id="Completed"
                value="Completed"
                className="cursor-pointer"
                checked={task?.status === 'Completed'}
                onChange={(e) => task.changeStatus(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          className="px-2 py-1 rounded bg-blue-500 text-white "
          type="submit"
        >
          Add Task
        </button>
      </form>
    );
  }
});

export default AddTaskDialog;
