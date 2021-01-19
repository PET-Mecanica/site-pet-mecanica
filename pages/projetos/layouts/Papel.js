import React, { Component } from "react";
import { Container, Grid, Paper } from "@material-ui/core";


export default class Papel extends Component{

    constructor(props) {

        super(props)
    }

    render(props) {

        return(

            <Paper style={{margin: 'auto', height: '100%'}} elevation={3} className="paper">
                <div className="overflow">
                    <img className='card-img-top' src={this.props.imagem} alt=""/>
                </div>
                <div className='card-body text-dark' style={{textAlign: 'center'}}>
                    <h4 className='card-title'>{this.props.titulo}</h4>
                
                    <p className='card-text text-secondary' >
                        {this.props.descricao}
                    </p>
               
                </div>
            </Paper>
        );
    }
}