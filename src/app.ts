//Import the express library
import express, { Request, Response } from 'express';
//Import the routers
import usersRouter from './users/users.routes';
import biblesRouter from './bibles/bibles.routes';
//Import helmet
import helmet from 'helmet';
//Import cors
import cors from 'cors';
//Import the logger middleware
import logger from './middleware/logger.middleware';
//Import the environment variables
import dotenv from "dotenv";

dotenv.config();

//Instantiate express
const app = express();
//Create a constant for the port number that express will listen on
const port = process.env.PORT;

//Enable all CORS request
app.use(cors());

//Parse JSON bodies
app.use(express.json());

//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true}));

// Adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

if(process.env.NODE_ENV=='development') {
    app.use(logger);
    console.log(process.env.GREETING+' in dev mode');
}

app.get('/', (req: Request, res: Response)=>{
    res.send('<h1>Welcome to the API for Saint Peter\'s Table</h1>');
});

app.use('/',[biblesRouter,usersRouter]);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
