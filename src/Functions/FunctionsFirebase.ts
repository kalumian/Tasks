// Import from firebase lib
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

// Import From Lib
import { useEffect, useState } from "react";

// import data
import { db } from "../Firebase/Firebase";
// Import Interfaces
import { TaskInterface, SectionInterFace } from "../Interfaces/interfaces";

// -----------------------------------------------------------------------

// Getir Data From Firebase
export const Firebase = () => {
  const [Tasks, setTask] = useState<TaskInterface[]>([]);
  const [Section, setSection] = useState<SectionInterFace[]>([]);

  // Get Data
  useEffect(() => {
    // SnapShot For Get Data From Firebase
    const TASKS = onSnapshot(collection(db, "TASKS"), (snap) => {
      // Maping Data From Snapshot and put in State
      setTask(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    onSnapshot(collection(db, "Sections"), (snap) => {
      // Maping Data From Snapshot and put in State
      setSection(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return TASKS;
  }, []);
  return { Tasks, Section };
};

// Add Doc Function
export const AddDoc = (
  title: string,
  date: any,
  def: number,
  section: string
): void => {
  addDoc<any>(collection(db, "TASKS"), {
    title: title,
    date1: `${new Date().getDay()}/${new Date().getMonth()}`,
    date2: date.split("-").slice(1, 3).join("/"),
    section: section,
    def:
      def === 1
        ? "عاجل"
        : def === 2
        ? "عاجل جداً"
        : def === 3
        ? "مهم"
        : "غير مهم",
    state: false,
  });
};

// Delet Doc Function
export const DeleteDoc = (id: string) => {
  const docRef = doc(db, "TASKS", id);
  deleteDoc(docRef);
};

// Add Section
export const AddSection = (): void => {
  const title = prompt("ادخل اسم القسيم الذي تريده");
  title === "" || title === null
    ? alert("يرجى التحقق من المدخلات")
    : addDoc<any>(collection(db, "Sections"), { title });
};

// Change State
export const UpdateState = (id: string): void => {
  const docRef = doc(db, "TASKS", id);
  updateDoc(docRef, {
    state: true,
  });
};

// Delete Section
export const DeleteSection = (id: string) => {  
  const docRef = doc(db, "Sections", id);
  deleteDoc(docRef);
};
