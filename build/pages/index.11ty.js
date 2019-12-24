"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
module.exports =
    `<!DOCTYPE html>` +
        server_1.renderToString(react_1.default.createElement("html", { lang: "en" },
            react_1.default.createElement("head", null,
                react_1.default.createElement("meta", { charSet: "UTF-8" }),
                react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
                react_1.default.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "ie=edge" }),
                react_1.default.createElement("title", null, "Document")),
            react_1.default.createElement("body", null)));
