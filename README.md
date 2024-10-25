# KanbanHub API

  <div align="center">
    <img src="https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=flat" alt="nodejs" />
    <img src="https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=fff&style=flat" alt="nextjs" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat" alt="typescript" />
    <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=fff&style=flat" alt="prisma" />
  </div>

&nbsp;

<div align="center">
  <a href="https://github.com/kubaparol/cookly-app">
    <img src="assets/logo-white.png" alt="Logo" width="254" height="52">
  </a>
</div>

&nbsp;

## Table of Contents

  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
        <li><a href="#getting-started">Getting Started</a></li>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>

## Overview

**KanbanHub API** is the backend service for the [KanbanHub App](https://github.com/kubaparol/kanbanhub-app), built with NestJS. It provides a RESTful API to manage kanban boards, columns and tasks, enabling full CRUD functionality for each. This backend serves as the core engine for data management, allowing the frontend application to interact seamlessly with boards, columns and tasks.

### Features

- **Board Module**: Manages board-level actions, including creation, updating, and deletion.
- **Column Module**: Allows for adding, editing, and deleting columns within boards.
- **Task Module**: Supports CRUD actions for tasks within columns.
- **Database Integration**: Uses Prisma as the ORM for efficient database interaction and management.

### Tech Stack

- [NestJS](https://nestjs.com/) for the server framework
- [Prisma](https://www.prisma.io/) for database ORM
- [TypeScript](https://www.typescriptlang.org/) for static typing

## Getting Started

To set up **KanbanHub API** locally:

1. Clone the repository:

```bash
git clone https://github.com/kubaparol/kanbanhub-api.git
```

2. Install the dependencies:

```bash
npm i
```

3. Copy the `.env.example` file, rename it to `.env` and fill required credentials:

```bash
cp .env.example .env
```

4. Set up the database: Initialize Prisma and apply migrations to set up the database structure:

```bash
npx prisma migrate dev
```

5. Start the server:

```bash
npm run start:dev
```

6. Api is ready to go:

```
http://localhost:3001/
```

## Contact

Feel free to contact me! You can find me here:

- [LinkedIn](https://www.linkedin.com/in/jakub-parol/)
- [GitHub](https://github.com/kubaparol)
