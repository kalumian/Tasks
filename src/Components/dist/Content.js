"use strict";
exports.__esModule = true;
// Import Lib
var react_1 = require("react");
// Import Components
var List_1 = require("./List");
var Form_1 = require("./Form");
// Import Function
var FunctionsFirebase_1 = require("../Functions/FunctionsFirebase");
var Content = function (_a) {
    var ChangeSection = _a.ChangeSection, section = _a.section;
    var firebase = FunctionsFirebase_1.Firebase();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h2", { className: "title" }, section === "finish"
                ? " "
                : "auther" !== section
                    ? "قسم مهام " + section
                    : "لم يتم تحديد اي قسم")),
        react_1["default"].createElement("section", { className: "content container" },
            react_1["default"].createElement("header", { className: "header-content" },
                react_1["default"].createElement(Form_1["default"], { section: section }),
                react_1["default"].createElement(List_1["default"], { section: section })),
            react_1["default"].createElement("aside", { className: "aside" },
                react_1["default"].createElement("header", { className: "aside-header", onClick: FunctionsFirebase_1.AddSection }, "\u0627\u0636\u0627\u0641\u0629 \u0642\u0633\u0645"),
                firebase.Section.map(function (item) {
                    return (react_1["default"].createElement("button", { onClick: function () { return ChangeSection(item.title); }, key: item.id },
                        react_1["default"].createElement("i", { className: "fas fa-backspace", onClick: function () { return FunctionsFirebase_1.DeleteSection(String(item.id)); } }),
                        item.title));
                }),
                react_1["default"].createElement("button", { className: section === "finish" ? "finish-task" : "aouther-task", onClick: function () {
                        return ChangeSection(section === "finish" ? "auther" : "finish");
                    } }, section === "finish"
                    ? "\u0627\u0644\u0645\u0647\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0647\u064A\u0629"
                    : "\u0627\u0644\u0645\u0647\u0627\u0645\u0627\u062A \u0627\u0644\u063A\u064A\u0631 \u0645\u0646\u062A\u0647\u064A\u0629")))));
};
exports["default"] = Content;
