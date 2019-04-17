import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NewTaskPage from './pages/NewTaskPage';
import TodoListPage from './pages/TodoListPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={TodoListPage} />
        <Route path="/new-task" component={NewTaskPage} />
      </div>
    );
  }
}

export default App;
