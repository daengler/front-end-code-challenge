import React, { Component } from 'react';

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
    console.log('Hotels render');
    let hotelList = this.state.hotels.map((hotel) => {
        return (
            <div key={hotel.id} className="hotel">
                {hotel.name}
            </div>
        )
    })
    return (
        <div className="hotels">
            {hotelList}
        </div>

    );
  }


}

export default Hotels;
