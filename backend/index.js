// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

// const app = express();
// const port = process.env.PORT || 4000;

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// mongoose.connect("mongodb://0.0.0.0:27017/memories")
//     .then(() => {
//         app.listen(port, () => {
//             console.log(`Connected to port ${port}`)
//         })
//     })
//     .catch((e) => {
//         console.log(e.message);
//     })

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// })


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


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
