import React from 'react';
import ReactDOM from 'react-dom';

//React

const tasks = ['Take out the trash', 'Shovel the driveway', 'Walk the dog'];

const taskList = React.createElement('ol', null,
tasks.map((task, index)=> React.createElement('li', {key: index}, task))
)
const element = React.createElement('div', null, taskList)



//ReactDOM.render(element, document.getElementById('root'));

//JSX

const names = ["Alexander", "Bernard", "Charles"]

const JSXelement = <div>
                      <h1> JSX Name list</h1>
                      <ul> 

                      {names.map((name, position) => <li key = {position}> {name} </li>)}
                      
                      </ul>
                    </div>

const myArray= [element, JSXelement]
ReactDOM.render(myArray, document.getElementById('root'));