import React, { Component } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Paper, Card } from "@material-ui/core";

const theme = createMuiTheme({

});

const styles = {


}

export default class MainPetianos extends Component {

    render() {

        var items = [

            {
                foto: '/Joao_Nunes.jpg',
                nome: 'João Nunes',
                descricao: "Nenhuma limitação do ser humano é maior do que a que ele mesmo impõe.",
                periodo: '2018-2020'


            },
            {
                foto: '/gusela.jpg',
                nome: 'Luca Gusella',
                descricao: `"If there's love in this life we're unstoppable" - Avicii`,
                periodo: '2019-2021'
            },
            {
                foto: '/Vittor_Braide.jpg',
                nome: 'Vittor Braide',
                descricao: "O pior tipo de arrependimento é por aquilo que não fazemos.",
                periodo: '2020-2021'
            },

            {
                foto: '/Gabriel_Souza.jpg',
                nome: 'Gabriel Souza',
                descricao: "Nenhuma limitação do ser humano é maior do que a que ele mesmo impõe.",
                periodo: '2019-2021'


            },
            {
                foto: '/Giovanna_Girotto.jpg',
                nome: 'Giovanna Girotto',
                descricao: `"If there's love in this life we're unstoppable" - Avicii`,
                periodo: '2020-2021'
            },
            {
                foto: '/Guilherme_Yamashita.jpg',
                nome: 'Guilherme Yamashita',
                descricao: "O pior tipo de arrependimento é por aquilo que não fazemos.",
                periodo: '2020-2021'
            },

            {
                foto: '/Gabriel_David.jpg',
                nome: 'Gabriel David',
                descricao: `"If there's love in this life we're unstoppable" - Avicii`,
                periodo: '2020-2021'
            },
            {
                foto: '/Gustavo_Ribeiro.jpg',
                nome: 'Gustavo Ribeiro',
                descricao: "O pior tipo de arrependimento é por aquilo que não fazemos.",
                periodo: '2019-2021'
            },
        ]

        return (

            <div style={{backgroundColor: '#252525'}}>
<Container className="row justify-content-space-around container-fluid d-flex" style={{display: 'flex',
    textAlign: 'center',
    /* padding: 80px 0px; */}}>
                {
                    items.map((item, i) => 
                    <Grid item lg={4} xs={12} md={6} style={{padding: '1rem'}}>
                        <Paper key={i} className='foto-petiano' elevation={0} style={{backgroundColor: '#252525'}}>
                    <div className="overflow">
                        <img style={{borderRadius: '50%', width: '14rem', border: '4px solid #252525'}} src={item.foto} ></img>
                    </div>
                    <div className='card-body text-white'>
                        <h4 className='card-title'>{item.nome}</h4>
                        <h6 className='text-secondary'>{item.periodo}</h6>
                        <p className='card-text text-secondary' >{item.descricao}</p>
                    </div>
                    </Paper>
                    </Grid>
                    )
                }
                </Container>
            </div>
        );
    }
}

MainPetianos = withStyles(styles)(MainPetianos);