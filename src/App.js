import "./App.css";
import qr from "./images/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div className="rounded-panel">
        <img src={qr} alt="qr" />
        <div className="bold-text">
          Imporve your front-end skills by building projects
        </div>
        <div className="text">
          Scan the QR code to visite Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
}

export default App;
