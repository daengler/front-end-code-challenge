import React, { Component } from 'react';

class Hotels extends Component {

  constructor(props) {
    super(props);
    let { locationId, checkin, checkout } = this.props;
    this.state = {
        hotels: [],
        locationId: locationId,
        checkin: checkin,
        checkout: checkout,
    };
  }

  componentWillMount() {
    console.log(this.state);
  }

  render() {
    console.log('Hotels render');

    if (this.state.locationId !== ''){
      fetch("http://localhost:9696/api/locations/"+this.state.locationId+"/hotels?checkin="+this.state.checkin+"&checkout="+this.state.checkout).then(
        response => {
            return response.json();
        }
      ).then(

        data => {
            console.log(data);

            let hotels = data.map((hotel) => {
                return (
                    <div key={hotel.id} className="hotel">
                        {hotel.name}
                    </div>
                )
            })
            this.setState({hotels: hotels});
        }
      )

    }
    return (
        <div className="hotels">
            {this.state.hotels}
        </div>

    );
  }

  
}

export default Hotels;
