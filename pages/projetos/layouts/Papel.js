import React, { Component } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import Botao from '../../layouts/Botao'

export default class Papel extends Component{

    constructor(props) {

        super(props)
    }

    render(props) {

        return(

            <Paper style={{margin: 'auto', height: '100%', backgroundColor: '#2f2f2f',}} elevation={0} className="paper">
                <div className="overflow">
                    <img className='card-img-top' src={this.props.imagem} alt=""/>
                </div>
                <div className='card-body text-dark' style={{textAlign: 'center'}}>
                    <h4 style={{fontWeight: 'bold', color: '#EEEEEF'}} className='card-title'>{this.props.titulo}</h4>
                
                    <p className='card-text'>
                        {this.props.descricao}
                    </p>

                <Botao color='#EEEEEF' value='SAIBA MAIS'></Botao>
               
                </div>
            </Paper>
        );
    }
}