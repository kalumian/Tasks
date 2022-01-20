"use strict";
exports.__esModule = true;
// Import Lib
var react_1 = require("react");
// Import Components
var List_1 = require("./List");
var Form_1 = require("./Form");
var Content = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h2", { className: "title" }, "\u0642\u0633\u0645 \u0627\u0644\u0643\u0648\u0631\u0629")),
        react_1["default"].createElement("section", { className: "content container" },
            react_1["default"].createElement("header", { className: "header-content" },
                react_1["default"].createElement(Form_1["default"], null),
                react_1["default"].createElement(List_1["default"], null)),
            react_1["default"].createElement("aside", { className: "aside" },
                react_1["default"].createElement("header", { className: "aside-header" }, "\u0627\u0642\u0633\u0627\u0645"),
                react_1["default"].createElement("button", null, "\u0645\u0630\u0627\u0643\u0631\u0629"),
                react_1["default"].createElement("button", null, "\u0627\u0639\u0645\u0627\u0644 \u0645\u0646\u0632\u0644\u064A\u0629"),
                react_1["default"].createElement("button", null, "\u0643\u0648\u0631\u0629")))));
};
exports["default"] = Content;
