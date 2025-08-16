
import "./List.css"

function List(props) {
    const items = props.item;
    const category = props.category;
    return (
        <div className="list-container">
            <h3 className="category-title">{category}</h3>
            <div className="cards">
                {items.map((item, index) => (
                    <div className="card" key={index}>
                        <h2 className="name">{item.name}</h2>
                        <p className="scientific">{item.scientificname}</p>
                        <p className="weight">{item.averageWeight}Kg</p>
                        <p className="diet">{item.eat}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default List;