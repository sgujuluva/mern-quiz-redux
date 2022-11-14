import express from 'express';
//import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import questionRoutes from './routes/questionRoutes.js';

const app = express()


/** app middlewares */
//app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
dotenv.config();


/** appliation port */
const port = process.env.PORT || 8080;

/** routes */
app.use('/api', questionRoutes) /** apis */


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`)
})