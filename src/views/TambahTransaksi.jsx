import React, { Component } from "react";
import DataTableBarang from "../components/DataTableBarang";
import { CgCheck, CgSearch, CgSortAz, CgTrash } from "react-icons/cg";

class TambahTransaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
    return (
      <div
        className="animate__animated animate__fadeIn animate__fast"
        style={{ minHeight: "80vh" }}
      >
        <div className="columns">
          <div className="column">
            <div className="pb-4 is-flex is-justify-content-space-between">
              <span className="is-size-5">Daftar Barang</span>
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
              <div>
                <span className="is-size-5 pr-4">Keranjang</span>
                <span className="tag is-info is-rounded">2</span>
              </div>

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
                      <span className="label" style={{ fontSize: "0.9rem" }}>
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
                      <span className="label" style={{ fontSize: "0.9rem" }}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default TambahTransaksi;
