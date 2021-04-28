import React, { Component } from "react";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";
import TambahTransaksi from "../transactions/TambahTransaksi";
import TransaksiTerakhir from "../transactions/TransaksiTerakhir";
import Checkout from "../transactions/Checkout";
import { CgAdd, CgArrowLeft, CgPrinter, CgShoppingCart } from "react-icons/cg";

class Transaksi extends Component {
  state = {
    pageT: 0,
  };

  toBack = () => {
    this.setState({ pageT: 0 });
  };

  toAdd = () => {
    this.setState({ pageT: 1 });
  };

  toCheckout = () => {
    this.setState({ pageT: 2 });
  };

  render() {
    const pageT = this.state.pageT;
    return (
      <div style={{ maxHeight: "100vh" }}>
        <Navbar />
        <div className="columns" style={{ paddingTop: "4rem" }}>
          <div className="column is-hidden-touch is-2">
            <Sidebar />
          </div>
          <div className="column">
            <div className="content pt-2 px-4">
              {pageT === 0 && <TransaksiTerakhir />}
              {pageT === 1 && <TambahTransaksi />}
              {pageT === 2 && <Checkout />}
              <div>
                {pageT === 0 && (
                  <div className="is-flex is-justify-content-space-between">
                    <div></div>
                    <button className="button is-info" onClick={this.toAdd}>
                      <i className="icon">
                        <CgAdd className="react-icons-sidebar" />
                      </i>
                      <span>Tambah Transaksi</span>
                    </button>
                  </div>
                )}
                {pageT === 1 && (
                  <div className="is-flex is-justify-content-space-between">
                    <button
                      className="button is-info is-light"
                      onClick={this.toBack}
                    >
                      <i className="icon">
                        <CgArrowLeft className="react-icons-sidebar" />
                      </i>
                      <span>Back</span>
                    </button>
                    <button
                      className="button is-info"
                      onClick={this.toCheckout}
                      style={{ width: "22rem" }}
                    >
                      <i className="icon">
                        <CgShoppingCart className="react-icons-sidebar" />
                      </i>
                      <span>Checkout</span>
                    </button>
                  </div>
                )}
                {pageT === 2 && (
                  <div className="is-flex is-justify-content-space-between">
                    <button
                      className="button is-info is-light"
                      onClick={this.toAdd}
                    >
                      <i className="icon">
                        <CgArrowLeft className="react-icons-sidebar" />
                      </i>
                      <span>Back</span>
                    </button>
                    <button
                      className="button is-info"
                      onClick={this.toCheckout}
                      style={{ width: "22rem" }}
                    >
                      <i className="icon">
                        <CgPrinter className="react-icons-sidebar" />
                      </i>
                      <span>Simpan</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaksi;
