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
                    
                    <Grid item xs={5}>
                            <h3 style={{fontSize: '1.4em', color: '#B62638'}}>Bem-vindo ao </h3>
                            <h1 style={{fontWeight: '600', fontSize: '4.5em'}}>PET Mecânica</h1>
                            <h3 style={{fontSize: '1.4em', fontWeight: '400'}}>O PET Mecânica é um grupo que abraça projetos para serem desenvolvidos em equipe</h3>
                            <Botao value="Comece a explorar" color='#B62638'></Botao>
                    </Grid>
                    <Grid item xs={6}>
                    <div className='' style={{padding: '40px 0px',height: '600px', width: '600px', margin: 'auto'}}>
                        <img src="/zuado.jpg" className='float-right img-header'/>
                    </div>
                    </Grid>
                
                
                </Container>
            </header>
        );
    }
}