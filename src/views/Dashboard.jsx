import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import StatCard from "../components/StatCard";
import BestSellerCard from "../components/BestSellerCard";
import { CgSortAz } from "react-icons/cg";
import {
  IoBagCheckOutline,
  IoBarChartOutline,
  IoCartOutline,
  IoCubeOutline,
  IoPeopleOutline,
  IoTrendingDownSharp,
  IoTrendingUpSharp,
} from "react-icons/io5";

import Chart from "../components/Chart";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div style={{ maxHeight: "100vh" }}>
        <Navbar />
        <div className="columns" style={{ paddingTop: "4rem" }}>
          <div className="column is-hidden-touch is-2">
            <Sidebar />
          </div>
          <div className="column">
            <div className="content pt-2 px-4 animate__animated animate__fadeIn animate__fast">
              <div className="pb-4">
                <div className="pb-4">
                  <div className="field is-grouped">
                    <span className="is-size-5 pr-4">Statistik</span>
                    <button className="button is-info is-small is-light">
                      <i className="icon">
                        <CgSortAz className="react-icons-sidebar" />
                      </i>
                      <span>Harian</span>
                    </button>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="columns is-mobile">
                      <StatCard
                        bgcolor="red"
                        textcolor="white"
                        updowncount="50"
                        updown={
                          <IoTrendingUpSharp className="react-icons-sidebar" />
                        }
                        icon={
                          <IoBagCheckOutline className="react-icons-stat" />
                        }
                        statcount="45"
                        statname="Item Terjual"
                      />
                      <StatCard
                        bgcolor="pink"
                        textcolor="white"
                        updowncount="40"
                        updown={
                          <IoTrendingUpSharp className="react-icons-sidebar" />
                        }
                        icon={<IoPeopleOutline className="react-icons-stat" />}
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
                        updowncount="60"
                        updown={
                          <IoTrendingDownSharp className="react-icons-sidebar" />
                        }
                        icon={<IoCartOutline className="react-icons-stat" />}
                        statcount="18"
                        statname="Transaksi"
                      />
                      <StatCard
                        bgcolor="indigo"
                        textcolor="white"
                        updowncount="72"
                        updown={
                          <IoTrendingDownSharp className="react-icons-sidebar" />
                        }
                        icon={<IoCubeOutline className="react-icons-stat" />}
                        statcount="12"
                        statname="Restock"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <div className="pb-4">
                  <div className="field is-grouped">
                    <span className="is-size-5 pr-4">Grafik</span>
                    <button className="button is-info is-small is-light">
                      <i className="icon">
                        <CgSortAz className="react-icons-sidebar" />
                      </i>
                      <span>Bar</span>
                    </button>
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
                    icon={<IoBarChartOutline className="react-icons-stat" />}
                    statname="Best Seller"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
