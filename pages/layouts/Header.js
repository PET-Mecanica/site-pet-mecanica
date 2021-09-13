import React, { Component } from "react";
import Container from '@material-ui/core/Container'
import Botao from './Botao'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({

});

export default class Header extends Component {

    constructor(props) {

        super(props)
        this.state ={
            body : false
        }

        this.scrollAnimation = this.scrollAnimation.bind(this)
    }


    componentDidUpdate() {

        if (this.state.body == true) {

            window.scrollBy(0, document.querySelector('html').clientHeight)
            this.setState({body: !this.state.body})

        }

    }

    scrollAnimation() {

        this.setState({body: !this.state.body})

    }

    render() {



        return (

            <header>
                <div className="background-header size-header"></div>
                <svg className="svg-retangle">
                    <rect className='retangle'></rect>
                </svg>
                

                <Container className="size-80 row justify-content-between toolbar">
                    
                    <Grid item lg={12} md={12} xs={12}>
                            <h6 className='start-text' style={{color: '#B62638', fontSize: '1.25rem', fontWeight: '700', textAlign: 'center'}}>Bem-vindo ao </h6>
                            <h1 className='start-text' style={{textAlign: 'left', fontWeight: '800', color: '#EEEEEF', textAlign: 'center'}}>PET Mecânica</h1>
                            <h6 className='start-text' style={{lineHeight: '1.6', fontSize: '1.25rem', color: '#AEB0B4', textAlign: 'center'}}>O PET Mecânica é um grupo que abraça projetos para serem desenvolvidos em equipe</h6>

                            <Button type='button' onClick={this.scrollAnimation} href={this.props.href} className='button' size='large' variant="outlined" style={{
        fontFamily: 'Poppins',
        LetterSpacing: '0.15rem !important',
        backgroundColor: 'rgb(0,0,0,0)',
        borderRadius: '0',
        border: `2px solid #B62638`,
        color: `#B62638`,
        margin: '4rem 8rem',
        outline: 'none',
        padding: '10px 22px',
        }}>
                    OLA
                </Button>
                    </Grid>               
                </Container>
            </header>
        );
    }
}