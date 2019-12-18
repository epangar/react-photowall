import React, {Component} from 'react';

export class Title extends Component {
  render(){
    return  <h1> {this.props.people}</h1>;
  }
}

export default Title