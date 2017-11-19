import React, { Component } from 'react';
import './Hotels.css';

class Hotels extends Component {

  constructor(props) {
    super(props);
    let { hotels } = this.props;
    this.state = {
        hotels: hotels,
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
        hotels: nextProps.hotels,
    });
  }

  render() {
    let hotelList = this.state.hotels.map((hotel) => {
      return (
        <div key={hotel.id} className="hotel">
            <b>{hotel.name}</b> ({'*'.repeat(hotel.stars)})<br/>
            {hotel.short_description}<br/>
        </div>
      )
    })
    return (
      <div className="hotelresults">
        <div className="resultsize">
          {this.state.hotels.length} hotels found
        </div>
        <div className="hotels">
          {hotelList}
        </div>
      </div>
    );
  }
}

export default Hotels;
