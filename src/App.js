import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';


class App extends Component {
  constructor() {
    super()

    this.state = {
      superheros: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then(response => response.json())
      .then(response => this.setState({superheros : response}))
  }


  render() {
    const {superheros , searchField}=this.state

    return (
      <div className='App'>
      </div>
    )
  }
}

export default App;
