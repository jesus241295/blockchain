import "./Card.css";
import { CiCircleAlert } from "react-icons/ci";
export default function Card(props) {
  return (
    <section className="content-card">
      <div className="content-icons">
        <CiCircleAlert />
      </div>
      <div className="content-money">
        <p>{props.amount}</p>
        <p className="text">{props.detail}</p>
      </div>
    </section>
  );
}
