import React from 'react';

class ToDoList extends React.Component {
    handleChange({target}) {
        if (target.checked) {
            target.removeAttribute('checked');
            target.parentNode.style.textDecoration = "line-through";
            target.parentNode.style.color = "red";
        } else {
            target.setAttribute('checked', true);
            target.parentNode.style.textDecoration = "";
            target.parentNode.style.color = "#61DAFB";
        }
    }

    render () {
        let style={};
        if (this.props.done) {
            style={textDecoration: "line-through", color: "red"}
        } else {
            style={textDecoration: "", color: "#61DAFB"}
        }

        return(
            <li className="list-group-item ">
                <div style={style}>

                    <input type="checkbox" onClick={this.handleChange} defaultChecked={this.props.done}/>
                    {this.props.value}
                    <button type="button" className="close" onClick={this.props.deleteItem}>&times;</button>
                </div>
            </li>
        );
    }
}

export default ToDoList;