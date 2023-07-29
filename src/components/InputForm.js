import { useState } from "react";

const initialState = {
  "current-savings": null,
  "yearly-contribution": null,
  "expected-return": null,
  "duration": null,
};

const InputForm = (props) => {
  const [userInput, setuserInput] = useState(initialState);

  const handleUserInput = (input, value) => {
    setuserInput((prestate) => {
      return {
        ...prestate,
        [input]: value,
      };
    });
  };

  const resetAll = () => {
    setuserInput(initialState);
  };

  const submitHandler = (event) => {
    event.preventDefault()
    props.setYearlyData(userInput)
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings (₹)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) =>
                handleUserInput("current-savings", event.target.valueAsNumber)
              }
              value={userInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) =>
                handleUserInput(
                  "yearly-contribution",
                  event.target.valueAsNumber
                )
              }
              value={userInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) =>
                handleUserInput("expected-return", event.target.valueAsNumber)
              }
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) =>
                handleUserInput('duration', event.target.valueAsNumber)
              }
              value={userInput["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetAll}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default InputForm;
