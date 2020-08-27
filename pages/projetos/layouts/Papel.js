import React, { Component } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Paper } from "@material-ui/core";
import Botao from "../../layouts/Botao";

export default class Papel extends Component{

    render() {

        return(

            <Paper elevation={3} className="paper">
                <div style={{textAlign: 'center', paddingTop: '40px'}}>
                    <h2>{this.props.h2}</h2>
                </div>
                <div style={{textAlign: 'center', paddingTop: '60px', paddingLeft: '20px', paddingRight: '20px'}}>
                    <p>
                        {this.props.p}
                    </p>
                    <Botao href="/projetos/futuro" value="Leia mais"></Botao>

                </div>
            </Paper>
        );
    }
}