"use strict";
exports.__esModule = true;
// Import Lib
var react_1 = require("react");
// Import Function
var FunctionsFirebase_1 = require("../Functions/FunctionsFirebase");
var Task = function (_a) {
    var item = _a.item;
    var HandledeletDoc = function () {
        FunctionsFirebase_1.DeleteDoc(item.id);
    };
    var HandleUpdateState = function () {
        FunctionsFirebase_1.UpdateState(item.id);
    };
    return (react_1["default"].createElement("div", { className: "row" },
        react_1["default"].createElement("div", { className: "button-trash", onClick: HandledeletDoc },
            react_1["default"].createElement("i", { className: "fas fa-trash-alt" })),
        react_1["default"].createElement("div", { className: "button-correct", onClick: HandleUpdateState },
            react_1["default"].createElement("i", { className: "fas fa-check" })),
        react_1["default"].createElement("div", null, item.def),
        react_1["default"].createElement("div", null, item.date2),
        react_1["default"].createElement("div", { className: "select" }, item.title)));
};
exports["default"] = Task;
