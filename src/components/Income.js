import React from "react";

class Income extends React.Component {
  state = { income: "" };
  enterIncome = (event) => {
    this.setState({ income: event.target.value });
  };

  submitIncome = (event) => {
    this.clearForm();
    event.preventDefault();
    let x = document.getElementById("income");
    if (x.value === "" || x.value === "null") {
      x.style.borderColor = "red";
      alert("Please enter amount of income");
      return false;
    }
    x.style.borderColor = "skyBlue";
    this.props.updateIncome(this.state.income);
  };
  clearForm = () => {
    document.getElementById("incomeForm").reset();
    this.setState({ income: "" });
  };

  render() {
    return (
      <div className="card" style={{ margin: 10 }}>
        <form id="incomeForm" onSubmit={this.submitIncome}>
          <div>
            <div>
              <label style={{ margin: 10 }}>Income</label>
            </div>
            <div className="ui input focus" style={{ margin: 10 }}>
              <input
                id="income"
                value={this.state.income}
                onChange={this.enterIncome}
                type="text"
                placeholder="Amount"
              />
            </div>
            <div>
              <button
                className="ui basic green button"
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

export default Income;
