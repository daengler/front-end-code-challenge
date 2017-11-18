import React, { Component } from 'react';

class LocationOptions extends Component {

  constructor(props) {
    super(props);
    let { handleChange } = this.props;
    this.handleChange = handleChange.bind(this);

    this.state = {
        locations: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:9696/api/locations/").then(
      response => {
          return response.json();
      }
    ).then(

      data => {
          let locations = data.map((loc) => {
              return (
                  <option key={loc.id} value={loc.id} >
                      {loc.name}
                  </option>
              )
          })
          this.setState({locations: locations});
      }
    )    
  }

  render() {
    return (
        <select name="locationId" onChange={this.handleChange}>
            {this.state.locations}
        </select>
    );
  }
}

export default LocationOptions;
