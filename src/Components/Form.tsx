import React from "react";

const Form: React.FC = () => {
  return (
      <form className="form">
        <input type="text" name="write-task" className="form-element"/>
        <input type="date" name="write-date"className="form-element"/>
        <select name="select-level" className="form-element"><option value="1">hard</option></select>
        <input type="submit" name="add-task" className="form-element"/>
      </form>
  );
};

export default Form;
