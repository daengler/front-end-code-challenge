import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import HotelContainer from './HotelContainer'

const initialState = {
  hotels: [],
  locationId: '',
  checkin:'',
  checkout:'',
};

function doHotelSearch(locationId, checkin, checkout){
  if (locationId !== ''){
    fetch("http://localhost:9696/api/locations/"+locationId+"/hotels?checkin="+checkin+"&checkout="+checkout).then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        // todo: shouldn't have to call store.dispatch from here, but unclear what is the best way to handle
        store.dispatch({type:'UPDATEHOTELS', hotels: data});
      }
    )
  }
}

function hotelReducer(state = initialState, action){
  var newState = {};
  newState = Object.assign(newState, state);
  switch (action.type) {
    case 'SEARCH':
      doHotelSearch(action.locationId, action.checkin, action.checkout);
      newState = Object.assign(newState, {locationId: action.locationId, checkin: action.checkin, checkout: action.checkout});
      return newState;
    case 'UPDATEHOTELS':
      newState = Object.assign(newState, {hotels: action.hotels});
      return newState;
    default:
      return newState;
  }
}

let store = createStore(hotelReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Hotel Viewer</h1>
        </header>
        <Provider store={store}>
          <HotelContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;
