import React, { Component } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Paper } from "@material-ui/core";
import Papel from './Papel'

const theme = createMuiTheme({

});

const styles = {

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(48),
          height: theme.spacing(48),
        },
      },
    
    paper: {
        backgroundImage: 'url(../public/dots.png)',
        backgroundSize: 'contain',
        backgroundColor: 'rgba(0,0,0,0.1)'

    }
}

export default class MainProjetos extends Component {

    render() {

        const { classes } = this.props

        return (
            <div style={{backgroundColor: '#252525', marginTop: '120px'}}>
                <Container className="row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0'}}>
                    <Papel
                    h2="Skate do Futuro"
                    p="                            Uma parceria da Fábrica do Futuro da USP c/ o PET Mecânica. O objetivo é desenvolver um método de baixo custo para conseguirmos, de forma autônoma, realizar o aparafusamento do Truck de um skate a seu Shape.
                    "
                    
                    ></Papel>
                    <Papel
                    h2="Pesquisa de Evasão"
                    p=""
                    
                    ></Papel>
                    <Papel
                    h2="Mini Curso"
                    p=""
                    
                    ></Papel>
                    <Papel
                    h2="SERES"
                    p=""
                    
                    ></Papel>
                    <Papel
                    h2="Mão Mecânica"
                    p=""
                    
                    ></Papel>
                    <Papel
                    h2="Poli Mundi"
                    p=""
                    
                    ></Papel>
                </Container>

            </div>
        );
    }
}

MainProjetos = withStyles(styles)(MainProjetos);