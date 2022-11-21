import { CiShop, CiHome } from "react-icons/ci";

export default function Navbar() {
  return (
    <div>
      <h3>
        <CiHome size="2rem" color="blue" />
      </h3>
      <h3>
        <CiShop size="2rem" color="blue" />
      </h3>
    </div>
  );
}
