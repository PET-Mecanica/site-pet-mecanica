import React, {Component} from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'



export default class HeaderToolbar extends Component {

    render() {

        return (

            <>
                <Toolbar style={{zIndex: '10', position: 'absolute', padding: '20px 20px 60px', minWidth: '100%'}}>
                    <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align='left'
          noWrap
          className='title'
        >
          <a><img src="/logoPET.svg"/></a>
        </Typography>
        <ul className="nav justify-content-flex-end">
            <li className="nav-item">
                <a className="nav-link" href="#">Sobre</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Petianos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pesquisas</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contato</a>
            </li>
        </ul>
                    
                </Toolbar>
            </>
        );
    }
}