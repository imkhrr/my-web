import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { CgAdd } from "react-icons/cg";

const DataTableTambahTransaksi = (props) => {
  return (
    <div>
      <Table data={props.listdata} autoHeight>
        <Column width={60} align="center">
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
        <Column flexGrow={0.8} align="right">
          <HeaderCell>Harga</HeaderCell>
          <Cell dataKey="price" />
        </Column>
        <Column flexGrow={0.8} align="center">
          <HeaderCell>Stok</HeaderCell>
          <Cell dataKey="stock" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Action</HeaderCell>
          <Cell>
            {(rowData) => {
              function handleAction() {
                alert(`id:${rowData.name}`);
              }
              return (
                <button
                  className="button is-info is-small is-light"
                  onClick={handleAction}
                >
                  <i>
                    <CgAdd className="react-icons-sidebar" />
                  </i>
                  <span className="pl-2 is-hidden-touch">Tambah</span>
                </button>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default DataTableTambahTransaksi;
