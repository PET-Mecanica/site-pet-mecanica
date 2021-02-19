import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import List from '@material-ui/core/List';
import { Typography, Container, ListItem  } from '@material-ui/core'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';

export default class HeaderContato extends Component {


    render() {

        return (

            <header>
                <div className="background-header size-header"></div>
                <svg className="svg-retangle">
                    <rect className='retangle'></rect>
                </svg>
                <Container className="size-80 row justify-content-between toolbar">
                    <Grid item lg={5} md={12}>
                        <h2 style={{color: '#787878', textTransform: 'uppercase'}}>Contato</h2>
                        <p> Você pode falar conosco através do e-mail abaixo ou nos visitar na nossa sala no Prédio de Engenharia Mecânica e Naval da Escola Politécnica da USP, em São Paulo - SP.</p>
                        <h3 style={{color: '#B62638'}}>petmecanica.poli@gmail.com</h3>
                        <p> Nossas redes sociais abaixo:</p>
                        <a title='Facebook' style={{color: '#3B5998',paddingLeft: '10px',paddingRight: '10px', '&:hover': {color: '#ffffff'}}} href='https://www.facebook.com/petmecanica'><FacebookIcon style={{fontSize: 60}}/></a>
                    <a title='Instagram' style={{color: '#E1306C',paddingRight: '10px'}} href="https://www.instagram.com/pet_mecanica/"><InstagramIcon style={{fontSize: 60}}/></a>
                    <a title='Linkedin' style={{color: '#0E76A8',paddingRight: '10px'}} href="https://www.linkedin.com/company/petmecanica/"><LinkedInIcon style={{fontSize: 60}}/></a>

                    </Grid>
                </Container>
            </header>
        );
    }
}