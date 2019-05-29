"use strict";
// const greeting:string = 'Hello';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var num:number[] = [1, 2, 3];
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('Hello..');
});
app.listen(5000, () => console.log("Server started on PORT 5000."));
