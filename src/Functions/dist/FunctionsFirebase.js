"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.DeleteSection = exports.UpdateState = exports.AddSection = exports.DeleteDoc = exports.AddDoc = exports.Firebase = void 0;
// Import from firebase lib
var firestore_1 = require("firebase/firestore");
// Import From Lib
var react_1 = require("react");
// import data
var Firebase_1 = require("../Firebase/Firebase");
// -----------------------------------------------------------------------
// Getir Data From Firebase
exports.Firebase = function () {
    var _a = react_1.useState([]), Tasks = _a[0], setTask = _a[1];
    var _b = react_1.useState([]), Section = _b[0], setSection = _b[1];
    // Get Data
    react_1.useEffect(function () {
        // SnapShot For Get Data From Firebase
        var TASKS = firestore_1.onSnapshot(firestore_1.collection(Firebase_1.db, "TASKS"), function (snap) {
            // Maping Data From Snapshot and put in State
            setTask(snap.docs.map(function (doc) { return (__assign(__assign({}, doc.data()), { id: doc.id })); }));
        });
        firestore_1.onSnapshot(firestore_1.collection(Firebase_1.db, "Sections"), function (snap) {
            // Maping Data From Snapshot and put in State
            setSection(snap.docs.map(function (doc) { return (__assign(__assign({}, doc.data()), { id: doc.id })); }));
        });
        return TASKS;
    }, []);
    return { Tasks: Tasks, Section: Section };
};
// Add Doc Function
exports.AddDoc = function (title, date, def, section) {
    firestore_1.addDoc(firestore_1.collection(Firebase_1.db, "TASKS"), {
        title: title,
        date1: new Date().getDay() + "/" + new Date().getMonth(),
        date2: date.split("-").slice(1, 3).join("/"),
        section: section,
        def: def === 1
            ? "عاجل"
            : def === 2
                ? "عاجل جداً"
                : def === 3
                    ? "مهم"
                    : "غير مهم",
        state: false
    });
};
// Delet Doc Function
exports.DeleteDoc = function (id) {
    var docRef = firestore_1.doc(Firebase_1.db, "TASKS", id);
    firestore_1.deleteDoc(docRef);
};
// Add Section
exports.AddSection = function () {
    var title = prompt("ادخل اسم القسيم الذي تريده");
    title === "" || title === null
        ? alert("يرجى التحقق من المدخلات")
        : firestore_1.addDoc(firestore_1.collection(Firebase_1.db, "Sections"), { title: title });
};
// Change State
exports.UpdateState = function (id) {
    var docRef = firestore_1.doc(Firebase_1.db, "TASKS", id);
    firestore_1.updateDoc(docRef, {
        state: true
    });
};
// Delete Section
exports.DeleteSection = function (id) {
    var docRef = firestore_1.doc(Firebase_1.db, "Sections", id);
    firestore_1.deleteDoc(docRef);
};
