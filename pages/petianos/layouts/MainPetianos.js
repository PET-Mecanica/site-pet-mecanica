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
                descricao: "",
                periodo: '2019-2021'


            },
            {
                foto: '/Giovanna_Girotto.jpg',
                nome: 'Giovanna Girotto',
                descricao: ``,
                periodo: '2020-2021'
            },
            {
                foto: '/Guilherme_Yamashita.jpg',
                nome: 'Guilherme Yamashita',
                descricao: "",
                periodo: '2020-2021'
            },

            {
                foto: '/Gabriel_David.JPG',
                nome: 'Gabriel David',
                descricao: `"Quando a vida te decepciona, qual é a solução? Continue a nadar!" - Dory`,
                periodo: '2020-2021'
            },
            {
                foto: '/Gustavo_Ribeiro.jpg',
                nome: 'Gustavo Ribeiro',
                descricao: "",
                periodo: '2019-2021'
            },

            {
                foto: '/Lucas_Paiva.png',
                nome: 'Lucas Paiva',
                descricao: "",
                periodo: '2019-2021'


            },
            {
                foto: '/Lucas_Garrido.jpg',
                nome: 'Lucas Garrido',
                descricao: `Você é o único responsável por sua vida, tanto pelas suas conquistas quanto pelos seus fracassos. `,
                periodo: '2020-2021'
            },
            {
                foto: '/Matheus_Teixeira.jpg',
                nome: 'Matheus Teixeira',
                descricao: "",
                periodo: '2020-2021'
            },

            {
                foto: '/Murilo_Marchioni.jpg',
                nome: 'Murilo Marchioni',
                descricao: `“The best way to learn is to surround yourself with the right people. Hang out with people better than you, and you cannot help but improve. Nothing is more important than getting better people into your life.”   - Guy Spier
                `,
                periodo: '2020-2021'
            },
            {
                foto: '/Felipe_Pimentel.jpg',
                nome: 'Felipe Pimentel',
                descricao: "",
                periodo: '2019-2021'
            },
            {
                foto: '/Leme_Lorena.jpg',
                nome: 'Lorena Leme',
                descricao: ":)",
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
                        <Paper key={i} className='foto-petiano' elevation={0} style={{margin: 'auto', height: '100%', backgroundColor: '#252525'}}>
                    <div className="overflow">
                        <img style={{borderRadius: '50%', width: '14rem', border: '4px solid #252525'}} src={item.foto} ></img>
                    </div>
                    <div className='card-body text-white'>
                        <h4 className='card-title'>{item.nome}</h4>
                        <h6 className='text-secondary'>{item.periodo}</h6>
                        <p className='card-text' >{item.descricao}</p>
                    </div>
                    </Paper>
                    </Grid>
                    )
                }

                <Grid style={{paddingTop: '2rem'}} item lg={12} xs={12} md={12}>
                
                <h4 style={{textAlign: 'left'}}>Egressos de 2017</h4>
                <ul style={{textAlign: 'left', fontSize: '0.9rem'}}>
                    <li>Diego Ferraz Nazaré (desde novembro de 2014)</li>
                    <li>Gustavo da Costa Calviño (desde novembro de 2014)</li>
                    <li>Rodrigo Gatti Pinheiro (desde novembro de 2014)</li>
                    <li>Felipe Tufaile (desde novembro de 2015)</li>
                </ul>

                </Grid>
                </Container>
            </div>
        );
    }
}

MainPetianos = withStyles(styles)(MainPetianos);