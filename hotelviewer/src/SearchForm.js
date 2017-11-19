import React, { Component } from 'react';
import LocationOptions from './LocationOptions';


class SearchForm extends Component {


constructor(props) {
    super(props);
    this.state = {
      locationId: 'charlottesville',
      checkin:'2016-05-02',
      checkout:'2016-05-04',
    };
    let { handleSearch } = this.props;
    this.handleSearch = handleSearch;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.handleSearch(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <LocationOptions handleChange={this.handleChange} defaultLocationId={this.state.locationId}/>&nbsp;
         Check In: <input name="checkin" type="text" onChange={this.handleChange} value={this.state.checkin}/>&nbsp;
         Check Out: <input  name="checkout" type="text" onChange={this.handleChange}  value={this.state.checkout}/>&nbsp;
         <input type="submit" value="Submit" />
      </form>
    );
  }





}

export default SearchForm;
