import React, { Component } from 'react';
import './App.css';
import Locations from './Locations';
import SearchForm from './SearchForm';
import Hotels from './Hotels';


class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        locationId: '',
        checkin:'',
        checkout:'',
      };


  }


  handleSearch(searchState) {
    console.log('in app, search state');
    console.log(searchState);
    this.setState({locationId: searchState.locationId, checkin: searchState.checkin, checkout: searchState.checkout});
    console.log(this.state);
  }


  render() {
    console.log('App render ');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Hotel Viewer</h1>
        </header>
        <Locations/>
        <SearchForm handleSearch={this.handleSearch}/>
        <Hotels locationId={this.state.locationId} checkin={this.state.checkin} checkout={this.state.checkout} />
      </div>
    );
  }
}

export default App;
