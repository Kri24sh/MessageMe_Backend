// Packages Imports
import express from 'express';
import dotenv, { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'

// File imports
import { ConnectToMongoose } from './DB/connectToMongoDb.js';
import Authroute from './Routes/Auth.routes.js'
import Messageroute from './Routes/Message.route.js'
import userRoutes from './Routes/User.routes.js'
import {app, server} from './Socket/socket.js'

// ALL confi
dotenv.config();


// Enviroment variables
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', Authroute);
app.use("/api/messages", Messageroute);
app.use("/api/users", userRoutes);





server.listen(PORT, ()=>{
    ConnectToMongoose();
    console.log(`Your server is running on port ${PORT}`)
})