# React Task Manager

A task manager application built with React and Vite.

The project is being developed as a learning project focused not only on React functionality, but also on application structure, component organization, state management, routing, and maintainable development practices.

## Features

* Create tasks with title and description
* Complete and uncomplete tasks
* Delete tasks
* Track task completion progress
* Light and dark themes
* Persistent theme preference using `localStorage`
* Client-side routing with React Router
* Centralized task state management with React Context
* Responsive interface

## Technologies

* React
* React Router
* Vite
* JavaScript
* CSS
* UUID

## Application Architecture

The application follows a component-based architecture, separating pages, reusable components, routing, and shared state.

```text
src/
├── components/
│   ├── Container/
│   ├── Icon/
│   └── Task/
│       ├── AddTask/
│       ├── ListTask/
│       ├── ProgressBar/
│       └── Task.jsx
│
├── contexts/
│   └── TaskContext.jsx
│
├── pages/
│   ├── TaskListPage.jsx
│   └── TaskDescriptionPage.jsx
│
├── App.jsx
├── AppRouter.jsx
├── App.css
├── index.css
└── main.jsx
```

### Application flow

```text
main.jsx
    ↓
TaskProvider
    ↓
App
    ├── Header
    └── AppRouter
         ├── TaskListPage
         │    └── Task
         │         ├── AddTask
         │         ├── ProgressBar
         │         └── ListTask
         │
         └── TaskDescriptionPage
```

### `main.jsx`

Responsible only for bootstrapping the application.

It initializes React and provides the application with the `TaskProvider`.

### `App.jsx`

Responsible for application-level concerns that are not specific to tasks.

Currently, this includes:

* Application layout
* Header
* Theme state
* Theme switching
* Theme persistence

Task state and task operations are intentionally kept outside of `App`.

### `AppRouter.jsx`

Centralizes the application's client-side routing.

The router maps URLs to pages instead of making `App` responsible for route configuration.

Current routes include:

```text
/                   → TaskListPage
/task-description  → TaskDescriptionPage
```

The task description route is currently a foundation for the future task detail functionality.

### `pages/`

Pages represent screens/routes of the application.

`TaskListPage` composes the task management interface, while `TaskDescriptionPage` is reserved for the task detail view.

Pages are intentionally kept separate from reusable UI components.

### `components/`

Contains reusable UI components.

The task-related components are grouped under `components/Task/`:

* `Task` — composes the task management interface
* `AddTask` — task creation form
* `ListTask` — renders the task list and task actions
* `ProgressBar` — displays completion progress

Other generic components, such as `Container` and `Icon`, are kept outside the task domain.

## Task State Management

Task-related state is centralized in `TaskContext`.

```text
TaskProvider
├── tasks
├── addTask()
├── completeTask()
└── deleteTask()
```

Components that need task information can consume the context instead of receiving task state through multiple layers of props.

This prevents unnecessary prop drilling and gives task-related state a single responsibility boundary.

The context exposes task operations rather than exposing `setTasks` directly. Components therefore interact with the task state through domain-specific operations such as:

```text
addTask()
completeTask()
deleteTask()
```

## Derived State

Task progress is derived from the current `tasks` state instead of being stored as an independent piece of state.

Conceptually:

```text
tasks
  ↓
completed tasks
  ↓
progress
```

This prevents multiple sources of truth.

When the task state changes, React renders the provider again and the progress value is recalculated from the current tasks.

## Styling

The project uses CSS with shared design tokens and reusable utility classes.

The styling system includes:

* CSS variables for colors, spacing, typography, shadows, and radii
* Shared container styles
* Flexbox utility classes
* Light and dark themes
* Component-specific styles where appropriate

The goal is to keep visual decisions consistent while avoiding unnecessary duplication between components.

## Development Approach

This project is intentionally developed incrementally.

Architectural decisions are introduced when the application presents a real need for them instead of prematurely introducing abstractions.

Examples include:

* Introducing pages when routing became necessary
* Extracting `AppRouter` when routing responsibilities started accumulating in `App`
* Introducing `TaskContext` when task state and operations began passing through multiple component layers
* Removing progress state after identifying it as derived state

GitHub Issues, Milestones, branches, and Conventional Commits are used to organize and document the development process.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```