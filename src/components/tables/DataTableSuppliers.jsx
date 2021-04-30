import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { CgTrash } from "react-icons/cg";

const DataTableSuppliers = (props) => {
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
                    <HeaderCell>Nama</HeaderCell>
                    <Cell dataKey="name" />
                </Column>
                <Column flexGrow={0.8} >
                    <HeaderCell>Barang</HeaderCell>
                    <Cell dataKey="items" />
                </Column>
                <Column flexGrow={0.8} >
                    <HeaderCell>Alamat</HeaderCell>
                    <Cell dataKey="address" />
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

export default DataTableSuppliers;
