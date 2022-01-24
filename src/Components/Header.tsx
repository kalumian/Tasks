// Import From Lib
import React from "react";
import { Link } from "react-router-dom";

// Import Links
import links from "../Json/links.json";

// Create Components
type ItemLinkProps = { title: string; link: string }; // type for ItemLink
const ItemLink: React.FC<ItemLinkProps> = ({ title, link }) => {
  // to simplify
  return (
    <li>
      <Link to={link}>{title}</Link>
    </li>
  );
};

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to={"contant"}>TASKS</Link>
        </div>
        <nav className="nav">
          <ul>
            <ItemLink link={links.links.Home} title="الرئيسية" />
            <ItemLink link={links.links.Contant} title="عن الموقع" />
            <ItemLink link={links.links.Home} title="تواصل" />
            <ItemLink link={links.links.Home} title="تسجيل الدخول" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
