import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Contacts() {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <></>
    }

    return (
        <div className="container">
            <h1>Kontaktai</h1>
            <div style={{ margin: "50px" }}>
                <p style={{ textAlign: "center" }}><b>Užsakovas:</b><br />
                    prof. Vacius Jusas.<br />
                    El. paštas: vacius.jusas@ktu.lt</p>
                <p style={{ textAlign: "center" }}><b>Vadovas:</b><br />
                    prof. Vacius Jusas.<br />
                    El. paštas: vacius.jusas@ktu.lt</p>
                <p style={{ textAlign: "center" }}><b>Studentas:</b><br />
                    Tomas Kašelynas<br />
                    El. paštas: tomas.kaselynas@ktu.edu<br />
                    Tel. numeris: 869605352</p>
            </div>
        </div>
    );
}

export default Contacts;