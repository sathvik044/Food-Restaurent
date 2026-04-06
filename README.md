🍽️ Food Restaurant App

A full-stack Restaurant Ordering System built with Spring Boot (Backend) and React + TypeScript (Frontend). This project demonstrates a modern architecture with REST APIs, authentication, and a responsive UI for managing users, products, and menus.

✨ Features
🔐 Authentication
User Registration
User Login
👤 Users
Create User
Get All Users
Get User by ID
🍔 Products
Add Product
View Products
Update Product
Delete Product
📋 Menu
Fetch menu items by category
🛒 Frontend UI
Login & Register pages
Home page
Product listing
Menu view
Profile page
Cart page
🏗️ Architecture
🔹 Backend (Spring Boot)
Java 21
Spring Boot 3.2
Spring Web
Spring Data JPA
PostgreSQL
Swagger (OpenAPI)
Modules:
Login
User
Product
Menu
Config
🔹 Frontend (React)
React + TypeScript + Vite
React Router
Bootstrap
Context API (Cart State)
📁 Project Structure
Food-Restaurent/
│
├── frontend/            # React App
│
├── SpringProject         # Spring Boot App
│        
│
└── README.md
⚙️ Prerequisites

Make sure you have installed:

Java 21
Node.js (18+)
Maven
PostgreSQL
⚙️ Configuration
📍 Backend Config

File:

backend/spring/src/main/resources/application.properties

Example:

server.port=8081
spring.datasource.url=jdbc:postgresql://localhost:5432/Hcl
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
▶️ Run the Application
🚀 Backend
cd backend/spring
mvnw.cmd spring-boot:run

Runs on:

http://localhost:8081
🌐 Frontend
cd frontend
npm install
npm run dev

Runs on:

http://localhost:5173
📡 API Endpoints
🔐 Auth
POST /api/login
POST /api/register
👤 Users
GET    /api/users
GET    /api/users/{id}
POST   /api/users
🍔 Products
GET    /api/products
POST   /api/products
PUT    /api/products/{id}
DELETE /api/products/{id}
📋 Menu
GET /api/menu/{category}
📄 API Documentation

Swagger UI available at:

http://localhost:8081/swagger-ui/index.html
🔐 Security
✅ Current
CSRF Disabled
Open Access
🚧 Planned
JWT Authentication
Role-Based Authorization
Password Hashing
🚀 Future Improvements
🔑 JWT Authentication
💳 Payment Integration
📦 Order Management
🧑‍💼 Admin Dashboard
🔔 Notifications
👨‍💻 Author

Sathvik Vadapalli
