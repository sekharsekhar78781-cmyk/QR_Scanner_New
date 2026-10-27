import { useState, useEffect } from "react";
import API from "../api"
function Menu() {
    const [tableId, setTableId] = useState("1");
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoding] = useState(false);
    const [error, setError] = useState("");

    const fetchMenu = async () => {
        if (!tableId || Number(tableId) < 1) {
            setError("please enter a valid table ID.");
            return;
        }
        setLoding(true);
        setError("");
        try {
            const response = await API.get(`/tables/${tableId}/menu`);
            setMenuItems(response.data);
        }
        catch (err) {
            setError("Failed to load menu. Please check the backend and database connection.");

        }
        finally {
            setLoding(false);
        }
    };
    useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="container">
      <h1> Restaurant Menu</h1>

      <div className="table-form">
        <input
          type="number"
          min="1"
          value={tableId}
          onChange={(e) => setTableId(e.target.value)}
          placeholder="Enter table ID"
        />

        <button onClick={fetchMenu}>View Menu</button>
      </div>

      {loading && <p>Loading menu...</p>}
      {error && <p className="error">{error}</p>}

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

      {!loading && !error && menuItems.length === 0 && (
        <p>No menu items found.</p>
      )}
    </div>
  );
}

export default Menu;



