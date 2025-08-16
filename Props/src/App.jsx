import { useState } from "react";
import Items from "./item";
import "./App.css";

function App() {
  const data = [
    { name: "Apple", price: 1, Stack: true, type: "Fruits" },
    { name: "DragonFruit", price: 1, Stack: true, type: "Fruits" },
    { name: "PassionFruit", price: 2, Stack: false, type: "Fruits" },
    { name: "Spinach", price: 2, Stack: true, type: "Vegetable" },
    { name: "PumpKin", price: 4, Stack: false, type: "Vegetable" },
    { name: "Peas", price: 1, Stack: true, type: "Vegetable" },
  ];

  const [searchTrem, setSearchTerm] = useState("");
  const [showStackOnly, setShowStackOnly] = useState(false);

  const filteredData = data.filter((item) =>{
    const matchesSearch = item.name.toLowerCase().includes(searchTrem.toLowerCase())
    const matchesStack = showStackOnly ? item.Stack === true : true;
    return matchesSearch && matchesStack;
  });

  return (
    <div className="app-container">
      <div className="content">
        <input className="Search" type="text" placeholder="Search" value={searchTrem}
          onChange={(e) => setSearchTerm(e.target.value)} />
          <br />

        <label style={{marginLeft:"10px"}}>
          <input 
            type="checkbox"
            checked={showStackOnly}
            onChange={(e)=>setShowStackOnly(e.target.checked)}
           />
           Show only available items
        </label>
        <table className="item-table">
          <tbody>
            {filteredData.length > 0 ? (
              <Items userData={filteredData} />
            ) : (
              <tr>
                <td colSpan="2" style={{ color: "red", textAlign: "center" }}>
                  Item not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

}
export default App;