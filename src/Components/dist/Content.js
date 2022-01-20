"use strict";
exports.__esModule = true;
// Import Lib
var react_1 = require("react");
// Import Components
var List_1 = require("./List");
var Form_1 = require("./Form");
var Content = function () {
    return (react_1["default"].createElement("section", { className: "content container" },
        react_1["default"].createElement("header", { className: "header-content" },
            react_1["default"].createElement(Form_1["default"], null),
            react_1["default"].createElement(List_1["default"], null)),
        react_1["default"].createElement("aside", { className: "aside" })));
};
exports["default"] = Content;
