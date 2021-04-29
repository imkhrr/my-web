import React, { Component } from "react";
import DataTableTransaksiTerakhir from "../../components/tables/transactions/DataTableTransaksiTerakhir";
import { CgSearch, CgSortAz } from "react-icons/cg";

class TransaksiTerakhir extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const trans = this.state.switch ? "is-hidden" : "";
    const transData = [
      {
        id: 1,
        list: "Nanas",
        buyer: "Angga",
        date: "08:46 24/04/2021",
        money: "+ 5.000",
      },
      {
        id: 2,
        list: "Semangka",
        buyer: "Pak Dimas",
        date: "12:25 23/04/2021",
        money: "+ 25.000",
      },
      {
        id: 3,
        list: "Tomat",
        buyer: "Diana",
        date: "09:12 22/04/2021",
        money: "+ 15.000",
      },
      {
        id: 4,
        list: "Apel",
        buyer: "Putri",
        date: "15:32 21/04/2021",
        money: "+ 12.000",
      },
    ];

    return (
      <div className={`animate__animated animate__fadeIn animate__fast ${trans}`} style={{ minHeight: "80vh" }} >
        <div className="columns">
          <div className="column">
            <div className="pb-4 is-flex is-justify-content-space-between">
              <span className="is-size-5">Transaksi Terakhir</span>
              <div className="field is-grouped">
                <div className="control has-icons-left">
                  <input
                    className="input is-small"
                    type="text"
                    placeholder="Keyword"
                  />
                  <span className="icon is-small is-left">
                    <i className="icon">
                      <CgSearch className="react-icons-sidebar" />
                    </i>
                  </span>
                </div>
                <div className="control">
                  <button className="button is-info is-small is-light">
                    <i className="icon">
                      <CgSortAz className="react-icons-sidebar" />
                    </i>
                    <span>Filter</span>
                  </button>
                </div>
              </div>
            </div>
            <DataTableTransaksiTerakhir listdata={transData} />
          </div>
        </div>
      </div>
    );
  }
}

export default TransaksiTerakhir;
