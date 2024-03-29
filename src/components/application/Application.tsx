export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      {/* for getByText queries */}
      <p>All fields are mandatory</p>
      {/* for getByTitle queries */}
      <span title="close">X</span>
      {/* for getByAltText queries */}
      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
      {/* for getByTestId queries */}
      <div data-testid="custom-element">Custom HTML element</div>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="MR Masum"
            onChange={() => {}}
          />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>

        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="IN">Bangladesh</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>

        <button disabled>Submit</button>
      </form>
    </>
  );
};
