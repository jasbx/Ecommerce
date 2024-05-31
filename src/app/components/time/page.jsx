import React from "react";
const Counter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="counter">
            <div className="counter-icon">
              <span>
                <i className="fa fa-briefcase"></i>
              </span>
            </div>
            <h3>Fashions</h3>
            <span className="counter-value">989</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter pink">
            <div className="counter-icon">
              <span>
                <i className="fa fa-globe"></i>
              </span>
            </div>
            <h3>Electrons</h3>
            <span className="counter-value">934</span>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="counter">
            <div className="counter-icon">
              <span>
                <i className="fa fa-briefcase"></i>
              </span>
            </div>
            <h3>Web Designing</h3>
            <span className="counter-value">371</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter pink">
            <div className="counter-icon">
              <span>
                <i className="fa fa-globe"></i>
              </span>
            </div>
            <h3>Electrons</h3>
            <span className="counter-value">934</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
