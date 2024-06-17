import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        // Connect to MongoDB
        this.connectToDatabase();

        // Configure middleware
        this.configureMiddleware();

        // Define routes
        // this.configureRoutes();
    }

    connectToDatabase() {
        const dbURI = 'mongodb+srv://admin:admin007@cluster0.gbijo5h.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0';
        mongoose.connect(dbURI)
            .then(() => console.log('MongoDB connected'))
            .catch(err => console.log('MongoDB connection error:', err));
    }

    configureMiddleware() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    // Example of configuring routes
    // configureRoutes() {
    //     this.app.use('/api', routes);
    // }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }    
}

const server = new Server() 

server.start();