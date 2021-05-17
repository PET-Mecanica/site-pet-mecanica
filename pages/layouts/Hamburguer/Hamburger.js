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

  componentDidMount() {

    const hidden = document.getElementById('tela-escura')
}

  openMenu() {

    this.setState({open: !this.state.open})

    this.props.onValidate()
  
  }

  render() {

    return (
      <>
      
      <a className="navbar-brand" href="/pet"><img width="200px" src="logoPET.svg" style={{display: 'flex', gridArea: '1 / 1', gridColumn: '1 / -1'}}  /></a>
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

            <>

                      <a className="nav-link" href="/pet/sobre.html" style={{gridArea: "2 / 1"}}>Sobre</a>

                      <a className="nav-link" href="/pet/petianos.html" style={{gridArea: "3 / 1"}} >Petianos</a>

                      <a className="nav-link" href="/pet/projetos.html" style={{gridArea: "4 / 1"}} >Projetos</a>

                      <a className="nav-link" href="/pet/contato.html" style={{gridArea: "5 / 1"}} >Contato</a>

          </>

                  :
                  <></>}
      </>
      
)
  }
}