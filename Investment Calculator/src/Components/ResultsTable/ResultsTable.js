import TableRow from "./TableRow";
import classes from "./ResultsTable.module.css";

const ResultsTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <TableRow
            key={yearData.year}
            yearNumber={yearData.year}
            savingsEndOfYear={yearData.savingsEndOfYear}
            interestGainedAtEarEnd={yearData.yearlyInterest}
            totalInterestGained={
              yearData.savingsEndOfYear -
              props.initialInvestment -
              yearData.yearlyContribution * yearData.year
            }
            investedCapital={
              props.initialInvestment +
              yearData.yearlyContribution * yearData.year
            }
          />
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
