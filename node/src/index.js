import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as routes from './routes/calculator';

const PORT = process.env.PORT || 9000
//App Varaibles 
dotenv.config();
//intializing the express app 
const app = express(); 

//using the dependancies
app.use(cors({
    origin: "*",
})); 
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
});
app.use('/', routes.getCalculatorRoutes());