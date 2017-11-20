import React, { Component } from 'react';
import { connect } from 'react-redux'
import Hotels from './Hotels'
import SearchForm from './SearchForm'

class HotelContainer extends Component {

  render() {
    return (
      <div className="HotelContainer">
        <SearchForm onDoSearch={this.props.onDoSearch} /><br/>
        <Hotels hotels={this.props.hotels} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotels: state.hotels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDoSearch: searchFilter => {
      dispatch({type:'SEARCH', locationId: searchFilter.locationId, checkin: searchFilter.checkin, checkout: searchFilter.checkout});
    }
  }
}

HotelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelContainer)

export default HotelContainer
