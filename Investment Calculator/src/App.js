import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import ResultsTable from "./Components/ResultsTable/ResultsTable";
import { useState } from "react";

function App() {
  const [formInput, setFormInput] = useState(null);

  const calculateHandler = (userInput) => {
    setFormInput(userInput);
  };

  const yearlyData = []; // per-year results
  if (formInput) {
    let currentSavings = formInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = formInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = formInput["expected-return"] / 100;
    const duration = formInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {!formInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {formInput && (
        <ResultsTable
          data={yearlyData}
          initialInvestment={formInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
