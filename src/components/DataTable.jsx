import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { CgTrash } from "react-icons/cg";

const DataTable = (props) => {
  return (
    <div>
      <Table data={props.listdata} autoHeight>
        <Column width={60} align="center" fixed>
          <HeaderCell>No.</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={2} sortable>
          <HeaderCell>Nama Barang</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column flexGrow={1} sortable>
          <HeaderCell>Kategori</HeaderCell>
          <Cell dataKey="category" />
        </Column>
        <Column flexGrow={1} align="center" sortable>
          <HeaderCell>Jumlah</HeaderCell>
          <Cell dataKey="count" />
        </Column>
        <Column flexGrow={1} align="center" sortable>
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

export default DataTable;
