import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';

const connectionDB = async () =>{
    await connectDB();
}
connectionDB();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.listen(port, () => {
    console.log(`Server started on port`);
});