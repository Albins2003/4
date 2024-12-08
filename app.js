import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes.js';

// Initialize dotenv
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());  // For parsing JSON bodies
app.use(cors());  // For handling CORS (Cross-Origin Resource Sharing)

// Define routes
app.use('/', itemRoutes);  // Now it's after 'app' initialization

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log('MongoDB connection error:', err));

// Define port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
