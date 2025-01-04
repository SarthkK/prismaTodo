"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validations_1 = require("../validations");
const __1 = require("..");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accountRouter = (0, express_1.Router)();
accountRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let email = req.body.email;
    let password = req.body.password;
    const parsed = validations_1.userSchema.safeParse({ email, password });
    if (!parsed.success) {
        res.json({
            message: "Invalid details provided"
        });
        return;
    }
    try {
        const response = yield __1.prisma.users.create({
            data: {
                email,
                password
            }
        });
        let token = jsonwebtoken_1.default.sign({ id: response.id }, process.env.JWTPASS || '');
        res.json({
            token
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error sending to db"
        });
    }
}));
accountRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let email = req.body.email;
    let password = req.body.password;
    const parsed = validations_1.userSchema.safeParse({ email, password });
    if (!parsed.success) {
        res.json({
            message: "Couldn't log in"
        });
        return;
    }
    const response = yield __1.prisma.users.findFirst({
        where: {
            email,
            password
        }
    });
    if (response === null) {
        res.json({
            message: "Invalid user details"
        });
        return;
    }
    let token = jsonwebtoken_1.default.sign({ id: response.id }, process.env.JWTPASS || '');
    res.json({
        token
    });
}));
exports.default = accountRouter;
