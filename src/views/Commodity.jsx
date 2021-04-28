import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import DataTableTransaksi from "../components/DataTableTransaksi";
import { CgAdd } from "react-icons/cg";

class Commodity extends Component {
  render() {
    const itemData = [
      { id: 1, name: "Nanas", category: "Buah", count: 5, price: 5000 },
      { id: 2, name: "Semangka", category: "Buah", count: 2, price: 25000 },
      { id: 3, name: "Tomat", category: "Sayur", count: 8, price: 15000 },
      { id: 4, name: "Apel", category: "Buah", count: 12, price: 12000 },
    ];

    return (
      <div style={{ maxHeight: "100vh" }}>
        <Navbar />
        <div className="columns" style={{ paddingTop: "4rem" }}>
          <div className="column is-hidden-touch is-2">
            <Sidebar />
          </div>
          <div className="column">
            <div className="content px-4">
              <div className="pb-2 is-flex is-justify-content-space-between">
                <span className="is-size-5">Barang</span>
                <button className="button is-info is-small is-light">
                  <i className="icon">
                    <CgAdd className="react-icons-sidebar" />
                  </i>
                  <span>Tambah Data Barang</span>
                </button>
              </div>
              <div className="">
                <DataTableTransaksi listdata={itemData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Commodity;
