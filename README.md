# 🚀 Task Management System

> A modern, role-based Task Management Application built with **React** and **Vite**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://task-managment-silk.vercel.app/)

## 📝 Overview

This application allows **Admins** to assign tasks and **Employees** to track their progress. It features a persistent state using **LocalStorage** to simulate a backend database and utilizes the **Context API** for global state management.

## ✨ Key Features

### 🛡️ Admin Dashboard
*   **Create Tasks**: Assign new tasks to specific employees with details like title, description, and due date.
*   **Global Monitoring**: View a comprehensive list of all employees and their task statutes (New, Active, Completed, Failed).

### 👤 Employee Dashboard
*   **Personalized View**: Employees see only tasks assigned to them.
*   **Task Tracking**: Visual stats for quick insights.
*   **Interactive Task Management**: Mark tasks as "Completed" or "Failed" with persistent updates.

## 🛠️ Tech Stack

*   **Frontend Framework**: [React](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **State Management**: Context API
*   **Data Persistence**: LocalStorage (Browser API)
*   **Icons**: React Icons / Heroicons

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have **Node.js** installed on your system.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/taskmanagement.git
    cd taskmanagement
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in your browser**
    The application will start at `http://localhost:5173`.

## 📂 Project Structure

```text
src/
├── context/
│   └── AuthProvider.jsx   # Global State Store (Context + localStorage logic)
├── components/
│   ├── Auth/              # Login Component
│   ├── Dashboard/         # Admin & Employee Dashboard Views
│   └── other/             # Task Forms, Lists, and Stats Components
├── utils/
│   └── localStorage.jsx   # Mock Data & Persistence Helpers
└── App.jsx                # Main Application Logic
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Created by [Siddharth]**
