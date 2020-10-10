import React, { Component } from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export default class HeaderSobre extends Component {


    render() {

        return (

            <header>
                <div className="background-header size-header"></div>
                <Container className="size-100 row justify-content-between toolbar">
                    <Grid item xs={12}>
                        <h3 style={{margin: 'auto', fontSize: '1.4em', color: '#B62638', textAlign: 'center'}}>Os Projetos do</h3>
                        <h1 style={{margin: 'auto', fontWeight: '600', fontSize: '4.5em', textAlign: 'center'}}>PET Mecânica</h1>
                    </Grid>
                </Container>
            </header>
        );
    }
}