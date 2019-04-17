import React, { Component } from 'react';

class Task extends Component {
    render() { 
        const { id, title, index, onDelete } = this.props;
        let counter = index;
        return (
            <tr className="item">
                <td>{++counter}</td>
                <td>{title}</td>
                <td style={{ textAlign: 'center' }}>
                    <i className="fas fa-trash delete-btn" onClick={() => onDelete(id)}></i>
                </td>
            </tr>
        );
    }
}
 
export default Task;