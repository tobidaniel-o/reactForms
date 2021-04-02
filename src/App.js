import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="wrapper" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        {/**
         * Other useful form elements:
         *
         *  <textarea /> element
         *  <input type="checkbox" />
         *  <input type="radio" />
         *  <select> and <option> elements
         */}
        <textarea value={"Some default value"} onChange={this.handleChange} />
        <br />
        <label htmlFor="">
          <input
            name="isFriendly"
            type="checkbox"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is Friendly
        </label>
        <br />
        <label htmlFor="">
          <input
            name="gender"
            type="radio"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
            value="male"
          />
          Male
        </label>
        <br />
        <label htmlFor="">
          <input
            name="gender"
            type="radio"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
            value="female"
          />
          Female
        </label>
        {/* Formik: this is an API that helps to deal with forms much easier*/}
        <br/>
        <label htmlFor="">Favorite Color:</label>
        <select
          name=""
          id=""
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="" disabled>Choose one</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
