import React from "react";

class ExpenseList extends React.Component {
  onDelete = (index) => {
    const newList = [...this.props.expenseTypeList];
    newList.splice(index, 1);
    this.props.removeExpenseType(newList);
    const newSumList = [...this.props.expenseList];
    newSumList.splice(index, 1);
    const expenseSum = newSumList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    this.props.removeExpense(expenseSum);
    this.props.updateExpenseArray(newSumList);
  };
  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          {this.props.expenseTypeList.map((expense, index) => (
            <li key={index}>
              {expense}
              <i
                onClick={(e) => this.onDelete(index)}
                className="trash alternate icon"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExpenseList;
