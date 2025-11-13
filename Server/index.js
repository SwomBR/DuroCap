import express,{json} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from 'cors'
import { userAuth } from './Routes/userAuth.js';
import productRoutes from './Routes/productRoutes.js'
import categoryRoutes from './Routes/categoryRoutes.js';
import enquiryRoutes from './Routes/enquiryRoutes.js';
import addressRoutes from './Routes/addresses.js';
import cartRoutes from './Routes/cartRoutes.js'
import orderRoutes from './Routes/OrderRoutes.js'
import faqRoutes from './Routes/faqRoutes.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(json());
app.use(cookieParser()); 

app.use('/',userAuth);
app.use('/',productRoutes);
app.use('/',categoryRoutes);
app.use('/',enquiryRoutes);
app.use('/',addressRoutes);
app.use('/',cartRoutes );
app.use('/',orderRoutes);
app.use('/',faqRoutes);

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully to DuroCap Website");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
  });

app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
})