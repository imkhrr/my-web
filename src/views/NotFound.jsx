import React from 'react';

function NotFound(props) {
    return (
        <div>
            <section className="hero is-fullheight">
                <div className="hero-body has-text-centered">
                    <div className="container">
                        <div className="box is-size-2 has-text-weight-bold">
                            <span className="has-text-danger">404</span> | Not Found
                            </div>
                        <div className="mt-6">
                            <span className="has-text-weight-bold is-size-4 has-text-danger"> You Seems Lost. </span>
                            <br />
                            <span className="has-text-weight-medium">The page you are trying to reach doesn't exist</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFound;