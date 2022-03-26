import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/posts.mjs';
import 'dotenv/config';

const app = express();

app.use(express.json({limit: '50mb'})); 
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/photos', router);

const port = process.env.REACT_APP_PORT || 5000;

mongoose.connect(process.env.REACT_APP_ATLAS_URI).then(
    app.listen(port, () => {
        console.log("Server Is Running on port: "+port)
    })
)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connected successfully.")
});

