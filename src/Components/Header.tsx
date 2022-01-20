// Import From Lib
import React from "react";
import { Link } from "react-router-dom";

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
        <div className="logo">Tasks</div>
        <nav className="nav">
          <ul>
            <ItemLink link="/الرئيسية" title="الرئيسية" />
            <ItemLink link="/عن الموقع" title="عن الموقع" />
            <ItemLink link="/تواصل" title="تواصل" />
            <ItemLink link="/تسجيل الدخول" title="الرئيسية" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
