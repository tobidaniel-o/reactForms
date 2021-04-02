// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly: true,
//       gender: "",
//       favColor: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const { name, value, type, checked } = event.target;
//     type === "checkbox"
//       ? this.setState({ [name]: checked })
//       : this.setState({ [name]: value });
//   }

//   render() {
//     return (
//       <form className="wrapper" onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.firstName}
//           name="firstName"
//           placeholder="First Name"
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           value={this.state.lastName}
//           name="lastName"
//           placeholder="Last Name"
//           onChange={this.handleChange}
//         />
//         <br />
//         {/**
//          * Other useful form elements:
//          *
//          *  <textarea /> element
//          *  <input type="checkbox" />
//          *  <input type="radio" />
//          *  <select> and <option> elements
//          */}
//         <textarea value={"Some default value"} onChange={this.handleChange} />
//         <br />
//         <label htmlFor="">
//           <input
//             name="isFriendly"
//             type="checkbox"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           />
//           Is Friendly
//         </label>
//         <br />
//         <label htmlFor="">
//           <input
//             name="gender"
//             type="radio"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//             value="male"
//           />
//           Male
//         </label>
//         <br />
//         <label htmlFor="">
//           <input
//             name="gender"
//             type="radio"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//             value="female"
//           />
//           Female
//         </label>
//         {/* Formik: this is an API that helps to deal with forms much easier*/}
//         <br/>
//         <label htmlFor="">Favorite Color:</label>
//         <select
//           name=""
//           id=""
//           value={this.state.favColor}
//           onChange={this.handleChange}
//           name="favColor"
//         >
//           <option value="" disabled>Choose one</option>
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//           <option value="red">Red</option>
//           <option value="orange">Orange</option>
//           <option value="yellow">Yellow</option>
//         </select>
//         <h1>
//           {this.state.firstName} {this.state.lastName}
//         </h1>
//         <h2>You are a {this.state.gender}</h2>
//         <h2>Your favorite color is {this.state.favColor}</h2>
//         <button>Submit</button>
//       </form>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event) {
  //   const { name, value, type, checked } = event.target;
  //   type === "checkbox"
  //     ? this.setState({ [name]: checked })
  //     : this.setState({ [name]: value });
  // }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <form>
          <input
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
            name="firstName"
          />
          <br />

          <input
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
            name="lastName"
          />
          <br />

          <input
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
            name="age"
          />
          <br />

          {/* Create radio buttons for gender here */}

          <label>
            Male
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
              value="male"
            />
          </label>

          <label>
            Female
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
              value="female"
            />
          </label>
          <br />

          {/* Create select box for location here */}

          <select
            value={this.state.destination}
            onChange={this.handleChange}
            name="destination"
          >
            <option value="" disabled>
              Please choose a destination --
            </option>
            <option value="alabama">Alabama</option>
            <option value="ohio">Ohio</option>
            <option value="north carolina">North Carolina</option>
            <option value="south carolina">South Carolina</option>
            <option value="california">California</option>
          </select>
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <label>Vegan</label>
          <input
            type="checkbox"
            name="isVegan"
            checked={this.state.dietRestrictions.isVegan}
            onChange={this.handleChange}
          />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.dietRestrictions.isKosher}
              onChange={this.handleChange}
            />
            Kosher
          </label>

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.dietRestrictions.isLactoseFree}
              onChange={this.handleChange}
            />
            Lactose Free
          </label>

          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          { }
        </p>
      </main>
    );
  }
}

export default App;
