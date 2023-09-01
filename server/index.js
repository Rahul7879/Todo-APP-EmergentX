import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Routes);
Connection();

app.listen(port,()=>{
    console.log("server is listening on port 8000");
})