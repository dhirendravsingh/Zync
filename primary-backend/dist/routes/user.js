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
exports.userRouter = void 0;
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const middleware_1 = require("../middleware");
const types_1 = require("../types");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const router = (0, express_1.Router)();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const body = req.body;
    const parsedInput = types_1.signupSchema.safeParse(body);
    if (!parsedInput.success) {
        return res.json(403).json({
            message: "Incorrect inputs"
        });
    }
    const userExist = yield db_1.default.user.findFirst({
        where: {
            email: (_a = parsedInput.data) === null || _a === void 0 ? void 0 : _a.email
        }
    });
    if (userExist)
        return res.status(403).json({
            message: "You are already a member, try signing in"
        });
    yield db_1.default.user.create({
        data: {
            email: parsedInput.data.email,
            name: parsedInput.data.name,
            password: parsedInput.data.password
        }
    });
    return res.status(200).json({
        message: "Signed up successfully, please signin to continue to the service"
    });
}));
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parsedInput = types_1.signinSchema.safeParse(body);
    if (!parsedInput.success) {
        return res.status(403).json({
            message: "Incorrect inputs"
        });
    }
    const user = yield db_1.default.user.findFirst({
        where: {
            email: parsedInput.data.email,
            password: parsedInput.data.password
        },
    });
    if (!user)
        return res.status(403).json({
            message: "Wrong credentials"
        });
    const jwtSign = jsonwebtoken_1.default.sign({
        id: user.id
    }, config_1.JWT_SECRET);
    return res.json({
        token: jwtSign
    });
}));
router.get("/", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const id = req.id;
    const user = yield db_1.default.user.findFirst({
        where: {
            id: id
        },
        select: {
            email: true,
            name: true
        }
    });
    return res.json({ user });
}));
exports.userRouter = router;
