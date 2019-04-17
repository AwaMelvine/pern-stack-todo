import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TodoList from '../components/TodoList';
import { fetchItems, deleteItem } from '../actions/items';

class TodoListPage extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }
    onDelete = id => {       
        this.props.deleteItem(id);
    }
    render() { 
        return (
            <div className="content">
                <div className="list-container">
                <NavLink to="/new-task">+ New Task</NavLink>
                <TodoList
                    items={this.props.items}
                    onDelete={this.onDelete}
                />
                </div>
            </div> 
        );
    }
}
 
function mapStateToProps(state){
    return {
        items: state.items
    };
}

export default connect(mapStateToProps, { fetchItems, deleteItem })(TodoListPage);
