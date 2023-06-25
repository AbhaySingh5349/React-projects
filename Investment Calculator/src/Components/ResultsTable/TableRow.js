const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 3,
});

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.yearNumber}</td>
      <td>{formatter.format(props.savingsEndOfYear)}</td>
      <td>{formatter.format(props.interestGainedAtEarEnd)}</td>
      <td>{formatter.format(props.totalInterestGained)}</td>
      <td>{formatter.format(props.investedCapital)}</td>
    </tr>
  );
};

export default TableRow;
