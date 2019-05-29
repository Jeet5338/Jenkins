"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { Module } from 'module';
exports.router = express_1.default.Router();
exports.router.use(function timeLog(req, res, next) {
    console.log('Time ', Date.now());
    next();
});
exports.router.get('/', function (req, res) {
    res.send("In the Dashboard now...!");
});
exports.router.get("/Favourites", (req, res) => {
    res.send("In the favourites now...!");
});
module.exports = exports.router;
