import React from "react";

class Expense extends React.Component {
  state = { expense: "", expenseType: [], expenseArray: [] };
  enterExpense = (event) => {
    this.setState({ expense: event.target.value });
    this.setState({ expenseArray: event.target.value });
  };
  enterExpenseType = (event) => {
    this.setState({ expenseType: event.target.value });
  };

  submitExpense = (event) => {
    event.preventDefault();
    this.props.updateExpense(this.state.expense);
    this.props.updateExpenseList(this.state.expenseArray);
  };

  submitExpenseType = (event) => {
    event.preventDefault();
    if (this.state.expenseType === "") {
      console.log(this.state.expenseType);
    }
    this.props.updateExpenseType(this.state.expenseType);
  };
  clearForm = () => {
    document.getElementById("expenseForm").reset();
    this.setState({ expense: "" });
    this.setState({ expenseType: "" });
  };

  handleSubmit = (event) => {
    this.clearForm();
    event.preventDefault();
    let x = document.getElementById("expenseType");
    let y = document.getElementById("expense");
    if (
      x.value === "" ||
      x.value === null ||
      y.value === "" ||
      y.value === null
    ) {
      x.style.borderColor = "red";
      y.style.borderColor = "red";
      alert("Please enter type of expense and amount!");
      return false;
    }
    x.style.borderColor = "powderBlue";
    y.style.borderColor = "powderBlue";
    this.submitExpense(event);
    this.submitExpenseType(event);
  };
  render() {
    return (
      <div className="card" style={{ margin: 10 }}>
        <form id="expenseForm" onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label style={{ margin: 10 }}>Expenses</label>
            </div>
            <div className="ui input focus" style={{ margin: 10 }}>
              <input
                id="expenseType"
                name="expenseType"
                value={this.state.expenseType}
                onChange={this.enterExpenseType}
                type="text"
                placeholder="Type of expenses"
              />
            </div>
            <div className="ui input focus" style={{ margin: 10 }}>
              <input
                id="expense"
                name="expense"
                value={this.state.expense}
                onChange={this.enterExpense}
                type="text"
                placeholder="Amount"
              />
            </div>
            <div>
              <button
                className="ui basic red button"
                type="submit"
                style={{ margin: 10 }}
              >
                Enter
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Expense;
