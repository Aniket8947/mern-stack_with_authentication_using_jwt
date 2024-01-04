require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes')

const app = express();

// connect to database
mongoose.connect(process.env.URI)
    .then(() =>{
        // listening to port 
        app.listen(process.env.PORT , () =>{
        console.log("Connected to database and listening to request on port" , process.env.PORT);
        })
    })
    .catch((err) =>{
        console.log(err);
    })

//middlewares
app.use(express.json());

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

// workouts routes
app.use( '/api/workouts', workoutRoutes);


// user routes
app.use('/api/user', userRoutes)