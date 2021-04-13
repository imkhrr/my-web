import React from "react";

const BestSellerCard = (props) => {
  return (
    <div className="column">
      <div
        className={`box is-bg-${props.bgcolor}`}
        style={{ minHeight: "300px" }}
      >
        <div className="columns is-mobile">
          <div className="column">
            <div className={`is-${props.textcolor}`}>
              <div>
                <span className="is-size-7">Hari ini</span>
              </div>
              <div>
                <span className="is-size-6">{props.statname}</span>
              </div>
            </div>
          </div>
          <div className="column is-4 is-flex is-align-items-center is-justify-content-flex-end">
            <div className={`is-${props.textcolor}`}>
              <i>{props.icon}</i>
            </div>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column">
            <div className={`is-${props.textcolor}`}>
              <ol className="mt-0 ml-4">
                <li>Nanas</li>
                <li>Brokoli</li>
                <li>Tomat</li>
                <li>Anggur</li>
                <li>Bayam</li>
                <li>Anggur Merah</li>
              </ol>
            </div>
          </div>
          <div className="column is-4 ">
            <div className={`is-${props.textcolor}`}>
              <ul
                className="mt-0"
                style={{ listStyle: "none", textAlign: "right" }}
              >
                <li>15</li>
                <li>12</li>
                <li>10</li>
                <li>8</li>
                <li>5</li>
                <li>3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
