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

---

## How to Use the Application

Once the application is running on the EC2 server, follow the steps below to use the system.

### 1. Open the Application

Open your web browser and navigate to the deployed application using the EC2 public IP:

http://<your-ec2-public-ip>:3000

---

### 2. Login

Use the provided test account to log in.

Customer Account  
Email: akash1211@gmail.com  
Password: akash1211  

Click the Login button to access the system.

---

### 3. Navigate the System

After logging in, you can:

- View and update your profile  
- Browse available products  
- Create a new order  
- View your existing orders  

Use the navigation bar to move between pages.

---

### 4. View Products

1. Navigate to the Products page  
2. Browse the list of available products  
3. View product details  

---

### 5. Create an Order

1. Go to the Orders page  
2. Click on Create Order  
3. Enter the required details  
4. Submit the form  

The order will be saved and displayed in your orders list.

---

### 6. Admin Functionality

Use the admin account to access additional features.

Admin Account  
Email: admin@store.com  
Password: admin123  

Admin users can:

- Add new products  
- Update existing products  
- Delete products  

To perform these actions:

1. Navigate to the Products page  
2. Click Add Product to create a new product  
3. Use edit or delete options on existing products  

---

### 7. Logout

Click the Logout button in the navigation bar to end your session.

---

## Notes

- Users must be logged in to access protected pages  
- Admin-only features are restricted based on user role  
- Ensure the admin account has `"role": "admin"` set in MongoDB  
- If the application does not load, confirm the EC2 instance is running and the backend server is active using PM2  

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



