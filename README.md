# To-Do App

This is a simple to-do application built using Next.js, TypeScript, Tailwind CSS, and MobX State Tree (MST). The application allows users to create, read, update, and delete tasks, and utilizes MST for state management and local storage.

## Technology Stack

- Next.js: A React-based framework for building server-side rendered (SSR) and static web applications.
- TypeScript: A typed superset of JavaScript that improves code maintainability and provides type safety.
- Tailwind CSS: A utility-first CSS framework that provides pre-defined styles and classes for common UI elements.
- MobX State Tree (MST): A state management library based on MobX that provides a structured way to manage application state.
- Git: A version control system for managing code changes and collaboration.

## User Interface

The user interface of the application allows users to perform the following actions:

- View a list of tasks.
- Add a new task.
- Edit an existing task.
- Delete a task.

The home page of the application displays a list of all the tasks, with each task displayed as a card. Each task card displays the task title, description, and status. Users can click on a task card to view the task details, edit the task, or delete the task.

Users can add a new task by clicking on the "Add Task" button, which opens a modal window where they can enter the task title, description, and status. Users can edit an existing task by clicking on the "Edit" button on the task card, which also opens a modal window with the current task details. Users can delete a task by clicking on the "Delete" button on the task card and confirming the deletion.

## Task Management Functionality

Each task in the application has the following properties:

- Title: A brief title describing the task.
- Description: A detailed description of the task.
- Status: The current status of the task (e.g., "To Do," "In Progress," "Completed").

The application provides the necessary functionality to perform CRUD (Create, Read, Update, Delete) operations on tasks. Users can create a new task by filling out the task details in the "Add Task" modal window. Users can view all tasks on the home page, and click on a task card to view or edit the task details. Users can update the task details by editing the task in the "Edit Task" modal window. Users can delete a task by clicking on the "Delete" button on the task card and confirming the deletion.

## Getting Started

To run the application locally, follow these steps:

1. Clone the Git repository.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm run dev`.

The application should now be running on `http://localhost:3000`.

## Conclusion

This to-do application provides a simple and intuitive user interface for managing tasks, and utilizes modern web technologies such as Next.js, TypeScript, and Tailwind CSS for a fast and responsive experience. The use of MobX State Tree provides a structured and scalable approach to state management and local storage.
