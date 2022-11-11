import React, { Component } from 'react';
import Clock from './components/Clock';
import CloclFuncioional from './components/CloclFuncioional';
// import Ejempl4 from './hooks/Ejempl4';
// import AllCycles from './hooks/lifeCycle/AllCycles';
// import { DidMount, DidMountHook } from './hooks/lifeCycle/DidMount';
// import { DidUpdate, DidUpdateHook } from './hooks/lifeCycle/DidUpdate';
// import Ejemp2 from './hooks/Ejemp2';
// import ContactContainer from './components/container/ContactContainer';
// import TaskListComponent from './components/container/TaskListComponent';
// import Ejemp1 from './hooks/Ejemp1';
// import Greetings from './Components/pure/greetings';
// import { FGreeting } from './components/FGreeting';
// import ComponenteConContexto from './hooks/Ejemplo3'


class App extends Component {

  render() {
    return (
      <div className="App">
      {/* <Greetings gata={'Lagata'}/> */}
      {/* <FGreeting gata={'Lagata'}/> */}
      <h1>Hola Mundo</h1>
      {/* <TaskListComponent/>
      <ContactContainer/> */}
      {/* <Ejemp1/> */}
      {/* <Ejemp2/> */}
      {/* <ComponenteConContexto/> */}
      {/* <Ejempl4 name={'LaGata'}>
        <h4>Lorem</h4>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </Ejempl4>
      <DidMount/>
      <DidMountHook/>
      <DidUpdate/>
      <DidUpdateHook/> */}
      {/* <AllCycles/> */}
      {/* <Clock/>       */}
      <CloclFuncioional/>
      </div>
    );
  }
}

export default App;
