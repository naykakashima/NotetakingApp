# 📝 Simple Note Taking App

A minimal full-stack note-taking application built with **React**, **Express**, and **MongoDB**.  
You can **create**, **view**, and **delete** notes — that’s it. Clean, simple, and functional.

---

## 🚀 Tech Stack

**Frontend**
- React + Vite  
- TailwindCSS + DaisyUI  
- Axios for API calls  
- React Router for navigation  
- React Hot Toast for notifications  

**Backend**
- Node.js + Express  
- MongoDB + Mongoose  
- dotenv for environment variables  
- cors for API access  
- nodemon for development  

---

## 📂 Project Structure

```
project-root/
│
├── backend/
│ ├── src/
│ │ ├── server.js # Express server entry
│ │ ├── routes/notes.js # Note routes (GET, POST, DELETE)
│ │ ├── models/Note.js # Mongoose model
│ │ └── controllers/ # Logic for CRUD functions
│ ├── .env # MongoDB URI, PORT, etc.
│ └── package.json
│
└── frontend/
├── src/
│ ├── pages/ # Home, Notes pages
│ ├── components/ # NoteCard, NoteForm, etc.
│ ├── App.jsx
│ └── main.jsx
├── index.html
└── package.json

```

## 🧠 Features

Create a note (title + content)

View all notes

Delete notes

Instant updates using React state

