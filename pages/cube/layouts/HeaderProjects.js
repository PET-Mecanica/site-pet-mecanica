import {Component} from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


export default class HeaderProjects extends Component {

    constructor(props) {

        super(props);
    }
 
    render() {

        return(

            <header>
                <div className="background-header size-header"></div>
                <Container className="size-80 row justify-content-between toolbar">
                    <Grid item xs={6}>
                        <h1 style={{margin: 'auto', fontWeight: '600', textAlign: 'center'}}>CUBE SAT</h1>
                    </Grid>
                    <Grid>
                        <img alt="" src={this.props.img}></img>
                    </Grid>
                </Container>
            </header>
        );
    }
}