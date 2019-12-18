import React, {Component} from 'react';

export class List extends Component {
  render(){
    return  <ol> 

              {this.props.names.map((name, position) => <li key = {position}> {name} </li>)}
            
            </ol>;
  }
}

export default List