import React, {Component} from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'



export default class HeaderToolbar extends Component {

    render() {

        return (

            <>
                <Toolbar variant="nav-bar" style={{zIndex: '10', position: 'absolute', minWidth: '100%', paddingTop: '40px'}}>
                    <Container>
          <Toolbar style={{justifyContent: 'space-between', padding: '0 !important'}}>
          <a className="navbar-brand" href="/"><img width="200px" src="/logoPET.svg"/></a>
        <ul className="nav justify-content-flex-end">
            <li className="nav-item">
                <a className="nav-link" href="/sobre">Sobre</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/petianos">Petianos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/projetos">Projetos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contato">Contato</a>
            </li>
        </ul>
          </Toolbar>
              
                    
                    </Container>
                </Toolbar>
            </>
        );
    }
}