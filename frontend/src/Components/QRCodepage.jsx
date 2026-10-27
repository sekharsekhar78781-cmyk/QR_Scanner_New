import { useState } from "react";
import API from "../api"

function QRCodePage() {
  const [tableId, setTableId] = useState("1");
  const [qrUrl, setQrUrl] = useState("");
  const [error, setError] = useState("");

  const generateQR = async () => {
    if (!tableId || Number(tableId) < 1) {
      setError("Please enter a valid table ID.");
      return;
    }

    try {
      setError("");

      const response = await API.get(
        `/tables/${tableId}/qr`,
        { responseType: "blob" }
      );

      const imageUrl = URL.createObjectURL(response.data);
      setQrUrl(imageUrl);
    } catch (err) {
      setError("QR generate avvaledu. Backend check cheyyi.");
    }
  };

  return (
    <div className="container">
      <h1>QR Code Generator</h1>

      <input
        type="number"
        min="1"
        value={tableId}
        onChange={(e) => setTableId(e.target.value)}
        placeholder="Enter table ID"
      />

      <button onClick={generateQR}>Generate QR</button>

      {error && <p className="error">{error}</p>}

      {qrUrl && (
        <div>
          <h3>Table {tableId} QR Code</h3>
          <img src={qrUrl} alt="Table QR Code" width="220" />
          <p>
            <a href={qrUrl} download={`table-${tableId}-qr.png`}>
              Download QR Code
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default QRCodePage;