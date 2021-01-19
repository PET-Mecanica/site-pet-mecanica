import React, { Component } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Paper, Card } from "@material-ui/core";
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

    constructor(props){

        super(props)
        
    }

    render() {

        const { classes } = this.props

        var items = [

            {

                titulo: 'Skate do Futuro',
                descricao: `Uma parceria da Fábrica do Futuro da USP c/ o PET Mecânica. O objetivo é desenvolver um método de baixo custo para o aparafusamento do Truck de um skate a seu Shape.
                `,
                imagem: 'skate_do_futuro.jpg'
            },
            {
                titulo: 'Pesquisa de Evasão',
                descricao: 'Sei la',
                imagem: 'skate_do_futuro.jpg'
            },
            {
                titulo: 'Pesquisa de Evasão',
                descricao: 'Sei la',
                imagem: 'skate_do_futuro.jpg'
            },
            {
                titulo: 'Pesquisa de Evasão',
                descricao: 'Sei la',
                imagem: 'skate_do_futuro.jpg'
            },
            {
                titulo: 'Pesquisa de Evasão',
                descricao:'Sei la',
                imagem: 'skate_do_futuro.jpg'
            },
            {
                titulo: 'Pesquisa de Evasão',
                descricao: 'Sei la',
                imagem: 'skate_do_futuro.jpg'
            }

        ]

        return (
            <div style={{backgroundColor: '#252525', paddingTop: '60px'}}>
                <Container className="row justify-content-space-around container-fluid d-flex" style={{display: 'flex !important',
    textAlign: 'center'}}>

        {
            items.map((item, i) => 
            
            <Grid item lg={4} xs={12} md={6} style={{paddingBottom: '1rem'}} >
                    <Papel
                    key = {i}
                    imagem = 'skate_do_futuro.jpg'
                    titulo = 'titulo'
                    descricao = 'descricao'
                    >
                        
                    </Papel>
                    </Grid>
            )
        }
                </Container>

            </div>
        );
    }
}

MainProjetos = withStyles(styles)(MainProjetos);