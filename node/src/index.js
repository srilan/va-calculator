import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as routes from './routes/calculator';
import * as componentRoutes from './routes/components';
import path from 'path';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 9000
//App Varaibles 
dotenv.config();
//intializing the express app 
const app = express(); 
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//using the dependancies
app.use(cors({
    origin: "*",
})); 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')));


app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
});

app.use('/', routes.getCalculatorRoutes());
app.use('/components', componentRoutes.getComponentRoutes());