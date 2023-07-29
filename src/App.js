import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (inputdata) => {
    setUserInput(inputdata);
  };
  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlycontribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const expectedduration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < expectedduration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlycontribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: parseFloat(yearlyInterest).toFixed(2),
        savingsEndOfYear: parseFloat(currentSavings).toFixed(2),
        yearlycontribution: parseFloat(yearlycontribution).toFixed(2),
      });
    }
  }

  return (
    <div>
      <Header />
      <InputForm setYearlyData={calculateHandler} />
      {!userInput && <p>No investment calculated yet.</p>}
      {userInput && (
        <ResultsTable
          yearlyData={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
