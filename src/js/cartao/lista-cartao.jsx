import React from 'react';
import Cartao from './cartao';

class ListaCartao extends React.Component {
    render() {
        var noticias = [
            {titulo:'Titulo1', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo1', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo1', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo1', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo1', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo1', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo1', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo1', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'}
        ];
        var aux = [];
        var novaLista = [];

        for(var i = 0; i<noticias.length; i++){
            aux.push(noticias[i]);
            if(aux.length == 4){
                novaLista.push(aux);
                aux = [];
            } else if(i == noticias.length - 1){
                novaLista.push(aux);
            }
        }
        var listaCartoes = function(grupo){
            return grupo.map(function(){
                return(
                    <div className="col m4">
                        <Cartao/>
                    </div>
                );
            });
        };

        var linha = novaLista.map(function(grupo){
            return(
                <div className="row">
                    {listaCartoes(grupo)}
                </div>
            );
        });


        return(
            <div>
                {linha}
            </div>
        );
    }
}

export default ListaCartao;
