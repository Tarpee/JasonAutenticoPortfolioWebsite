import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import RealApp from './RealApp'
import { Route, Switch, Link , BrowserRouter as Router } from 'react-router-dom'
import {  Header } from 'react-mdl';






class App extends Component {
  render() {
    return (

      <div className="App">
{/* edit below so that the white line and Real app disappears*/ }
<div style={{height: '65px', position: 'relative'}}>
  
<Header title={<span><span style={{ color: 'white' }}></span><strong>Jason Autentico</strong> </span>}>
 
<center><h3 className="app-proxy">Front End Developer</h3></center>

<h5>jaso.auten@gmail.com</h5>
</Header>
</div>


     


<Router>
<Switch>
<div>
    <Link to="/" style={{ textDecoration: 'none' }} > Main  </Link> 
 &nbsp;
 &nbsp;
    <Link to="/Page1" style={{ textDecoration: 'none' }}>   About Me  </Link>
 &nbsp;
 &nbsp;
     <Link to="/Page2" style={{ textDecoration: 'none' }}>   Skills   </Link> 
 &nbsp;
 &nbsp;
    <Link to="/Page3" style={{ textDecoration: 'none' }}>  Education    </Link>  
{/* below is the navbar that hs the links */}

<Route exact path="/" component={RealApp}/>
<Route path="/Page1" component={Page1} /> 
<Route path="/Page2" component={Page2} /> 
<Route path="/Page3" component={Page3} />
</div>
</Switch>
</Router>
      </div>
    );
  }
}

export default App;
