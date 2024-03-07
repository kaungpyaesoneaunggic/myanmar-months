import React from "react";
import "./SideNavBar.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function SideNavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav column">
        <div className="logo">
          <li className="logo">
            <a href="#" className="nav-link">
              <span className="link-text logo-text">Myanmar Months</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
        </div>
        <div>
          <li className="nav-item">
            <Link to="1" className="nav-link">
              <span className="link-text">တန်ခူး</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="2" className="nav-link">
              <span className="link-text">ကဆုန်</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="3" className="nav-link">
              <span className="link-text">နယုန်</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="4" className="nav-link">
              <span className="link-text">ဝါဆို</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="5" className="nav-link">
              <span className="link-text">ဝါခေါင်</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="6" className="nav-link">
              <span className="link-text">တော်သလင်း</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="7" className="nav-link">
              <span className="link-text">သီတင်းကျွတ်</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="8" className="nav-link">
              <span className="link-text">တန်ဆောင်မုန်း</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="9" className="nav-link">
              <span className="link-text">နတ်တော်</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="10" className="nav-link">
              <span className="link-text">ပြာသို</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="11" className="nav-link">
              <span className="link-text">တပို့တွဲ</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="12" className="nav-link">
              <span className="link-text">တပေါင်း</span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
