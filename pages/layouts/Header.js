import React, { Component } from "react";
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import Botao from './Botao'

export default class Header extends Component {

    constructor() {

        super();
    }

    render() {

        return (

            <header>
                <div className="background-header size-header">
                </div>
                
                <Container style={{display: 'flex', alignItems: 'center', padding: '56px 0 0'}}>
                    <div className='text-content'>
                            <h1>Bem-vindo ao PET Mecânica</h1>
                            <p>O PET Mecânica é um grupo que abraça projetos para serem desenvolvidos em equipe</p>
                            <Botao value="Comece a explorar"></Botao>
                    </div>
                    <div className='' style={{padding: '40px 20px',height: '600px', width: '600px', margin: 'auto'}}>
                        <img src="/galera.jpg" className='rounded float-right' style={{
                            borderRadius: 'none', width: 'auto', height: 'auto', maxWidth: '600px', maxHeight: '600px'
                            }}/>
                    </div>
                </Container>
            </header>
        );
    }
}