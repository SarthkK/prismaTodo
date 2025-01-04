import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

async function authentication(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization;

    if(!token){
        res.status(401).json({
            message: "User not authenticated"
        })
        return;
    }
    try {
        let payload =jwt.verify(token, process.env.JWTPASS || '');
        if(typeof payload !== "object" || !("id" in payload)){
            res.status(401).json({
                message: "User not authenticated"
            });
            return;
        }
        req.body.id = payload.id;
        next();
        return;
    } catch (error) {
        res.status(401).json({
            message: "User not authenticated"
        })
    }
}

export default authentication