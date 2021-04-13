import React, { Component } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { CgTrash } from "react-icons/cg";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dataList = [
      { id: 1, name: "Nanas", category: "Buah", count: 5, price: 5000 },
      { id: 2, name: "Semangka", category: "Buah", count: 2, price: 25000 },
      { id: 3, name: "Tomat", category: "Sayur", count: 8, price: 15000 },
      { id: 4, name: "Apel", category: "Buah", count: 12, price: 12000 },
    ];

    return (
      <div>
        <Table data={dataList} autoHeight>
          <Column width={60} align="center" fixed>
            <HeaderCell>No.</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column flexGrow={2}>
            <HeaderCell>Nama Barang</HeaderCell>
            <Cell dataKey="name" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Kategori</HeaderCell>
            <Cell dataKey="category" />
          </Column>
          <Column flexGrow={1} align="center">
            <HeaderCell>Jumlah</HeaderCell>
            <Cell dataKey="count" />
          </Column>
          <Column flexGrow={1} align="center">
            <HeaderCell>Harga</HeaderCell>
            <Cell dataKey="price" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Action</HeaderCell>

            <Cell>
              {(rowData) => {
                function handleAction() {
                  alert(`id:${rowData.id}`);
                }
                return (
                  <span>
                    <a onClick={handleAction}>
                      <button className="button is-danger is-small is-light">
                        <i>
                          <CgTrash className="react-icons-sidebar" />
                        </i>
                        <span className="pl-2 is-hidden-touch">Hapus</span>
                      </button>
                    </a>
                  </span>
                );
              }}
            </Cell>
          </Column>
        </Table>
      </div>
    );
  }
}

export default DataTable;
