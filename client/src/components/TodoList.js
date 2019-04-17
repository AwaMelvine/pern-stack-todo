import React, { Component } from 'react';
import Task from './Task';

class TodoList extends Component {
    renderItems() {
        const { items, onDelete } = this.props;
        const itemsDisplay = items.map((item, index) => <Task 
                                                            key={item.id}
                                                            {...item}
                                                            onDelete={onDelete} index={index} 
                                                            />);
        return itemsDisplay;
    }

    render() { 
        return (
            <div>
                <h3 className="table-title">Tasks</h3>
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Task</th>
                            <th>Action</th>   
                        </tr>
                    </thead>
                    <tbody>

                        {this.renderItems()}

                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default TodoList;