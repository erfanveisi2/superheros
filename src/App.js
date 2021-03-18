import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  constructor(){
    super()

    this.state={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .then(response=>response.json())
    .then(response=>this.setState({monsters:response}))
  }
}

export default App;
