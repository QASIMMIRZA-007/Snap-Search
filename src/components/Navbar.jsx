



import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar({ setSearchQuery }) {
  const [query, setQuery] = useState("");
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  const handleCategoryClick = (category) => {
    setQuery(category);
    setSearchQuery(category);
    setQuery("");
    setActiveNavItem(category);
  };

  const handleHomeClick = () => {
    window.location.href = "/";
    setActiveNavItem("Home");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-3">
          <a className="navbar-brand" href="#" onClick={handleHomeClick}>
            Snap Search
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item ${
                  activeNavItem === "Home" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={handleHomeClick}
                >
                  Home
                </Link>
              </li>

              <li
                className={`nav-item ${
                  activeNavItem === "fashion" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleCategoryClick("fashion")}
                >
                  Fashion
                </a>
              </li>
              <li
                className={`nav-item dropdown ${
                  activeNavItem === "Categories" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li
                    className={`dropdown-item ${
                      activeNavItem === "Electronics" ? "active" : ""
                    }`}
                  >
                    <a
                      href="#"
                      onClick={() => handleCategoryClick("Electronics")}
                    >
                      Electronics
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li
                    className={`dropdown-item ${
                      activeNavItem === "Cosmetics" ? "active" : ""
                    }`}
                  >
                    <a
                      href="#"
                      onClick={() => handleCategoryClick("Cosmetics")}
                    >
                      Cosmetics
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li
                    className={`dropdown-item ${
                      activeNavItem === "girls" ? "active" : ""
                    }`}
                  >
                    <a href="#" onClick={() => handleCategoryClick("girls")}>
                      Beauty
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li
                    className={`dropdown-item ${
                      activeNavItem === "black girls" ? "active" : ""
                    }`}
                  >
                    <a
                      href="#"
                      onClick={() => handleCategoryClick("black girls")}
                    >
                      Extra Beauty
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onChange={(e) => setSearchQuery(e.target.value)}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

