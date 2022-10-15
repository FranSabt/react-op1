import React, { Component } from 'react';
import ContactContainer from './components/container/ContactContainer';
import TaskListComponent from './components/container/TaskListComponent';
// import Greetings from './Components/pure/greetings';
// import { FGreeting } from './components/FGreeting';


class App extends Component {

  render() {
    return (
      <div className="App">
      {/* <Greetings gata={'Lagata'}/> */}
      {/* <FGreeting gata={'Lagata'}/> */}
      <h1>Hola Mundo</h1>
      <TaskListComponent/>
      <ContactContainer/>
      </div>
    );
  }
}

export default App;
