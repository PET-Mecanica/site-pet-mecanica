import React, { Component } from "react";
import Container from '@material-ui/core/Container'
import Botao from './Botao'
import Grid from '@material-ui/core/Grid'

export default class Header extends Component {


    render() {

        return (

            <header>
                <div className="background-header size-header"></div>
                <svg className="svg-retangle">
                    <rect className='retangle'></rect>
                </svg>
                

                <Container className="size-80 row justify-content-between toolbar">
                    
                    <Grid item lg={5} md={12}>
                            <h3 style={{color: '#B62638'}}>Bem-vindo ao </h3>
                            <h1>PET Mecânica</h1>
                            <h3 style={{fontWeight: '400'}}>O PET Mecânica é um grupo que abraça projetos para serem desenvolvidos em equipe</h3>
                            <Botao value="Comece a explorar" color='#B62638'></Botao>
                    </Grid>
                    <Grid item lg={6} md={12}>
                    
                    </Grid>
                
                
                </Container>
            </header>
        );
    }
}