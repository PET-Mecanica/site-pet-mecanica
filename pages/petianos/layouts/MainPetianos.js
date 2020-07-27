import React, { Component } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({

});

const styles = {


}

export default class MainPetianos extends Component {

    render() {

        return (

            <h1>Petianos</h1>
        );
    }
}

MainPetianos = withStyles(styles)(MainPetianos);