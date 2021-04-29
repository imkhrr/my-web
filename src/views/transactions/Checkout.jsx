import React, { Component } from "react";
import DataTableKeranjang from "../../components/tables/transactions/DataTableKeranjang";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const checkoutData = [
      {
        id: 1,
        name: "Nanas",
        count: 2,
        price: "5.000",
        subtotal: "10.000",
      },
      {
        id: 2,
        name: "Anggur Merah",
        count: 2,
        price: "75.000",
        subtotal: "150.000",
      },
    ];
    const currentDate = new Date();
    const timeNow =
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      " " +
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear();

    const noStruk =
      currentDate.getHours() +
      "" +
      currentDate.getMinutes() +
      "" +
      currentDate.getDate() +
      "" +
      (currentDate.getMonth() + 1) +
      "" +
      currentDate.getFullYear();

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
                <DataTableKeranjang listdata={checkoutData} />
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
                <label className="label is-small">Tanggal Pembelian</label>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Tanggal"
                  value={timeNow}
                />
              </div>
              <div className="field">
                <label className="label is-small">No. Struk</label>
                <input
                  className="input is-small"
                  type="number"
                  placeholder="No. Struk"
                  value={noStruk}
                />
              </div>
              <div className="field">
                <label className="label is-small">Keterangan</label>
                <textarea
                  className="textarea is-small"
                  placeholder="Keterangan"
                />
              </div>
              <div className="pt-5 is-flex is-justify-content-space-between is-align-items-center">
                <span>Total Bayar</span>
                <span className="label has-text-info">Rp. 160.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
