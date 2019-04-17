import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NewTaskForm from '../components/NewTaskForm';
import validateInput from '../validation/task';
import { createItem } from '../actions/items';

class NewTaskPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                title: ''
            },
            errors: {},
            loading: false
        };
    }
    onSubmit = async (e) => {
        e.preventDefault();

        const { isValid, errors } = validateInput(this.state.data);
        
        if (isValid) {
            await this.setState({ data: { ...this.state.data }, errors: {}, loading: true });
            this.props.createItem(this.state.data);
            this.props.history.push('/');
        } else {
            await this.setState({ data: { ...this.state.data }, errors, loading: false });
        }
        
    }

    onChange = e => {
        this.setState({ 
            data: { ...this.state.data, [e.target.name]: e.target.value } 
        }); 
    }

    render() { 
        return (
            <div className="content">
                <div className="form-div">
                    <NavLink to="/">View Tasks</NavLink>
                    <NewTaskForm
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        title={this.state.data.title}
                        errors={this.state.errors}
                    />
                </div>              
          </div>
          );
    }
}

export default connect(null, { createItem })(NewTaskPage);