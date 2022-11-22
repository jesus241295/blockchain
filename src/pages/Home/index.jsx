import Card from "../../components/Card";
import Input from "../../components/Input";
import "./Home.css";
export default function Home() {
  return (
    <div className="content-home">
      <div className="title-text">
        {" "}
        <p className="title-welcome">Welcome, UserName</p>
        <div className="content-input-text">
          <a href="">www./blockchain.com</a>
          <Input placeholder="www./blockchain.com/front-end/" />
        </div>
      </div>
      <section className="card">
        <Card amount="40.1546" detail="Increased 1.3% from last month" />
        <Card amount="1,300" detail="Increased 1.3% from last month" />
      </section>
    </div>
  );
}
