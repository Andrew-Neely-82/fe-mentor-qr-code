import "./App.scss";
import QRCode from "./assets/image-qr-code.png";

function App() {
  return (
    <>
      <div className="card">
        <img src={QRCode} alt="QR Code" />
        <section>
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </section>
      </div>
    </>
  );
}

export default App;
