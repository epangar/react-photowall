import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//React

/* const tasks = ['Take out the trash', 'Shovel the driveway', 'Walk the dog'];

const taskList = React.createElement('ol', null,
tasks.map((task, index)=> React.createElement('li', {key: index}, task))
)
const element = React.createElement('div', null, taskList)



ReactDOM.render(element, document.getElementById('root')); */

//JSX


/* const JSXelement = <div>
                      <h1> JSX Name list</h1>
                      <ol> 

                      {names.map((name, position) => <li key = {position}> {name} </li>)}
                      
                      </ol>
                    </div> */



class Title extends Component {
  render(){
    return  <h1> {this.props.people}</h1>;
  }
}

class List extends Component {
  render(){
    return  <ol> 

              {this.props.names.map((name, position) => <li key = {position}> {name} </li>)}
            
            </ol>;
  }
}

class Main extends Component {
  render(){
    return  <div>
              <Title people ="People"/>
              <List names={["Batman", "Robin"]}/>
              <List names={["Aldon", "Megan"]}/>
            </div>
  }
}
ReactDOM.render(<Main/>, document.getElementById('root'));