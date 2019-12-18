import React, {Component} from 'react';
import Title from './Title'
import List from './List'

export class Main extends Component {
  render(){
    return  <div>
              <Title people ="People"/>
              <List names={["Batman", "Robin"]}/>
              <List names={["Aldon", "Megan"]}/>
            </div>
  }
}

export default Main