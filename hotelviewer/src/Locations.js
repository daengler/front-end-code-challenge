import React, { Component } from 'react';

class Locations extends Component {

  constructor(props) {
      super(props);
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
          console.log(data);

          let locations = data.map((loc) => {
              return (
                  <li key={loc.id} className="location">
                      {loc.name} (<i>{loc.full_name}</i>)
                  </li>
              )
          })
          this.setState({locations: locations});
      }
    )
  }

  render() {
    return (
      <div className="locations">
          <ul>
          {this.state.locations}
          </ul>
      </div>
    );
  }
}

export default Locations;
