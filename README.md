- 🔐 Authentication (Login & Register)
- 👤 User Management
- 🍔 Product Management (CRUD)
- 📋 Menu by Category
- 🛒 Cart System (Frontend)
- 🌐 Responsive UI

---

## 🧾 Notes

- No authentication required (currently open access)
- Customers stored via API
- Basic implementation (security improvements planned)

---

## 📡 API Endpoints

### 🔐 Auth


POST /api/login
POST /api/register


---

### 👤 Users


GET /api/users
GET /api/users/{id}
POST /api/users


---

### 🍔 Products

#### Get All Products


GET /api/products


**Response:**

{
  "status": "success",
  "message": "Products fetched successfully",
  "data": []
}
Get Products by Category
GET /api/products?category=PIZZA
Add Product
POST /api/products
Update Product
PUT /api/products/{id}
Delete Product
DELETE /api/products/{id}
📋 Menu
GET /api/menu/{category}
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
├── frontend/        # React App
├── backend/
│   └── spring/      # Spring Boot App
└── README.md
⚙️ Prerequisites
Java 21
Node.js (18+)
Maven
PostgreSQL
⚙️ Backend Setup
Clone Repository
git clone https://github.com/your-username/your-repo-name.git
cd backend/spring
Configuration

Update:

backend/spring/src/main/resources/application.properties

Example:

server.port=8081

spring.datasource.url=jdbc:postgresql://localhost:5432/Hcl
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Run Backend
mvnw.cmd spring-boot:run

📍 Runs on:
http://localhost:8081

💻 Frontend Setup
cd frontend
npm install
npm run dev

📍 Runs on:
http://localhost:5173

🌐 CORS Config
@CrossOrigin("http://localhost:5173")
📦 Dependencies (Backend)
spring-boot-starter-web
spring-boot-starter-data-jpa
postgresql
spring-boot-starter-validation
lombok
📄 API Documentation

Swagger UI:

http://localhost:8081/swagger-ui/index.html
🔐 Security
Current
CSRF Disabled
Open Access
Future Plans
JWT Authentication
Role-based Authorization
Password Encryption
🚀 Future Improvements
💳 Payment Integration
📦 Order Management
🧑‍💼 Admin Dashboard
🔔 Notifications
👨‍💻 Author

Sathvik Vadapalli

⭐ Contributing

Contributions are welcome!
Feel free to fork this repository and submit pull requests.
