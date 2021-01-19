
import React, {Component} from 'react';
import Hamburger from './Hamburger'

export default class Menu extends Component {

    constructor(props) {

        super(props)
    }

    render() {
return (
      this.props.open ?

    
      <div style={{display:'flex'}}>
      <a className="navbar-brand" href="/"><img width="200px" src="/logoPET.svg" style={{display: 'flex', gridArea: '1 / 1', gridColumn: '1 / -1'}} /></a>


    
    <ul className="nav justify-content-flex-end" style={{ display: 'flex', gridArea: '1 / 2', padding: '0' }} >
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
    </div>
   
        
        :
        
        
          <Hamburger open = {this.props.open} />
          

)
    }
}