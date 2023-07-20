import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://0.0.0.0:27017/memories")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to port ${PORT}`)
        })
    })
    .catch((e) => {
        console.log(e.message);
    })
