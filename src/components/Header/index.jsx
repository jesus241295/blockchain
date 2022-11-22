import "./Header.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import Button from "../Button";
export default function Header() {
  return (
    <div className="container">
      <div>
        <img src={logo} alt="image-logo" className="logo" />
      </div>
      <div className="content-button">
        <Button text="New Product" />
        <div className="content-avatar">
          <a href="" className="text">
            My Wallet
          </a>
          <div className="content-photo">
            <img src={avatar} alt="img-avatar" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
