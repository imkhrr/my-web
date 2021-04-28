import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import DataTableTransaksi from "../components/DataTableTransaksi";
import DataTableBarang from "../components/DataTableBarang";
import {
  CgAdd,
  CgArrowLeft,
  CgCheck,
  CgSearch,
  CgShoppingCart,
  CgSortAz,
  CgTrash,
} from "react-icons/cg";

class Transaksi extends Component {
  state = {
    switch: false,
  };

  showClick = () => {
    this.setState({ switch: !this.state.switch });
  };

  render() {
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

    const itemsData = [
      {
        id: 1,
        name: "Nanas",
        category: "Buah",
        stock: "15",
        price: "5.000",
      },
      {
        id: 2,
        name: "Semangka",
        category: "Buah",
        stock: "5",
        price: "15.000",
      },
      {
        id: 3,
        name: "Tomat",
        category: "Buah",
        stock: "23",
        price: "3.000",
      },
      {
        id: 4,
        name: "Anggur Merah",
        category: "Buah",
        stock: "8",
        price: "25.000",
      },
    ];

    const trans = this.state.switch ? "is-hidden" : "";
    const addtrans = this.state.switch ? "" : "is-hidden";
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
                className={`animate__animated animate__fadeIn animate__fast ${trans}`}
                style={{ minHeight: "80vh" }}
              >
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
                            <span>Urutkan</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <DataTableTransaksi listdata={transData} />
                  </div>
                </div>
              </div>

              <div
                className={`animate__animated animate__fadeIn animate__fast ${addtrans}`}
                style={{ minHeight: "80vh" }}
              >
                <div className="columns">
                  <div className="column">
                    <div className="pb-4 is-flex is-justify-content-space-between">
                      <div>
                        <button
                          className={`button is-info is-small is-light ${addtrans}`}
                          onClick={this.showClick}
                        >
                          <i className="icon">
                            <CgArrowLeft className="react-icons-sidebar" />
                          </i>
                        </button>
                        <span className="is-size-5 pl-2">Daftar Barang</span>
                      </div>

                      <div className="field is-grouped">
                        <div className="control has-icons-left">
                          <input
                            className="input is-small"
                            type="text"
                            placeholder="Cari Barang"
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
                    <div className="">
                      <DataTableBarang listdata={itemsData} />
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="pb-4 is-flex is-justify-content-space-between">
                      <span className="is-size-5">Keranjang</span>
                      <button className="button is-info is-small is-light">
                        <i className="icon">
                          <CgCheck className="react-icons-sidebar" />
                        </i>
                        <span>Clear All</span>
                      </button>
                    </div>
                    <div className="box" style={{ minHeight: "61vh" }}>
                      <div className="field">
                        <div className="py-1">
                          <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <div>
                              <span>Nanas Muda Buah</span>
                              <span
                                className="label"
                                style={{ fontSize: "0.9rem" }}
                              >
                                Rp. 25.000
                              </span>
                            </div>
                            <div className="field is-grouped">
                              <div className="control">
                                <input
                                  className="input is-small"
                                  type="number"
                                  placeholder="0"
                                  style={{ width: 60 }}
                                />
                              </div>
                              <div className="control">
                                <button className="button is-danger is-small is-light">
                                  <i>
                                    <CgTrash className="react-icons-sidebar" />
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="py-1">
                          <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <div>
                              <span>Anggur Merah</span>
                              <span
                                className="label"
                                style={{ fontSize: "0.9rem" }}
                              >
                                Rp. 75.000
                              </span>
                            </div>
                            <div className="field is-grouped">
                              <div className="control">
                                <input
                                  className="input is-small"
                                  type="number"
                                  placeholder="0"
                                  style={{ width: 60 }}
                                />
                              </div>
                              <div className="control">
                                <button className="button is-danger is-small is-light">
                                  <i>
                                    <CgTrash className="react-icons-sidebar" />
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pb-4 is-flex is-justify-content-space-between is-align-items-center">
                      <span>Total Bayar</span>
                      <span className="label has-text-info">Rp. 100.000</span>
                    </div>
                    <button
                      className={`button is-info is-fullwidth ${addtrans}`}
                      onClick={this.showClick}
                    >
                      <i className="icon">
                        <CgShoppingCart className="react-icons-sidebar" />
                      </i>
                      <span>Checkout</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="is-flex is-justify-content-space-between">
                <div></div>
                <div>
                  <button
                    className={`button is-info ${trans}`}
                    onClick={this.showClick}
                  >
                    <i className="icon">
                      <CgAdd className="react-icons-sidebar" />
                    </i>
                    <span>Tambah Transaksi</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaksi;
