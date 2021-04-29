import React, { Component } from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const data = [
            {
                name: "Senin",
                Terjual: "45",
                pelanggan: "15",
                Transaksi: "18",
                stok_opname: "12",
            },
            {
                name: "Selasa",
                Terjual: "25",
                pelanggan: "13",
                Transaksi: "10",
                stok_opname: "15",
            },
            {
                name: "Rabu",
                Terjual: "22",
                pelanggan: "14",
                Transaksi: "12",
                stok_opname: "2",
            },
            {
                name: "Kamis",
                Terjual: "60",
                pelanggan: "17",
                Transaksi: "29",
                stok_opname: "21",
            },
            {
                name: "Jumat",
                Terjual: "33",
                pelanggan: "24",
                Transaksi: "10",
                stok_opname: "11",
            },
            {
                name: "Sabtu",
                Terjual: "42",
                pelanggan: "11",
                Transaksi: "22",
                stok_opname: "19",
            },
            {
                name: "Minggu",
                Terjual: "29",
                pelanggan: "20",
                Transaksi: "35",
                stok_opname: "8",
            },
        ];
        return (
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                width={750}
                height={260}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Terjual" fill="#f44336" />
                <Bar dataKey="Transaksi" fill="#9c27b0" />
            </BarChart>
        );
    }
}

export default Chart;
