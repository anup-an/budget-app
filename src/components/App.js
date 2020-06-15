import React from "react";
import Display from "./Display";
import Income from "./Income";
import Expense from "./Expense";
import ExpenseList from "./ExpenseList";

class App extends React.Component {
  state = { income: 0, expense: 0, expenseType: [], expenseArray: [] };

  updateIncome = (income) => {
    this.setState({ income: this.state.income + parseInt(income) });
  };

  updateExpenseList = (expenseArray) => {
    const newExpenseList = JSON.parse(JSON.stringify(this.state.expenseArray));
    newExpenseList.push(parseInt(expenseArray));
    this.setState({ expenseArray: newExpenseList });
  };

  updateExpense = (expense) => {
    this.setState({ expense: this.state.expense + parseInt(expense) });
  };

  updateExpenseType = (expenseType) => {
    const newExpenseType = JSON.parse(JSON.stringify(this.state.expenseType));
    newExpenseType.push(expenseType);
    this.setState({ expenseType: newExpenseType });
  };

  removeExpenseType = (newList) => {
    this.setState({ expenseType: newList });
  };
  removeExpense = (expenseSum) => {
    this.setState({ expense: expenseSum });
  };
  updateExpenseArray = (newSumList) => {
    this.setState({ expenseArray: newSumList });
  };

  render() {
    return (
      <div className="grid-container">
        <div>
          <div className="ui cards" style={{ margin: 10 }}>
            <Income updateIncome={this.updateIncome} />
          </div>
        </div>
        <div>
          <Display
            myIncome={this.state.income}
            myExpense={this.state.expense}
          />
        </div>
        <div>
          <div className="ui cards" style={{ margin: 10 }}>
            <Expense
              updateExpense={this.updateExpense}
              updateExpenseType={this.updateExpenseType}
              updateRemoveExpense={this.updateRemoveExpense}
              updateExpenseList={this.updateExpenseList}
            />
          </div>
        </div>
        <div>
          <div className="ui cards" style={{ margin: 10 }}>
            <ExpenseList
              expenseTypeList={this.state.expenseType}
              myExpense={this.state.expense}
              removeExpenseType={this.removeExpenseType}
              expenseList={this.state.expenseArray}
              removeExpense={this.removeExpense}
              updateExpenseArray={this.updateExpenseArray}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
