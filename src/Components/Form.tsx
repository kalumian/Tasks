import React from "react";

const Form: React.FC = () => {
  return (
    <form className="form">
      <input
        type="text"
        name="write-task"
        className="form-element"
        autoComplete="off"
        placeholder="اضافة مهمة جديدة"
      />
      <input
        type="date"
        name="write-date"
        className="form-element"
        autoComplete="off"
      />
      <select name="select-level" className="form-element">
        <option value="1">hard</option>
        <option value="2">normal</option>
      </select>
      <input type="submit" name="add-task" className="form-element" />
    </form>
  );
};

export default Form;
