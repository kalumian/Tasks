"use strict";

exports.__esModule = true;

var react_1 = require("react");

var Form = function Form() {
  var _a = react_1.useState(""),
      title = _a[0],
      setTitle = _a[1];

  var _b = react_1.useState({}),
      date = _b[0],
      setDate = _b[1];

  var _c = react_1.useState(0),
      def = _c[0],
      setDef = _c[1];

  return react_1["default"].createElement("form", {
    className: "form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      setTitle("");
      setDate({});
      setDef(0);
    }
  }, react_1["default"].createElement("input", {
    type: "text",
    name: "write-task",
    className: "form-element",
    autoComplete: "off",
    placeholder: "\u0627\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629",
    onChange: function onChange(event) {
      setTitle(event.target.value);
    },
    value: title
  }), react_1["default"].createElement("input", {
    type: "date",
    name: "write-date",
    className: "form-element",
    autoComplete: "off",
    value: String(date),
    onChange: function onChange(event) {
      setDate(event.target.value);
    }
  }), react_1["default"].createElement("select", {
    onChange: function onChange(event) {
      setDef(Number(event.target.value));
    },
    name: "select-level",
    className: "form-element",
    value: def
  }, react_1["default"].createElement("option", {
    value: 0
  }, "\u0645\u0633\u062A\u0648\u0649"), react_1["default"].createElement("option", {
    value: 1
  }, "\u0639\u0627\u062C\u0644"), react_1["default"].createElement("option", {
    value: 2
  }, "\u0639\u0627\u062C\u0644 \u062C\u062F\u0627\u064B"), react_1["default"].createElement("option", {
    value: 3
  }, "\u0645\u0647\u0645"), react_1["default"].createElement("option", {
    value: 4
  }, "\u063A\u064A\u0631 \u0645\u0647\u0645")), react_1["default"].createElement("input", {
    type: "submit",
    name: "add-task",
    className: "form-element",
    value: "حفظ"
  }));
};

exports["default"] = Form;