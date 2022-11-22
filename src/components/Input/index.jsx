import "./Input.css";
export default function Input({ type = "text", placeholder, value }) {
  return (
    <div className="content-input">
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
