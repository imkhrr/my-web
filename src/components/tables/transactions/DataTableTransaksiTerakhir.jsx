import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { CgTrash, CgEditBlackPoint } from "react-icons/cg";

const DataTableTransaksiTerakhir = (props) => {
  return (
    <div>
      <Table data={props.listdata} autoHeight>
        <Column width={60} align="center" fixed>
          <HeaderCell>No.</HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              return rowIndex + 1;
            }}
          </Cell>
        </Column>
        <Column flexGrow={1.5} sortable>
          <HeaderCell>Kode Transaksi</HeaderCell>
          <Cell dataKey="list" />
        </Column>

        <Column flexGrow={0.8} sortable>
          <HeaderCell>Pembeli</HeaderCell>
          <Cell dataKey="buyer" />
        </Column>
        <Column flexGrow={0.8} align="center" sortable>
          <HeaderCell>Waktu Pembelian</HeaderCell>
          <Cell dataKey="date" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell align="center">Action</HeaderCell>

          <Cell>
            {(rowData) => {
              function handleAction() {
                alert(`id:${rowData.id}`);
              }
              return (
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-info is-small is-light" onClick={handleAction} >
                      <i> <CgEditBlackPoint className="react-icons-sidebar" /> </i>
                      <span className="pl-2 is-hidden-touch">Rincian</span>
                    </button>
                  </div>
                  <div className="control">
                    <button
                      className="button is-danger is-small is-light"
                      onClick={handleAction}
                    >
                      <i>
                        <CgTrash className="react-icons-sidebar" />
                      </i>
                      <span className="pl-2 is-hidden-touch">Hapus</span>
                    </button>
                  </div>
                </div>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default DataTableTransaksiTerakhir;
