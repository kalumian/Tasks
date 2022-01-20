"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Form = function () {
    return (react_1["default"].createElement("form", { className: "form" },
        react_1["default"].createElement("input", { type: "text", name: "write-task", className: "form-element", autoComplete: "off", placeholder: "\u0627\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629" }),
        react_1["default"].createElement("input", { type: "date", name: "write-date", className: "form-element", autoComplete: "off" }),
        react_1["default"].createElement("select", { name: "select-level", className: "form-element" },
            react_1["default"].createElement("option", { value: "1" }, "hard"),
            react_1["default"].createElement("option", { value: "2" }, "normal")),
        react_1["default"].createElement("input", { type: "submit", name: "add-task", className: "form-element" })));
};
exports["default"] = Form;
