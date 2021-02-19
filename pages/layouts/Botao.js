import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({

});

const styles = {

    
}

export default class Botao extends Component {

    render() {

        return (

            <>
                <Button href={this.props.href} className='button-section' size='large' variant="outlined" style={{
        fontFamily: 'Poppins',
        LetterSpacing: '0.15rem !important',
        backgroundColor: 'rgb(0,0,0,0)',
        borderRadius: '0',
        border: `2px solid ${this.props.color}`,
        color: `${this.props.color}`,
        margin: theme.spacing(1),
        padding: '10px 22px',
        '&:hover': {
          color: `${this.props.colorHover} !important`,
          border: `2px solid ${this.props.colorHover} !important`,
        },
        }}>
                    {this.props.value}
                </Button>
            </>
        );
    }
}

Botao = withStyles(styles)(Botao);
