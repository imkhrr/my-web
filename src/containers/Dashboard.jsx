import React, { Component } from "react";
import StatCard from "../components/StatCard";
import BestSellerCard from "../components/BestSellerCard";
import {
  CgShoppingBag,
  CgShoppingCart,
  CgMenuGridR,
  CgUserList,
  CgChart,
} from "react-icons/cg";
import Chart from "../components/Chart";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="content px-4">
        <div className="pb-4">
          <div className="pb-4">
            <div className="field is-grouped">
              <span className="is-size-5 pr-4">Dashboard</span>
              <div className="pr-1">
                <button className="button is-info is-small is-rounded">
                  <span>Harian</span>
                </button>
              </div>
              <div className="pr-1">
                <button className="button is-info is-light is-small is-rounded">
                  <span>Mingguan</span>
                </button>
              </div>
              <div className="pr-1">
                <button className="button is-info is-light is-small is-rounded">
                  <span>Bulanan</span>
                </button>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="columns is-mobile">
                <StatCard
                  bgcolor="red"
                  textcolor="white"
                  icon={<CgShoppingBag className="react-icons-stat" />}
                  statcount="45"
                  statname="Item Terjual"
                />
                <StatCard
                  bgcolor="pink"
                  textcolor="white"
                  icon={<CgUserList className="react-icons-stat" />}
                  statcount="15"
                  statname="Pelanggan"
                />
              </div>
            </div>
            <div className="column">
              <div className="columns is-mobile">
                <StatCard
                  bgcolor="purple"
                  textcolor="white"
                  icon={<CgShoppingCart className="react-icons-stat" />}
                  statcount="18"
                  statname="Transaksi"
                />
                <StatCard
                  bgcolor="indigo"
                  textcolor="white"
                  icon={<CgMenuGridR className="react-icons-stat" />}
                  statcount="12"
                  statname="Stok Opname"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div className="pb-4">
            <div className="field is-grouped">
              <span className="is-size-5 pr-4">Grafik</span>
              <div className="pr-1">
                <button className="button is-info is-small is-rounded">
                  <span>Bar</span>
                </button>
              </div>
              <div className="pr-1">
                <button className="button is-info is-light is-small is-rounded">
                  <span>Garis</span>
                </button>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-9">
              <div className="box">
                <Chart />
              </div>
            </div>
            <BestSellerCard
              bgcolor="teal"
              textcolor="white"
              icon={<CgChart className="react-icons-stat" />}
              statname="Best Seller"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
