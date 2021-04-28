import React, { Component } from "react";
import DataTableBarang from "../components/DataTableBarang";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="animate__animated animate__fadeIn animate__fast"
        style={{ minHeight: "80vh" }}
      >
        <div className="columns">
          <div className="column">
            <div className="pb-4">
              <span className="is-size-5">Keranjang</span>
              <div className="pt-4">
                <DataTableBarang />
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="pb-4">
              <span className="is-size-5">Data Pembeli</span>
            </div>
            <div className="box" style={{ minHeight: "67vh" }}>
              <div className="field">
                <label className="label is-small">Nama Pelanggan</label>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Nama Pelanggan"
                />
              </div>
              <div className="field">
                <label className="label is-small">Tanggal</label>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Tanggal"
                />
              </div>
              <div className="field">
                <label className="label is-small">No. Struk</label>
                <input
                  className="input is-small"
                  type="number"
                  placeholder="No. Struk"
                />
              </div>
              <div className="field">
                <label className="label is-small">Keterangan</label>
                <textarea
                  className="textarea is-small"
                  placeholder="Keterangan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
