import { Router } from "express";
import accountRouter from "./account";
import todosRouter from "./todos";

const apiRouter = Router();

apiRouter.use("/account", accountRouter);
apiRouter.use("/todos", todosRouter);

export default apiRouter;