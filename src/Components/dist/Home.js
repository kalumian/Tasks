"use strict";
exports.__esModule = true;
// Import From Lib
var react_1 = require("react");
// Import Components
var Header_1 = require("./Header");
var Footer_1 = require("./Footer");
var Content_1 = require("./Content");
var Home = function () {
    var _a = react_1.useState(""), section = _a[0], setSection = _a[1];
    // Function Change Section
    var ChangeSection = function (title) {
        setSection(title);
    };
    return (react_1["default"].createElement("main", null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(Content_1["default"], { ChangeSection: ChangeSection, section: section }),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = Home;
