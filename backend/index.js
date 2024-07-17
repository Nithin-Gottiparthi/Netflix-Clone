// Import dependencies
import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import cors from 'cors';
import path from 'path';

// Initialize environment variables
dotenv.config({ path: '.env' });

// Connect to the database
databaseConnection();

// Create an Express application
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Use environment variable for production URL
    credentials: true
};
app.use(cors(corsOptions));

// API routes
app.use('/api/v1/user', userRoute);

// Serve static files from React's build directory if needed
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
