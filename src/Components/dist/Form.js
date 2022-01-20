"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Form = function () {
    return (react_1["default"].createElement("form", { className: "form" },
        react_1["default"].createElement("input", { type: "text", name: "write-task", className: "form-element" }),
        react_1["default"].createElement("input", { type: "date", name: "write-date", className: "form-element" }),
        react_1["default"].createElement("select", { name: "select-level", className: "form-element" },
            react_1["default"].createElement("option", { value: "1" }, "hard")),
        react_1["default"].createElement("input", { type: "submit", name: "add-task", className: "form-element" })));
};
exports["default"] = Form;
