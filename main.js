import  express from 'express';
import route from './routes/routes.js';
import path from 'path';
import { APP_CONSTANT } from './connectDB/config.js';
import connectDB from './connectDB/connectDB.js';
import bodyParser from 'body-parser';
const app = express();
const PORT = APP_CONSTANT.port || 4000

// connection for database
connectDB()

// body-parser
app.use(bodyParser.urlencoded({extended: true}));

// setup for static files
app.use(express.static(path.join(process.cwd(), 'public')))

// setup for ejs template file
app.set('view engine', 'ejs')
app.set('views', './views')

// routes
app.use('/', route);

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})

