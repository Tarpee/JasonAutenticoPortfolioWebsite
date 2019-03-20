import React, { Component } from 'react';
import './App.css';
import {  Card, CardText, CardTitle, CardActions,  } from 'react-mdl';
import { Spring } from 'react-spring/renderprops';
import {  Link } from 'react-router-dom'
import {  Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';


const c1Style = {
    background: 'steelblue',
    color: 'white',
    
  }



class RealApp extends Component {
  
  render() {
    return (

      <div className="App">
     
   
      <Spring
  
  

  from={{opacity:0, marginLeft:-1000}}
  to={{opacity: 1,marginLeft:0}}>

    { props=>(
      <div style={props}>
      <div style={c1Style}>

     
      <Card shadow={6} style={{width: '800px', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '70px', background: 'url(https://c1.staticflickr.com/1/83/263570357_e1b9792c7a_b.jpg) center / cover'}}>Hi</CardTitle>
  <center><CardText >
       My name is Jason and I make websites look good.
  </CardText></center>
  <CardActions border>
      <Link to="/Page1" style={{ textDecoration: 'none' }} >About Me</Link>
  </CardActions>
 
</Card>


      </div>
      </div>
    )}
  </Spring>
     


  <Spring
  
  

  from={{opacity:0, marginRight:-1000}}
  to={{opacity: 1,marginRight:0}}>

    { props=>(
      <div style={props}>
      <div style={c1Style}>

     
      <Card shadow={6} style={{width: '800px', margin: 'auto'}}>
  <CardTitle style={{color: '#fff', height: '70px', background: 'url(https://farm8.staticflickr.com/7029/6468176623_774093253c_o.jpg) center / cover'}}>My Skills</CardTitle>
  <center><CardText>
     These are the skills I do
  </CardText></center>
  <CardActions border>
  <Link to="/Page2" style={{ textDecoration: 'none' }} >Skills</Link>
  </CardActions>
</Card>

      </div>
      </div>
    )}
  </Spring>
  <Spring
  from={{opacity:0, marginLeft:-1000}}
  to={{opacity: 1,marginLeft:0}}>

    { props=>(
      <div style={props}>
      <div style={c1Style}>
      <Card shadow={6} style={{width: '800px', margin: 'auto'}}>
  <CardTitle style={{color: '#fff', height: '70px', background: 'url(https://farm8.staticflickr.com/3666/9486407709_150140626e_o.jpg) center / cover'}}>My Knowledge</CardTitle>
  <center><CardText>
     What I know
  </CardText></center>
  <CardActions border>
    <Link to="/Page3"style={{ textDecoration: 'none' }} >Education</Link>
  </CardActions>
</Card>
      </div>
      </div>
    )}
  </Spring>
  <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <Link to="/Page1" style={{ textDecoration: 'none' }}>About me</Link>
                <Link to="/Page2" style={{ textDecoration: 'none' }}>Skills</Link>
                <Link to="/Page3" style={{ textDecoration: 'none' }}>Experience</Link>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="">
            <FooterLinkList>
            <i className="far fa-grin fa-3x"></i>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="">
            <FooterLinkList>
            <i className="far fa-grin-beam fa-3x"></i>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <Link to="/Page2" style={{ textDecoration: 'none' }}>Javascript</Link>
                <Link to="/Page2" style={{ textDecoration: 'none' }}>HTML5</Link>
                <Link to="/Page2" style={{ textDecoration: 'none' }}>CSS3</Link>           
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Front-End">    
    </FooterSection>
</Footer>
   
   
   Copyright © 2019, 
   &nbsp;
    site made with React

      </div>
    );
  }
}

export default RealApp;
