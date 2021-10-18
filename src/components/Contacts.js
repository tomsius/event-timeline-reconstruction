import React, { Component } from 'react';

export class Contacts extends Component {
    render() {
        return (
            <div className="container">
                <h1>Kontaktai</h1>
                <div style={{ margin: "50px" }}>
                    <p style={{ fontWeight: "bold", textAlign: "center"}}>Užsakovas:<br />
                        prof. Vacius Jusas.<br />
                        El. paštas: vacius.jusas@ktu.lt</p>
                    <p style={{ fontWeight: "bold", textAlign: "center"}}>Vadovas:<br />
                        prof. Vacius Jusas.<br />
                        El. paštas: vacius.jusas@ktu.lt</p>
                    <p style={{ fontWeight: "bold", textAlign: "center"}}>Studentas:<br />
                        Tomas Kašelynas<br />
                        El. paštas: tomas.kaselynas@ktu.edu<br />
                        Tel. numeris: 869605352</p>
                </div>
            </div>
        );
    }
}