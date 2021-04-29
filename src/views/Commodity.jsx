import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import { CgSearch, CgSortAz } from "react-icons/cg";
import DataTableBarang from "../components/tables/DataTableBarang";

class Commodity extends Component {
  render() {
    const barangData = [
      {
        id: 1,
        name: "Nanas",
        category: "Buah",
        price: "5.000",
        stock: "15",
      },
      {
        id: 2,
        name: "Anggur Merah",
        category: "Minuman",
        price: "75.000",
        stock: "999",
      },
    ];
    return (
      <div style={{ maxHeight: "100vh" }}>
        <Navbar />
        <div className="columns" style={{ paddingTop: "4rem" }}>
          <div className="column is-hidden-touch is-2">
            <Sidebar />
          </div>
          <div className="column">
            <div className="content pt-2 px-4">
              <div
                className="animate__animated animate__fadeIn animate__fast"
                style={{ minHeight: "80vh" }}
              >
                <div className="columns">
                  <div className="column">
                    <div className="pb-4 is-flex is-justify-content-space-between">
                      <span className="is-size-5">Data Barang</span>
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
                            <span>Urutkan</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <DataTableBarang listdata={barangData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Commodity;
