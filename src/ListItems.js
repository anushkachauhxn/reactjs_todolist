import React from 'react';
import './ListItems.css';
import 'font-awesome/css/font-awesome.css';

function ListItems(props) {
    const listItems = props.items.map(
        (item) => {
            return (
                <div className="list-item" key={item.key}>
                    <p>
                        {item.text}
                        <span 
                            className="fa fa-trash" 
                            onClick={ () => {props.deleteItem(item.key)} }
                        />
                    </p>
                </div>
            );
    });
    return (
        <div>
            {listItems}
        </div>
    );
}

export default ListItems;