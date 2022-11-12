import React, { Component } from 'react';
import Hello from './Components/hello';
import { MyContext } from './Components/context';
// import { render } from 'react-dom'
// import Test from './Components/test';
import './App.css';

// const MyContext = React.createContext({});

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: `React`,
      count: 1
    };
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }

  decrement = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <MyContext.Provider value={{count: this.state.count, increment: this.increment, decrement: this.decrement}}>.
        <div>
          <Hello count={this.state.count} />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
