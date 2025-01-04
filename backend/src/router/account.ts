import { Router } from "express";
import { userSchema } from "../validations";
import { prisma } from "..";
import jwt from "jsonwebtoken";

const accountRouter = Router();

accountRouter.post("/create", async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    const parsed = userSchema.safeParse({email, password});

    if(!parsed.success){
        res.json({
            message: "Invalid details provided"
        });
        return;
    }

    try {
        const response = await prisma.users.create({
            data: {
                email,
                password
            }
        });

        let token = jwt.sign({id: response.id}, process.env.JWTPASS || '')
        res.json({
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error sending to db"
        })
    }
})

accountRouter.post("/login", async (req, res)=>{
    let email = req.body.email;
    let password = req.body.password;
    const parsed = userSchema.safeParse({email,password});
    if(!parsed.success){
        res.json({
            message: "Couldn't log in"
        })
        return;
    }

    const response = await prisma.users.findFirst({
        where: {
            email,
            password
        }
    })
    if(response === null){
        res.json({
            message:"Invalid user details" 
        });
        return;
    }

    let token = jwt.sign({id: response.id}, process.env.JWTPASS || '');
    res.json({
        token
    })
});

export default accountRouter;