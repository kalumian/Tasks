"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var List = function (_a) {
    var link = _a.link;
    // useNavigate to Move anouther link
    //   SetTime To Solve the problem of slow navigation
    var history = react_router_dom_1.useNavigate();
    setTimeout(function () {
        history(link);
    }, 100);
    return react_1["default"].createElement(react_1["default"].Fragment, null);
};
exports["default"] = List;
