<h1 style="text-align: center;">Krazy Kanban Board</h1>

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Live URL](#live-url)
- [Contributing](#contributing)
- [License](#license)

## Description
Krazy Kanban Board is a task management application designed to help users organize and track their workflow. It provides a secure login system using JSON Web Tokens (JWT) to ensure that only authenticated users can access the Kanban board. This application focuses on improving team collaboration and task management by providing a visually organized board for managing tasks across different stages (e.g., To Do, In Progress, Done).

## Features
- Secure login and authentication using JSON Web Tokens (JWT).
- Responsive design for use on both desktop and mobile devices.
- Create, read, update, and delete (CRUD) functionality for tasks.
- Drag-and-drop interface for moving tasks between columns.
- Automatic session timeout for enhanced security.
- Error handling for invalid login attempts.
- Persistent user sessions using local storage.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: Postgres
- Authentication: JSON Web Tokens (JWT)


## Installation
To run this application locally, follow these steps:

Clone the repository:

```bash
git clone 
https://github.com/Plutarch1971/krazy-kanban-board.git
cd krazy-kanban-board
```

Install dependencies:

```bash
npm install
```

Create a .env file in the root directory and add the following:

```makefile
PORT=3000
DB_URI=your_database_connection_string
JWT_SECRET=your_jwt_secret
```
Seed the application:

```bash
npm run seed
```

Start the application:

```bash
npm run start:dev
```

Open your browser and navigate to:

```arduino
http://localhost:3000
```

## Usage
- Login with the seeded credentials to access the Kanban board.
- Add, edit, or delete tasks in any column.
- Drag and drop tasks to move them between different stages.
- Log out to end your session securely.

## Screenshots
<img src="../krazy-kanban-board/client/public/krazy-kanban-login.png" alt="Kanban Board Login" width="600" height="300">
<img src="../krazy-kanban-board/client/public/krazy-kanban-board.png" alt="Kanban Board" width="600">

## Live URL:
 https://krazy-kanban-board-mt8l.onrender.com

## Contributing
Contributions are welcome! If you would like to improve this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
Feel free to reach out:

- Email: matthewpmendez@gmail.com
- GitHub: [https://github.com/Plutarch1971](https://github.com/Plutarch1971)



