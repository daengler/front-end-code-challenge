import React, { Component } from 'react';
import './App.css';
import Locations from './Locations';
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
        <Locations/>
        <SearchForm handleSearch={this.handleSearch.bind(this)}/>
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
