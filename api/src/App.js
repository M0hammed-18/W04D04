import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cards from './component/Cards';
import About from './component/About';

const App =()=> {
    return (
      <div>
      <Navbar/>
      <Switch>
        <Route exact path ="/"component={Home}/>
        <Route exact path="/Cards" component={Cards}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/"/>
       </Switch>
      
      </div>
    );
  };
  export default App;
