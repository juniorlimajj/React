import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import ListaCartao from './cartao/lista-cartao';

let App = (
    <div className="main">
        <Navbar titulo="React" cor="blue"/>
        <div className="container">
            <Titulo />
            <ListaCartao />
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));
