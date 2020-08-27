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

        const { classes } = this.props



        return (

            <>
                <Button href={this.props.href} className='button' size='large' variant="outlined" style={{
        fontFamily: 'Poppins',
        LetterSpacing: '0.15rem !important',
        backgroundColor: 'rgb(0,0,0,0)',
        borderRadius: '0',
        border: `1px solid ${this.props.color}`,
        color: `${this.props.color}`,
        margin: theme.spacing(1),
        "&:hover": {
          color: '#252525',
          border: '1px solid #252525',
          backgroundColor: 'rgb(0,0,0,0)',
        },
        "&:last-child": {
            color: '#252525',
          border: '1px solid #252525',
          backgroundColor: 'rgb(0,0,0,0)',
          },
        }}>
                    {this.props.value}
                </Button>
            </>
        );
    }
}

Botao = withStyles(styles)(Botao);
