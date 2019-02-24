import React, { Component } from 'react';
import { Input } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: null
    };
    this.handleName = this.handleName.bind(this);
  }

  handleName = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        {
          this.state.name ?
          <h1 className="name">{this.state.name}</h1> :
          <div className="empty"/>
        }
          <div style={{width: '50%'}}>
            <Input className="form" placeholder="Enter your name" onChange={this.handleName} />
          </div>
      </div>
    );
  }
}

export default App;
