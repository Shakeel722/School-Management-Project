import express from "express";
import multer from "multer";
import {db} from "../db.js";

const router = express.Router();

//image storing configuration

const storage = multer.diskStorage({
    destination:"schoolImages/",
    filename: (req, file,cb)=> {
        cb(null, Date.now()+"-" + file.originalname);
    },
});

const upload = multer({storage});

//for adding a school

router.post("/", upload.single("image") , async(req, res)=>{
    try{
        const {name, address, city, state, contact, email_id} = req.body;
        const image = req.file.filename;

        await db.query("INSERT INTO schools (name,address, city, state,contact, image, email_id) VALUES (?,?,?,?,?,?,?)",[name, address, city,state, contact, image,email_id]);

        res.status(201).json({message:"School Added Successfully"});

    } catch(error) {
        console.error(error);
        res.status(500).json({message:"Internal Server Error"});
    }
});

//getting the detail of the all schools

router.get( "/", async (req, res)=> {

    try{
        const [rows] = await db.query(
            "SELECT name, address, city, image FROM schools"
        );
        res.json(rows);
    } catch(error) {
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

export default router;