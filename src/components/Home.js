import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Įvykių laike atkūrimo sistema</h1>
                <p>
                Atliekant teisinę kompiuterinės sistemos analizę, svarbu atkurti buvusius įvykius ir jų seką. 
                Kompiuterinėje sistemoje yra daug artifaktų, turinčių informacijos apie įvykių eigą. Artifaktus 
                surinktų žinoma atvirojo kodo sistema. Darbo tikslas būtų analizuoti šiuos artifaktus ir atgaminti 
                įvykių seką. Darbas galimas Windows OS, Unix OS, Android OS ar iOS OS. Programavimo kalbai apribojimų nėra.<br/>
                <b>Raktažodžiai:</b> įvykių seka, įvykių atkūrimas, įvykių sekos atkūrimas, artefaktas, artefaktų analizė.
                </p>
                <br/>
                <h1>Development and research of the event timeline reconstruction system</h1>
                <p>
                It is important to recreate past events and their sequence when doing legal analysis of the computer system. 
                The computer system contains a large number of artifacts with information about the course of events. Artifacts 
                are going to be assembled by a known open-source system. The aim of the work would be to analyze these artifacts 
                and reproduce the sequence of events. The work can be done on Windows OS, Unix OS, Android OS or iOS OS. There are 
                no restrictions on the programming language.<br/>
                <b>Keywords:</b> event timeline, event reconstruction, event timeline reconstruction, artifact, artifact analysis.
                </p>
            </div>
        );
    }
}