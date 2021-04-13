import React from "react";

const StatCard = (props) => {
  return (
    <div className="column">
      <div className={`box is-bg-${props.bgcolor}`}>
        <div className="columns is-mobile">
          <div className="column">
            <div className={`is-${props.textcolor}`}>
              <div>
                <span className="is-size-7">Hari ini</span>
              </div>
              <div>
                <span className="is-size-3">{props.statcount}</span>
              </div>
              <div>
                <span className="is-size-6">{props.statname}</span>
              </div>
            </div>
          </div>
          <div className="column is-4 is-flex is-align-items-center is-justify-content-center">
            <div className={`is-${props.textcolor}`}>
              <i>{props.icon}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
