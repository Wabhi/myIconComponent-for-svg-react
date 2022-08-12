import "./styles.css";
import MyIconComponent from "./MyIconComponent";
export default function App() {
  return (
    <div className="App">
      <h1>MY ICONS COMPONENT</h1>
      <div className="icons">
        <MyIconComponent type="one" size="small" />
        <MyIconComponent type="two" size="medium" />
        <MyIconComponent type="three" size="large" />
        <MyIconComponent type="four" size="extra-large" />
      </div>
    </div>
  );
}
