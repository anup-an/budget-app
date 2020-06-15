import React from "react";

const Display = ({ myIncome, myExpense }) => {
  return (
    <div style={{ marginLeft: 170 }}>
      <div className="ui statistics" style={{ fontSize: 20 }}>
        <div className="ui statistic">
          <div className="label">Income</div>
          <div className="value">
            {myIncome}
            <i className="euro small icon" style={{ marginLeft: 10 }}></i>
          </div>
        </div>
        <div className="ui statistic">
          <div className="label">Expenses</div>

          <div className="value">
            {myExpense}
            <i className="euro small icon" style={{ marginLeft: 10 }}></i>
          </div>
        </div>
        <div className="ui statistic">
          <div className="label">Balance</div>

          <div className="value">
            {myIncome - myExpense}
            <i className="euro small icon" style={{ marginLeft: 10 }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
