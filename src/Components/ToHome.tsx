import React from "react";
import { useNavigate } from "react-router-dom";

// Create Types
type ToHomeProps = { link: string };

const List: React.FC<ToHomeProps> = ({ link }) => {
  // useNavigate to Move anouther link
  //   SetTime To Solve the problem of slow navigation
  let history = useNavigate();
  setTimeout(() => {
    history(link);
  }, 100);

  return <></>;
};

export default List;
