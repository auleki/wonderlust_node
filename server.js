import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import dreamLocationRoutes from './routes/dreamLocation.route.js'

if (process.env.NODE_ENV === 'development') {
    dotenv.config()
}   

// Enable environment variables
dotenv.config()

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.dbURI = process.env.MONGODB_URI || ''

        // Connect to MongoDB
        this.connectToDatabase();

        // Configure middleware
        this.configureMiddleware();

        // Define routes
        this.configureRoutes();
    }

    connectToDatabase() {
        mongoose.connect(this.dbURI)
            .then(() => console.log('MongoDB connected'))
            .catch(err => console.log('MongoDB connection error:', err));
    }

    configureMiddleware() {
        this.app.use(express.json());
        this.app.use(morgan('tiny'))
        this.app.use(cors());
    }

    // Example of configuring routes
    configureRoutes() {
        // this.app.use('/api', routes);
        this.app.use('/dream-locations', dreamLocationRoutes)
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }    
}

const server = new Server() 

server.start();