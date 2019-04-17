import React, { Component } from 'react';

class NewTaskForm extends Component {
    render() { 
        const { onSubmit, onChange, title, errors } = this.props;
        return (
            <form method="post" className="clearfix" onSubmit={onSubmit}>
                <h2 className="form-title">Add Item</h2>
                <div className="form-error">{errors.title}</div>
                <div>
                    <input 
                        type="text" 
                        className={`text-input ${errors.title ? 'input-error' : '' }`}
                        onChange={onChange} 
                        value={title} 
                        name="title" 
                        id="task-input"
                    />
                </div>
                <div>
                    <button type="submit" className="btn">+</button>
                </div>
            </form>
        );
    }
}
 
export default NewTaskForm;