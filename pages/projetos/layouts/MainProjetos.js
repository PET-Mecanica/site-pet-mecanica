import React, { Component } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Paper, Card } from "@material-ui/core";
import Botao from '../../layouts/Botao'



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
                descricao: `
                O projeto de tecnologia, desenvolvido em
parceria com o laboratório “Fábrica do Futuro”,
tem como objetivo modelar e prototipar um
sistema de aparafusamento automatizado, de
baixo custo, de um truck ao shape de um skate,`,
                imagem: 'Skate do Futuro.JPG'
            },
            {
                titulo: 'PET Recicla',
                descricao: 'Em parceria com o professor Ronan Contrera do PHA, a pesquisa visa o desenvolvimento de um biodigestor de escala residencial para a produção de biogás a partir de resíduos orgânicos domésticos.',
                imagem: 'pet-recicla.jpg'
            },
            {
                titulo: 'Embrace Diversity',
                descricao: 'O núcleo de minorias Embrace Diversity surgiu com os objetivos de acolher, ampliar e fomentar a diversidade dentro do grupo, além de trazer esse debate para os petianos e reforçar a importância da representatividade no curso de engenharia mecânica.',
                imagem: 'Capa Embrace Diversity.png'
            },
            {
                titulo: 'Poli Mundi',
                descricao: 'O Poli Mundi visa a concentrar em seu site informações úteis e confiáveis sobre os intercâmbios oferecidos pela Escola Politécnica, principalmente por meio de depoimentos de politécnicos que participaram dos programas de internacionalização da graduação.',
                imagem: 'poli-mundi.jpg'
            },
            {
                titulo: 'Mini Cursos PET',
                descricao:'Tem como objetivo capacitar os atuais membros do PET através de mini cursos, workshops organizados pelos próprios membros.',
                imagem: 'mini-curso-pet.png'
            },
            {
                titulo: 'IDEEA',
                descricao: 'Focado em desenvolver tecnologias inovadores, o projeto internacional IDEEA junta diversas universidades ao redor do mundo em equipes para colaborarem entre si, o que já resultou em drones auxiliadores no processo de polinização, por exemplo. O desafio de 2021 é desenvolver soluções de mobilidade urbana para grandes cidades.',
                imagem: 'ideea.jpg'
            },
            {
                titulo: 'Pesquisa de Evasão',
                descricao: 'Um projeto voltado para a identificação das necessidades mais latentes do curso de Engenharia Mecânica da Escola Politécnica da USP. ',
                imagem: 'Foto.jpg'
            }

        ]

        return (
            <div style={{backgroundColor: '#252525', paddingTop: '60px'}}>
                <Container className="row justify-content-space-around container-fluid d-flex" style={{display: 'flex !important',
    textAlign: 'center'}}>

        {
            items.map((item, i) => 
            
            <Grid item lg={4} xs={12} md={6} style={{paddingBottom: '1rem'}} >

                    <Paper key = {i} style={{margin: 'auto', height: '100%', backgroundColor: '#2f2f2f',}} elevation={0} className="paper">
                <div className="overflow">
                    <img className='card-img-top' src={item.imagem} alt=""/>
                </div>
                <div className='card-body text-dark' style={{textAlign: 'center'}}>
                    <h4 style={{fontWeight: 'bold', color: '#EEEEEF'}} className='card-title'>{item.titulo}</h4>
                
                    <p className='card-text'>
                        {item.descricao}
                    </p>

                <Botao color='#EEEEEF' value='SAIBA MAIS'></Botao>
               
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

MainProjetos = withStyles(styles)(MainProjetos);