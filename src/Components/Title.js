import React, {Component} from 'react';
import '../styles/styles.css';

function Title(props){
  return  <h1 className="font-face"> {props.name}</h1>;
}

// export class Title extends Component {
//   render(){
//     return  <h1 className="font-face"> {this.props.name}</h1>;
//   }
// }

export default Title