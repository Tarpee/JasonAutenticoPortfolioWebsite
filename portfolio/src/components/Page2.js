import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import '../App.css';

 class Page2 extends Component {
  render() {
    return (
      <div >
      <div className='page2'>

        

      <div style={{width: '80%', margin: 'auto'}}>
        <Grid className="demo-grid-1">
        <Cell col={2}></Cell>
        <Cell col={8}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h6>Exceptional skills at</h6>
        <h4>JavaScript</h4>
        <h4>React</h4>
       <h4>HTML5</h4>
        <h4>CSS3</h4>
       <h4>C++</h4>
       <h4>Git and Github</h4>
       <h4>Photoshop</h4>
       <h4>MS Office Word</h4>

        </Cell>
        <Cell col={2}></Cell>
    </Grid>
       </div>

</div>

      </div>
    )
  }
}

export default Page2
