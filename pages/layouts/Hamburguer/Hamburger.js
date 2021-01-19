// Burger.js
import React, {Component} from 'react';
import Container from '@material-ui/core/Container'

export default class Hamburger extends Component {

  constructor(props) {

    super(props)
    this.state = {
      open: false
    }

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {

    this.setState({open: !this.state.open})


  }

  render() {

    return (
      <>
      
      <a className="navbar-brand" href="/"><img width="200px" src="/logoPET.svg" style={{display: 'flex', gridArea: '1 / 1', gridColumn: '1 / -1'}}  /></a>
      <nav class="navbar navbar-transparent" style={{ display: 'flex', gridArea: '1 / 2', padding: '0' }} >
              <div class="navbar-wrapper">
                      <div class={this.state.open ? "navbar-toggle d-inline toggled" : "navbar-toggle d-inline"}>
                          <button type="button" class="navbar-toggler" onClick={this.openMenu} >
                              <span class="navbar-toggler-bar bar1"></span>
                              <span class="navbar-toggler-bar bar2"></span>
                              <span class="navbar-toggler-bar bar3"></span>
                          </button>
                      </div>
                  <label></label>
              </div>
      </nav>
      
        
          {this.state.open ? 

            <div>
                  <ul className="nav justify-content-flex-end" >
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
                  <></>}
      </>
      
)
  }
}