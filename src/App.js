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
}

export default App;
