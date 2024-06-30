import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";

export default function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li className="l1">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li className="l1">
          <Link
            to="/getPage"
            className={location.pathname === "/getPage" ? "active" : ""}
          >
            Product List
          </Link>
        </li>
        <li className="l1">
          <Link
            to="/postPage"
            className={location.pathname === "/postPage" ? "active" : ""}
          >
            Insert Product 
          </Link>
        </li>
        <li className="l1">
          <Link
            to="/patchPage"
            className={location.pathname === "/patchPage" ? "active" : ""}
          >
            Partial Update Product
          </Link>
        </li>
        <li className="l1">
          <Link
            to="/putPage"
            className={location.pathname === "/putPage" ? "active" : ""}
          >
            Update Product 
          </Link>
        </li>
        <li className="l1">
          <Link
            to="/deletePage"
            className={location.pathname === "/deletePage" ? "active" : ""}
          >
            Delete Product 
          </Link>
        </li>
      </ul>
    </nav>
  );
}
