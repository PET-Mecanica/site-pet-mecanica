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
                    
                    <Grid item lg={5} md={12}>
                            <h3 style={{color: '#B62638'}}>Bem-vindo ao </h3>
                            <h1>PET Mecânica</h1>
                            <h3 style={{fontWeight: '400'}}>O PET Mecânica é um grupo que abraça projetos para serem desenvolvidos em equipe</h3>

                            <Button type='button' onClick={this.scrollAnimation} href={this.props.href} className={this.props.color == '#B62638' ? 'button' : ''} size='large' variant="outlined" style={{
        fontFamily: 'Poppins',
        LetterSpacing: '0.15rem !important',
        backgroundColor: 'rgb(0,0,0,0)',
        borderRadius: '0',
        border: `1px solid #B62638`,
        color: `#B62638`,
        margin: theme.spacing(1),
        outline: 'none',
        '&:hover': {
          color: `#e0d2d3 !important`,
          border: `1px solid #e0d2d3 !important`,
        },
        }}>
                    Comece a explorar
                </Button>
                    </Grid>
                    <Grid item lg={6} md={12}>
                    
                    </Grid>
                
                
                </Container>
            </header>
        );
    }
}