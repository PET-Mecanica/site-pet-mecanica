import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({

});

const styles = {

    root: {
        LetterSpacing: '0.15rem !important',
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: '#B62638',
        '&:hover': {
          backgroundColor: '#A01F35',
        },
        margin: theme.spacing(1),

      },
}

export default class Botao extends Component {

    render() {

        const { classes } = this.props



        return (

            <>
                <Button size='large' variant="outlined" style={{color: '#000000 !important',
        fontFamily: 'Poppins',
        LetterSpacing: '0.15rem !important',
        backgroundColor: '#B62638',
        '&:hover': {
          backgroundColor: '#A01F35',
        },
        margin: theme.spacing(1),}}>
                    {this.props.value}
                </Button>
            </>
        );
    }
}

Botao = withStyles(styles)(Botao);
