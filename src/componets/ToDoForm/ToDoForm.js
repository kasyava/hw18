import React from 'react';


class ToDoForm extends React.Component {


    render () {
        return (
            <div className="form-container">
                <form  className="form-inline">
                    <input type="text" className="form-control" placeholder="add a new todo..."
                           onChange={this.props.changeTask}
                           value={this.props.value}
                    />
                    <button type="submit" className="btn btn-primary" onClick={this.props.sendItem}>Add</button>
                </form>
            </div>
        );
    }
}

export default ToDoForm;