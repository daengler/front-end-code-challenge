import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Hotels from './Hotels';


class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        hotels: [],
        locationId: '',
        checkin:'',
        checkout:'',
      };
      this.handleSearch = this.handleSearch.bind(this)
  }



  handleSearch(searchState) {
    this.setState({locationId: searchState.locationId, checkin: searchState.checkin, checkout: searchState.checkout});

    if (searchState.locationId !== ''){
      fetch("http://localhost:9696/api/locations/"+searchState.locationId+"/hotels?checkin="+searchState.checkin+"&checkout="+searchState.checkout).then(
        response => {
            return response.json();
        }
      ).then(

        data => {
            this.setState({hotels: data});
        }
      )

    }
  }


  render() {
    console.log('App render ');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Hotel Viewer</h1>
        </header>
        <SearchForm handleSearch={this.handleSearch}/><br/>
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
