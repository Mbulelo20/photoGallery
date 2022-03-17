import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/posts.mjs'

// import ('dotenv').config();

const app = express();

app.use(express.json({limit: '50mb'})); //parse json received
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use('/photos', router)
const URI = 'mongodb+srv://mbulelo:voyager123@mbulelo.eu7nw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port = process.env.PORT || 5000;
mongoose.connect(URI).then(
    app.listen(port, () => {
        console.log("Server Is Running on port: "+port)
    })
)
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected successfully.")
})

