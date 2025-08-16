import React from "react";
import "./item.css";

function Items(props) {
    const SeperatedData = props.userData.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});
    return (
        <>
            {Object.keys(SeperatedData).map((category) => (
                <React.Fragment key={category}>
                    <h3>{category}</h3>
                    {SeperatedData[category].map((item, index) => (
                        <tr key={index}>
                            <td style={{ color: item.Stack ? "black" : "red" }}>{item.name}</td>
                            <td>${item.price}</td>
                        </tr>
                    ))}
                </React.Fragment>
            ))}
        </>
    );
}

export default Items;