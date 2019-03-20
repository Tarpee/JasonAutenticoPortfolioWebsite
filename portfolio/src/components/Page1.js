import React, { Component } from 'react'
import selfpic from '../pics/selfpic.jpg'
import { Grid, Cell } from 'react-mdl';

class Page1 extends Component {
  render() {
    return (
      <div>
 <div className='page1'>

<img src={selfpic} alt="selfpic" />
<br />

        <h6>About me</h6>
       
       
        <div style={{width: '80%', margin: 'auto'}}>
        <Grid className="demo-grid-1">
        <Cell col={3}></Cell>
        <Cell col={6}>
       
        <h6 >" Front-End Developer with a strong sense of design aesthetic,
         loves to code and design Apps for both mobile devices and browsers,
         works well under deadlines and can work on single or team projects,
         also loves to continously learn all sorts of cool stuff about making
         the internet a more user-engaging and satisfaction-enhancing experience,
         likes to draw art which will further enhance aesthetic skills for making front end UI's."



        </h6>

     

        </Cell>
        <Cell col={3}></Cell>
    </Grid>
       </div>






    </div>
      </div>
    )
  }
}

export default Page1
