import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


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

    handleChange=(e)=>{
    this.setState({searchField: e.target.value})
  }


  render() {
    const {superheros , searchField}=this.state
    const filteredSuperheros = superheros.filter(
      superhero=>superhero.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
      <h1>superheros</h1>
      <SearchBox placeholder='search superheros' handleChanges={this.handleChange}/>
      <CardList superheros={filteredSuperheros}/>
      </div>
    )
  }
}

export default App;
