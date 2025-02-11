# HireSphere - Job Portal Web Application

## 🚀 Overview
**HireSphere** is a modern **job portal web application** that connects job seekers with employers. It offers a streamlined experience for job discovery, applications, and recruitment management.

## ✨ Features
- 🔐 **User Authentication** – Secure login & signup using **Clerk**
- 📢 **Job Posting & Management** – Employers can **post jobs**, manage applications, and track candidates
- 🔍 **Job Search & Applications** – Users can search for jobs using **filters** and apply instantly
- ☁️ **Cloud-Based Storage** – Uses **Cloudinary** for profile pictures and job-related documents
- 🔔 **Real-time Notifications** – Keeps job seekers and recruiters updated
- 🔒 **Secure Backend** – Authentication and API requests secured using **JWT**
- 📱 **Responsive Design** – Optimized for **desktop & mobile** devices

## 🛠 Tech Stack
### Frontend
- **React.js**
- **Vite** (for fast development)
- **Tailwind CSS** (for styling)
- **React Router** (for navigation)
- **Axios** (for API calls)
- **React Icons** (for UI enhancements)

### Backend
- **Express.js** (Node.js framework)
- **MongoDB (Atlas)** (Database)
- **JWT Authentication** (Secure login & API protection)
- **Clerk** (OAuth & authentication management)
- **Cloudinary** (For media storage)

### Deployment
- **Frontend**: Vercel
- **Backend**: Vercel

## 📌 Installation & Setup
### Prerequisites
- **Node.js** (v18+ recommended)
- **MongoDB Atlas or Local Database**
- **Cloudinary Account** (for media storage)
- **Clerk API Keys** (for authentication)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/HireSphere.git
cd HireSphere
```

### 2️⃣ Install Dependencies
#### Install Frontend Dependencies
```bash
cd client
npm install
```

#### Install Backend Dependencies
```bash
cd ../server
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
# Backend Environment Variables
JWT_SECRET="your_secret_key"
MONGODB_URI="your_mongodb_connection_string"
CLOUDINARY_NAME="your_cloudinary_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_SECRET_KEY="your_cloudinary_secret"
CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

### 4️⃣ Start the Application
#### Run Backend
```bash
cd server
npm start
```

#### Run Frontend
```bash
cd ../client
npm run dev
```

## 🚀 Deployment
### Deploy on Vercel (Frontend & Backend)
1. Push your code to **GitHub**
2. Connect the repository to **Vercel**
3. Add environment variables in Vercel settings
4. Deploy!

## 🌐 Live Demo & GitHub Repository
🔗 **Live Demo**: [https://hire-sphere-client.vercel.app/](#)


💻 **GitHub Repo**: 
[https://github.com/sameerajayakodi/hire-sphere-backend](#)
[https://github.com/sameerajayakodi/hire-sphere-client](#)
## 🤝 Contributing
Pull requests are welcome! Feel free to **open an issue** if you have feature requests or bug reports.

## 📜 License
This project is licensed under the **MIT License**.

---

Made with ❤️ by Sameera Jayakodi 🚀
