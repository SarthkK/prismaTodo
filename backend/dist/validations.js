"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
exports.userSchema = userSchema;
const todoSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string()
});
exports.todoSchema = todoSchema;
