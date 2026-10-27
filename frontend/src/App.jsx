import { useState } from "react";
import Menu from "./Components/Menu"
import QRCodePage from "./Components/QRCodepage"
import Dashboard from "./Components/Dashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("menu");

  return (
    <>
      <nav className="navbar">
              <h2>QR Restaurant</h2>
              <Dashboard />;

        <button onClick={() => setPage("menu")}>Menu</button>
        <button onClick={() => setPage("qr")}>Generate QR</button>
      </nav>

      {page === "menu" ? <Menu /> : <QRCodePage />}
    </>
  );
}

export default App;