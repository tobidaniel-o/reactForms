function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          placeholder="First Name"
          value={props.data.firstName}
          onChange={props.handleChange}
          name="firstName"
        />
        <br />

        <input
          placeholder="Last Name"
          value={props.data.lastName}
          onChange={props.handleChange}
          name="lastName"
        />
        <br />

        <input
          placeholder="Age"
          value={props.data.age}
          onChange={props.handleChange}
          name="age"
        />
        <br />

        {/* Create radio buttons for gender here */}

        <label>
          Male
          <input
            type="radio"
            name="gender"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
            value="male"
          />
        </label>

        <label>
          Female
          <input
            type="radio"
            name="gender"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
            value="female"
          />
        </label>
        <br />

        {/* Create select box for location here */}

        <select
          value={props.data.destination}
          onChange={props.handleChange}
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
          checked={props.data.isVegan}
          onChange={props.handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={props.data.isKosher}
            onChange={props.handleChange}
          />
          Kosher
        </label>

        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={props.data.isLactoseFree}
            onChange={props.handleChange}
          />
          Lactose Free
        </label>

        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>Your dietary restrictions:</p>
      <p> Vegan:{props.data.isVegan ? "Yes" : "No"}</p>
      <p> Vegan:{props.data.isKosher ? "Yes" : "No"}</p>
      <p> Vegan:{props.data.isLactoseFree ? "Yes" : "No"}</p>
    </main>
  );
}

export default FormComponent;
