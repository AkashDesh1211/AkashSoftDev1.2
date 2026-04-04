# Electronics Store Management System

## Project Overview

This project was developed for IFN636 Assessment 1.2, which required extending the provided starter application into a full stack CRUD system using React, Node.js, Express, MongoDB, GitHub version control, and CI/CD practices.

The final system was adapted into an Electronics Store Management System. It allows authenticated users to register, log in, manage their profile, browse products, and place orders. The project also includes role-based authorisation so that administrative actions such as adding, updating, and deleting products are restricted to admin users.

The application builds on the starter authentication structure supplied in the unit and extends it with product and order functionality, backend testing, GitHub Actions workflow configuration, and deployment support through AWS EC2 and PM2.

## Implemented Features

### Authentication and Authorisation
- User registration
- User login
- User logout
- JWT-based authentication
- Protected frontend routes
- Protected backend routes
- Role-based authorisation using `customer` and `admin`
- Admin-only access for product management routes
- Admin-only access for selected order management actions

### User Features
- Register a new account
- Log in to the system
- View and update profile details
- Browse available products
- View product details through the products page
- Create an order
- View existing orders

### Admin Features
- Add new products
- Update products
- Delete products
- Manage order status and deletion through protected backend routes

### DevOps and Testing
- GitHub branch-based workflow
- Pull requests and merge history
- GitHub Actions CI workflow
- Backend test case using Mocha, Chai, and Sinon
- PM2 process management on AWS EC2

## Tech Stack

### Frontend
- React
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt

### Testing and Deployment
- Mocha
- Chai
- Sinon
- GitHub Actions
- AWS EC2
- PM2


---

**Prerequisite:** Please install the following software and create account in following web tools** **

* **Nodejs [**[https://nodejs.org/en](https://nodejs.org/en)]** **
* **Git [**[https://git-scm.com/](https://git-scm.com/)]** **
* **VS code editor** [[https://code.visualstudio.com/](https://code.visualstudio.com/)]** **
* **MongoDB Account** [[https://account.mongodb.com/account/login](https://account.mongodb.com/account/login)]** - In tutorial, we have also showed how can you create account and database: follow step number 2.**
* **GitHub Account** [[https://github.com/signup?source=login](https://github.com/signup?source=login)]** **

---

## Project Structure

```text
.
├── .github/workflows/ci.yml
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── test
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   └── pages
│   └── package.json
├── package.json
└── README.md



