"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const { PORT } = process.env;
const todos_1 = __importDefault(require("./routes/todos"));
//bodyParsing middleware
app.use(express_1.default.json());
//todo routes middleware
app.use('/todos', todos_1.default);
//Error handling middleware
app.use((err, req, res, next) => {
    console.log(req);
    console.log(next);
    res.status(500).json({ message: err.message });
});
app.listen(PORT, () => console.log(`Server started at port number: ${PORT}`));
