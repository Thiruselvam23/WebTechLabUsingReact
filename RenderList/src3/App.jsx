
import List from "./List.jsx";
function App() {

    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Orange", calories: 45 },
        { id: 3, name: "Banana", calories: 105 },
        { id: 4, name: "Pineapple", calories: 37 }
    ];

    const Vegetable = [
        { id: 1, name: "Bringal", calories: 25 },
        { id: 2, name: "Potato", calories: 145 },
        { id: 3, name: "Radish", calories: 16 },
        { id: 4, name: "Cabbage", calories: 25 }
    ];

    return (
        <div className="main-container">
            <h1 className="title">RENDER LISTS</h1>
            <div className="container">
                {fruits.length > 0 && <List item={fruits} categories={"Fruits"} />}
                {Vegetable.length > 0 && <List item={Vegetable} categories={"Vegetable"} />}
            </div>
        </div>
    );

}
export default App;