import React, {Component} from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Hamburger from './Hamburguer/Hamburger'
import Menu from './Hamburguer/Menu'

export default class HeaderToolbar extends Component {

    constructor(props) {

        super(props);
        this.state = {
            width: 0,
            open: true,

            
        }
    }

    componentDidMount() {

        const width = document.querySelector('body').clientWidth;

        this.setState({ width: width })

        if (width < 481) {

            this.setState({open: false})
        }

    }

    render() {

        return (

            <>
                <Toolbar style={{zIndex: '10', position: 'absolute', minWidth: '100%', padding: '40px 0 0 0'}}>
                    <Container>
                        <Toolbar style={{justifyContent: 'space-between', padding: '0 !important', display: 'grid'}}>
                        
                        
                        <Menu open = {this.state.open}/>
                            


                        </Toolbar>
                    </Container>
                </Toolbar>
            </>
        );
    }
}
