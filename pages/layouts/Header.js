import React, { Component } from "react";
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';


export default class Header extends Component {

    render() {

        return (

            <header>
                <div className="background-header size-header">
                </div>
                
                <Container style={{display: 'flex', alignItems: 'center', padding: '56px 0 0'}}>
                    <div className='text-content'>
                            <h1>Descubra sobre o PET Mecânica e seus Projetos</h1>
                            <p>O PET Mecânica é um grupo que abraça projetos para serem desenvolvidos em equipe</p>
                            <Button variant="outlined">Explore</Button>
                    </div>
                    <div className='' style={{height: '500px', width: '500px'}}>
                        <img src="/PET.svg" className='rounded float-right' style={{width: 'auto', height: 'auto'}}/>
                    </div>
                </Container>
            </header>
        );
    }
}