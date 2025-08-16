
import PropTypes from "prop-types";

function List(props) {
    const itemList = props.item;
    const categories = props.categories;
    const ListItem = itemList.map(item => <li key={item.id}>{item.name} : {item.calories}</li>
    );
    return (
        <div className="list-box">
            <h3 className="list-categories">{categories}</h3>
            <ol className="List-item">{ListItem}</ol>
        </div>
    );
}

List.propTypes = {
    categories: PropTypes.string,
    item : PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
        name:PropTypes.string,
        calories:PropTypes.number,
    })),
} 

List.defaultProps = {
    categories: "categories",
    item: [],
}
export default List