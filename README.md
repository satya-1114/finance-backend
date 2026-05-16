# 💰 Finance Data Processing and Access Control API

## 📌 Overview

A secure backend system built using Node.js, Express.js, PostgreSQL, and Prisma ORM to manage financial records with JWT authentication, role-based access control, protected routes, validation, and dashboard analytics.

This system enables users to register, log in, manage financial records (income/expenses), and access analytics based on authorization levels.

---

## 🚀 Features

* 🔐 JWT Authentication (Register/Login)
* 🛡️ Role-Based Access Control (VIEWER / ANALYST / ADMIN)
* 📊 Financial Records CRUD Operations
* 📈 Dashboard Analytics (Category-Based Financial Insights)
* ✅ Input Validation using Zod
* ⚠️ Structured Error Handling
* 🔒 Protected Routes
* 🧹 Category Normalization for Consistent Data Handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* Zod
* JSON Web Token (JWT)

---

## 📂 Project Structure

```bash
src/
  controllers/
  services/
  routes/
  middleware/
  utils/
prisma/
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-link>
cd finance-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/finance_db"
JWT_SECRET="your_secret_key"
PORT=5000
```

### 4. Run Prisma Migration

```bash
npx prisma migrate dev
```

### 5. Start Server

```bash
node server.js
```

---

## 🔑 Authentication APIs

### Register

**POST** `/auth/register`

### Login

**POST** `/auth/login`

Returns JWT token for authorized access.

---

## 📊 Financial Records APIs

### Create Record

**POST** `/records`

### Headers:

```bash
Authorization: Bearer <token>
```

### Body:

```json
{
  "amount": 1000,
  "type": "INCOME",
  "category": "salary",
  "date": "2026-04-01",
  "notes": "Monthly salary"
}
```

---

## 📈 Dashboard APIs

### Category Summary

**GET** `/dashboard/category`

Returns category-wise grouped financial data.

---

## 👤 Role Access Levels

* **VIEWER** → Limited access
* **ANALYST** → Financial analysis permissions
* **ADMIN** → Full system access

---

## ❗ Error Handling

Example:

```json
{
  "success": false,
  "errors": [
    {
      "field": "type",
      "message": "Invalid option"
    }
  ]
}
```

---

## 🧪 Testing

Tested using Thunder Client:

* User Registration
* User Login
* JWT Authorization
* Protected Routes
* Role-Based Access Control
* Record Creation
* Dashboard Analytics
* Validation Errors

---

## 🔥 Key Learning Outcomes

* Authentication & Authorization
* Prisma Schema Design
* PostgreSQL Integration
* Backend Service Layer Architecture
* Data Normalization
* API Security Best Practices

---

## 📸 Suggested Screenshots for GitHub

Add screenshots for:

* Register API Success
* Login API with JWT Token
* Protected Record Creation
* Dashboard Category Analytics
* Prisma Schema Design

---

## 🚀 Future Improvements

* Swagger API Documentation
* Refresh Token Authentication
* Rate Limiting
* Docker Deployment
* Unit & Integration Testing
* Live Deployment (Render / Railway)
