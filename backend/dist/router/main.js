"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_1 = __importDefault(require("./account"));
const todos_1 = __importDefault(require("./todos"));
const apiRouter = (0, express_1.Router)();
apiRouter.use("/account", account_1.default);
apiRouter.use("/todos", todos_1.default);
exports.default = apiRouter;
