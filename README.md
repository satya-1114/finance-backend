# 💰 Finance Data Processing and Access Control API

## 📌 Overview

This backend system is built using Node.js and Express to manage financial records with secure authentication and role-based access control. It allows users to register, log in, and manage income and expense records with proper validation and authorization.

---

## 🚀 Features

* 🔐 JWT Authentication (Register/Login)
* 🛡️ Role-Based Access Control (Admin/User)
* 📊 Financial Records Management (Create Records)
* 📈 Dashboard API (income, expenses summary)
* ✅ Input Validation using Zod
* ⚠️ Structured Error Handling
* 🔒 Protected Routes

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* Zod (Validation)
* JSON Web Token (JWT)

---

## 📂 Project Structure

```
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

### 1. Clone the repository

```
git clone <your-repo-link>
cd finance-backend
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```
DATABASE_URL="postgresql://user:password@localhost:5432/finance_db"
JWT_SECRET="your_secret_key"
PORT=5000
```

### 4. Run migrations

```
npx prisma migrate dev
```

### 5. Start server

```
node server.js
```

---

## 🔑 Authentication APIs

### Register

POST `/auth/register`

### Login

POST `/auth/login`

Returns JWT token.

---

## 📊 Records API

### Create Record

POST `/records`

Headers:

```
Authorization: Bearer <token>
```

Body:

```
{
  "amount": 1000,
  "type": "INCOME",
  "category": "salary",
  "date": "2026-04-01"
}
```

---

## 📈 Dashboard API

GET `/dashboard`

Returns:

* total income
* total expenses
* balance

---

## ❗ Error Handling

All validation errors return:

```
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

* Authentication flow
* Protected routes
* Record creation
* Error validation

