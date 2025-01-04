import { Router } from "express";
import authentication from "../middlewares/authentication";
import { todoSchema } from "../validations";

const todosRouter = Router();

todosRouter.post("/new", authentication, async (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const todo = {title, description};
    let parsed = todoSchema.safeParse(todo);
    if(!parsed.success){
        res.json({
            message: "Insufficient details"
        })
    }
})

export default todosRouter;