import React, { Component } from "react";
import DataTable from "../components/DataTable";
import { CgAdd, CgShoppingCart } from "react-icons/cg";
import ItemAddModal from "../components/ItemAddModal";

class Transaksi extends Component {
  state = {
    showModal: false,
  };

  showClick = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const transData = [
      { id: 1, name: "Nanas", category: "Buah", count: 5, price: 5000 },
      { id: 2, name: "Semangka", category: "Buah", count: 2, price: 25000 },
      { id: 3, name: "Tomat", category: "Sayur", count: 8, price: 15000 },
      { id: 4, name: "Apel", category: "Buah", count: 12, price: 12000 },
    ];

    const active = this.state.showModal ? "is-active" : "";
    return (
      <div className="content px-4">
        <div>
          <ItemAddModal
            modalname="Tambah Barang"
            isactive={active}
            close={this.showClick}
          />
        </div>
        <div className="pb-4">
          <div className="columns">
            <div className="column">
              <div className="pb-2 is-flex is-justify-content-space-between">
                <span className="is-size-5">Transaksi</span>
                <button
                  className="button is-info is-small is-light"
                  onClick={this.showClick}
                >
                  <i className="icon">
                    <CgAdd className="react-icons-sidebar" />
                  </i>
                  <span>Tambah Barang</span>
                </button>
              </div>
              <div className="">
                <DataTable listdata={transData} />
              </div>
            </div>
            <div className="column is-4">
              <div className="pb-2">
                <span className="is-size-5">Detail Pembayaran</span>
              </div>
              <div className="box" style={{ minHeight: "70vh" }}>
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

                <div className="field">
                  <div className="field is-flex is-justify-content-space-between">
                    <span className="is-size-6">Jumlah Barang</span>
                    <span className="label has-text-info pr-2">4</span>
                  </div>
                </div>
                <div className="field">
                  <div className="field is-flex is-justify-content-space-between">
                    <span className="is-size-6">Total Bayar</span>
                    <span className="label has-text-info pr-2">
                      Rp. 40.0000
                    </span>
                  </div>
                </div>
              </div>
              <button className="button is-info is-fullwidth">
                <i className="icon">
                  <CgShoppingCart className="react-icons-sidebar" />
                </i>
                <span>Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaksi;
