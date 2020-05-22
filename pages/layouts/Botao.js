import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({

});

const styles = {

    root: {
        fontFamily: 'Roboto',
        LetterSpacing: '0.15rem !important',
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: '#FF6666',
        '&:hover': {
          backgroundColor: '#DD505E',
        },
        margin: theme.spacing(1),

      },
}

export default class Botao extends Component {

    render() {

        const { classes } = this.props



        return (

            <>
                <Button size='large' variant="outlined" className={classes.root}>
                    {this.props.value}
                </Button>
            </>
        );
    }
}

Botao = withStyles(styles)(Botao);
