import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Hotels from './Hotels';
import { createStore } from 'redux'

const initialState = {
  hotels: [],
  locationId: '',
  checkin:'',
  checkout:'',
};

function doSearch(locationId, checkin, checkout){
  if (locationId !== ''){
    fetch("http://localhost:9696/api/locations/"+locationId+"/hotels?checkin="+checkin+"&checkout="+checkout).then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        store.dispatch({type:'UPDATEHOTELS', hotels: data});
      }
    )
  }
}


function appState(state = initialState, action){
  var newState = {};
  newState = Object.assign(newState, state);
  switch (action.type) {
    case 'SEARCH':
      doSearch(action.locationId, action.checkin, action.checkout);
      newState = Object.assign(newState, {locationId: action.locationId, checkin: action.checkin, checkout: action.checkout});
      return newState;
    case 'UPDATEHOTELS':
      newState = Object.assign(newState, {hotels: action.hotels});
      return newState;
    default:
      return newState;
  }
}

let store = createStore(appState);

class App extends Component {

  constructor(props) {
      super(props);
      this.state = initialState;
      this.handleSearch = this.handleSearch.bind(this)

      store.subscribe(() => {
          this.setState(store.getState());
        }
      )
  }

  handleSearch(searchState) {
    store.dispatch({type:'SEARCH', locationId: searchState.locationId, checkin: searchState.checkin, checkout: searchState.checkout});
  }

  render() {
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
