import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.PORT);

console.log(process.env.MONGO_URI);

connectDB();

app.use("/api/notes", notesRoutes)

app.listen(PORT, () => {
    console.log('Server is running on port 5001');
});

