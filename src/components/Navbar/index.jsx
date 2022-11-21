import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { CiShop, CiHome, CiSquareMore, CiUser } from "react-icons/ci";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [itemActive, setItemActive] = useState(null);
  const isActive = (itemNumber) => itemNumber === itemActive;
  return (
    <div>
      <div className="content-navbar">
        <nav className="content-nav">
          <ul>
            <Link to="/">
              <li
                onClick={() => setItemActive(1)}
                className={`${isActive(1) ? "active" : "inActive"}`}
              >
                <a onClick={() => navigate("/")} className="link">
                  <CiHome />
                </a>
              </li>
            </Link>
            <Link to="/Store">
              <li
                onClick={() => setItemActive(2)}
                className={`${isActive(2) ? "active" : "inActive"}`}
              >
                <a onClick={() => navigate("/Store")} className="link">
                  <CiShop />
                </a>
              </li>
            </Link>
            <Link to="/Personalize">
              <li
                onClick={() => setItemActive(3)}
                className={`${isActive(3) ? "active" : "inActive"}`}
              >
                <a onClick={() => navigate("/Personaliza")} className="link">
                  <CiSquareMore />
                </a>
              </li>
            </Link>
            <Link to="/Profile">
              <li
                onClick={() => setItemActive(4)}
                className={`${isActive(4) ? "active" : "inActive"}`}
              >
                <a onClick={() => navigate("/Profile")} className="link">
                  <CiUser />
                </a>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
