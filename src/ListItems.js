import React from 'react';
import './ListItems.css';
import 'font-awesome/css/font-awesome.css';
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const listItems = props.items.map(
        (item) => {
            return (
                <div className="list-item" key={item.key}>
                    <p>
                        <input 
                            type="text" id={item.key} 
                            value={item.text} 
                            onChange={ (e) => {props.setUpdate(e.target.value, item.key)} }
                        />
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
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    );
}

export default ListItems;