import React from 'react';
import './App.css'


class App extends React.Component{
constructor(){
  super()
  this.state = {
    email: '',
    surname: '',
    name: '',
    pass: ''
  }
}

logEvent(event){
  console.log(event)
}
componentDidMount(){
  console.log('on')
  let wh = window.innerHeight
  console.log(wh)
  this.refs.container.style.height = wh+'px'
}

render(){
  return(
    <center>
    <div id='container' ref='container'>
    <table id='main-table'>
    <tbody>
      <tr>
          <td id='left'>
          <h2>One</h2>
          </td>

          <td id='right'>
          <h2>Two</h2>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    </center>
  )
}

}

export default App;
