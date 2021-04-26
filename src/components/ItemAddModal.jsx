import React from "react";
import { CgSearch } from "react-icons/cg";

const ItemAddModal = (props) => {
    return (
        <div className={`modal px-4  ${props.isactive}`}>
            <div className="modal-background"></div>
            <div
                className="modal-card animate__animated animate__fadeInUp animate__faster"
                style={{
                    maxWidth: "400px",
                    maxHeight: "400px",
                    borderRadius: "6px",
                }}
            >
                <section className="modal-card-body">
                    <div className="pb-2 is-flex is-justify-content-space-between is-align-items-center">
                        <span className="label is-size-5 ">{props.modalname}</span>

                        <button
                            className="delete"
                            aria-label="close"
                            onClick={props.close}
                        ></button>
                    </div>

                    <div className="field pt-2">
                        <div className="control has-icons-left">
                            <span className="icon is-left">
                                <i className="icon">
                                    <CgSearch className="react-icons-sidebar" />
                                </i>
                            </span>
                            <input type="text" className="input" placeholder="Nama Barang" />
                        </div>
                    </div>
                    <div className="" style={{ minHeight: "30vh" }}>
                        <div className="box mb-2 py-2 is-flex is-justify-content-space-between is-align-items-center">
                            <div>
                                <span>Nanas Muda</span>
                            </div>
                            <div>
                                <span className="tag is-danger">Buah</span>
                            </div>

                            <span>
                                Stok : <b>15</b>
                            </span>

                            <input
                                style={{ maxWidth: 60 }}
                                type="number"
                                className="input is-small"
                                placeholder="0"
                            />
                        </div>
                        <div className="box py-2 is-flex is-justify-content-space-between is-align-items-center">
                            <div>
                                <span>Tomat Merah</span>
                            </div>
                            <div>
                                <span className="tag is-success">Sayur</span>
                            </div>

                            <span>
                                Stok : <b>15</b>
                            </span>

                            <input
                                style={{ maxWidth: 60 }}
                                type="number"
                                className="input is-small"
                                placeholder="0"
                            />
                        </div>
                    </div>

                    <div className="field pt-4">
                        <button className="button is-info is-fullwidth">Tambah</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ItemAddModal;
