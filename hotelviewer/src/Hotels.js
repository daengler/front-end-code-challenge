import React, { Component } from 'react';
import './Hotels.css';

class Hotels extends Component {

  


  render() {
    let hotelList = this.props.hotels.map((hotel) => {
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
          {this.props.hotels.length} hotels found
        </div>
        <div className="hotels">
          {hotelList}
        </div>
      </div>
    );
  }
}

export default Hotels;
