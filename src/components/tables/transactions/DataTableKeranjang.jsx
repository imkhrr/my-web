import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { CgTrash } from "react-icons/cg";

const DataTableKeranjang = (props) => {
  return (
    <div>
      <Table data={props.listdata} autoHeight>
        <Column width={60} align="center">
          <HeaderCell>No.</HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              return rowIndex + 1;
            }}
          </Cell>
        </Column>
        <Column flexGrow={1.5}>
          <HeaderCell>Nama Barang</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column flexGrow={0.8} align="center">
          <HeaderCell>Jumlah</HeaderCell>
          <Cell dataKey="count" />
        </Column>
        <Column flexGrow={0.8} align="right">
          <HeaderCell>Harga</HeaderCell>
          <Cell dataKey="price" />
        </Column>
        <Column flexGrow={0.8} align="right">
          <HeaderCell>SubTotal</HeaderCell>
          <Cell dataKey="subtotal" />
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
                  className="button is-danger is-small is-light"
                  onClick={handleAction}
                >
                  <i>
                    <CgTrash className="react-icons-sidebar" />
                  </i>
                  <span className="pl-2 is-hidden-touch">Hapus</span>
                </button>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default DataTableKeranjang;
