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
}

render(){
  return(
    <center>
    <table id='main-table'>
    <tbody>
      <tr>
          <td id='left'>

          </td>

          <td id='right'>

          </td>
        </tr>
      </tbody>
    </table>
    </center>
  )
}

}

export default App;
