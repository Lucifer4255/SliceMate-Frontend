# 🍕 SliceMate – Frontend

**SliceMate** is a sleek, responsive online pizza ordering app frontend built with **React.js**, styled with **Tailwind CSS**, and powered by **React Router**. This interface allows customers to browse, order, and track pizzas while providing administrators with tools to manage menus and orders.

---

## 🚀 Key Features

### 👤 Customer Experience
- **User Authentication**: Register and login securely.
- **Dynamic Menu Browsing**: Explore detailed pizza offerings.
- **Cart & Checkout**: Add pizzas, customize, and place orders.
- **Live Order Tracking**: Track status from kitchen to delivery.
- **Order History & Cancellation**: View or cancel past orders.

### 🛠️ Admin Tools
- **Admin Dashboard**: Secure access for restaurant staff.
- **Menu Management**: Add, update, or remove pizzas.
- **Order Management**: Monitor and update order status.

---

## 📂 Project Structure

This repository contains the **React.js frontend** of the SliceMate app.

- 🔗 **Frontend Repo**: [SliceMate Frontend](https://github.com/username/slicemate-frontend)
- 🔗 **Backend Repo**: [SliceMate Backend (Spring Boot)](https://github.com/username/slicemate-backend)

---

## 🧰 Tech Stack

- **React.js** with **React Router**
- **Tailwind CSS** for styling
- **Vite** for fast builds and HMR
- **TypeScript** (optional if used)
- **Docker** support for deployment

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/username/slicemate-frontend.git
cd slicemate-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

App will be running at: `http://localhost:5173`

---

## 🏗️ Build for Production

```bash
npm run build
```

Build output is placed in the `dist/` directory.

---

## 📦 Docker Deployment

Build and run with Docker:

```bash
docker build -t slicemate-frontend .
docker run -p 3000:3000 slicemate-frontend
```

Easily deploy to platforms like AWS, Google Cloud Run, Railway, Fly.io, etc.

---

## 🤝 Contributing

We welcome contributions! Submit issues, fork the repo, and send pull requests to help improve SliceMate.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Enjoy your pizza journey with **SliceMate**! 🍕