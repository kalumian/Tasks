"use strict";
exports.__esModule = true;
// Import From Lib
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
// Import Links
var links_json_1 = require("../links.json");
var ItemLink = function (_a) {
    var title = _a.title, link = _a.link;
    // to simplify
    return (react_1["default"].createElement("li", null,
        react_1["default"].createElement(react_router_dom_1.Link, { to: link }, title)));
};
var Header = function () {
    return (react_1["default"].createElement("header", { className: "header" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "logo" }, "Tasks"),
            react_1["default"].createElement("nav", { className: "nav" },
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement(ItemLink, { link: links_json_1["default"].links.Home, title: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" }),
                    react_1["default"].createElement(ItemLink, { link: links_json_1["default"].links.Home, title: "\u0639\u0646 \u0627\u0644\u0645\u0648\u0642\u0639" }),
                    react_1["default"].createElement(ItemLink, { link: links_json_1["default"].links.Home, title: "\u062A\u0648\u0627\u0635\u0644" }),
                    react_1["default"].createElement(ItemLink, { link: links_json_1["default"].links.Home, title: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" }))))));
};
exports["default"] = Header;
