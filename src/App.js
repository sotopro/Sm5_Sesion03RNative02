import React from 'react'
import { Switch, Route } from "react-router-dom";
import {Home}  from './components/Home'
import { AddEmployee } from './components/AddEmployee'
import { GlobalProvider  } from './context/GlobalState'
import './stylesheet/styles.css'
import './stylesheet/tailwind.output.css'

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/add" component={AddEmployee} exact/>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
