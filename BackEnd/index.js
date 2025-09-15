import { config } from "dotenv";
import express from "express"
import cors  from 'cors';
import { sendEmail } from "./utils/SendMail.js";

const app = express();

const router = express.Router();

config({path:"./config.env"});

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

router.post("/send/mail", async(req,res,next) => {
    const {name,email, message} = req.body;

    if(!name || !email || !message){
        return res.status(400).json({
            success: false,
            message: "Fill all the data"
        });
    }
    try {
        await sendEmail({
            email: "siam371627@gmail.com",
            subject: "GYM MANAGEMENT CONTACT",
            message,
            userEmail: email
        });
        res.status(200).json({
            success: true,
            message: "Message Send Successfully"
        });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({
            success: false,
            message:"Internal Server Error"
        });
    }
});

app.use(router)

app.listen(process.env.PORT, ()=> {
    console.log(`The server is running on : http://localhost:${process.env.PORT}/`)
})