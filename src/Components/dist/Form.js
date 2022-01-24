"use strict";
exports.__esModule = true;
// Import Lib
var react_1 = require("react");
// Import Functions
var FunctionsFirebase_1 = require("../Functions/FunctionsFirebase");
var Form = function (_a) {
    var section = _a.section;
    var _b = react_1.useState(""), title = _b[0], setTitle = _b[1];
    var _c = react_1.useState(""), date = _c[0], setDate = _c[1];
    var _d = react_1.useState(0), def = _d[0], setDef = _d[1];
    return (react_1["default"].createElement("form", { className: "form", onSubmit: function (e) {
            e.preventDefault();
            if (def !== 0 && title !== "" && date !== "") {
                FunctionsFirebase_1.AddDoc(title, date, def, section);
                setTitle("");
                setDate("");
                setDef(0);
            }
            else {
                alert("تأكد من تعبئة جميع الحقول قبل ارفاق المهمة");
            }
        } }, section !== "finish" ? (react_1["default"].createElement(react_1["default"].Fragment, null, section !== "auther" ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "text", name: "write-task", className: "form-element", autoComplete: "off", placeholder: "\u0627\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629", onChange: function (event) {
                setTitle(event.target.value);
            }, value: title }),
        react_1["default"].createElement("input", { type: "date", name: "write-date", className: "form-element", autoComplete: "off", value: String(date), onChange: function (event) {
                setDate(event.target.value);
            } }),
        react_1["default"].createElement("select", { onChange: function (event) {
                setDef(Number(event.target.value));
            }, name: "select-level", className: "form-element", value: def },
            react_1["default"].createElement("option", { value: 0 }, "\u0645\u0633\u062A\u0648\u0649"),
            react_1["default"].createElement("option", { value: 1 }, "\u0639\u0627\u062C\u0644"),
            react_1["default"].createElement("option", { value: 2 }, "\u0639\u0627\u062C\u0644 \u062C\u062F\u0627\u064B"),
            react_1["default"].createElement("option", { value: 3 }, "\u0645\u0647\u0645"),
            react_1["default"].createElement("option", { value: 4 }, "\u063A\u064A\u0631 \u0645\u0647\u0645")),
        react_1["default"].createElement("input", { type: "submit", name: "add-task", className: "form-element", value: "حفظ" }))) : (react_1["default"].createElement(react_1["default"].Fragment, null)))) : (react_1["default"].createElement(react_1["default"].Fragment, null))));
};
exports["default"] = Form;
