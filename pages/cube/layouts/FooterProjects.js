import React, {Component} from 'react'
import { Typography, Container, ListItem  } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';


export default class Footer extends Component {

    render(){

        return (

            <footer style={{backgroundColor: '#06111C!important'}}>
                
                <Container maxWidth='lg'>
                    <Grid container justify='center' spacing={2} style={{paddingBottom: '30px'}}>
                    <Grid item xs={6}>
<List component='navbar'>
<ListItem>
<Typography variant="h6">PROJETOS</Typography>

</ListItem>
    <ListItem><a className="nav-link" href="">Fala Sério</a></ListItem>
    <ListItem><a className="nav-link" href="https://polimundi.wixsite.com/home">Poli Mundi</a></ListItem>
    <ListItem><a className="nav-link" href="">Apostilas</a></ListItem>
    <ListItem><a className="nav-link" href="http://sites.poli.usp.br/pme/pet/seres/">SERES</a></ListItem>
</List>
                        </Grid>
                        <Grid item xs={6}>
<List component='navbar'>
<ListItem>
<Typography variant="h6">APOIO</Typography>

</ListItem>
    <ListItem><a className="nav-link" href="http://portal.mec.gov.br/pet">PET no Ministério da Educação</a></ListItem>
    <ListItem><a className="nav-link" href="https://www.poli.usp.br/departamentos/pme-engenharia-mecanica">Departamento de Engenharia Mecânica</a></ListItem>
    <ListItem><a className="nav-link" href="https://www.poli.usp.br/">Escola Politécnica USP</a></ListItem>
    <ListItem><a className="nav-link" href="https://www5.usp.br/">Universidade de São Paulo</a></ListItem>
</List>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" align="center" color="initial">Escola Politécnica da USP Prédio de Eng. 
                        Mecânica, sala HT-17 ao lado das oficinas do PMR. Av. Prof. Mello Moraes, 2231 -
                         Cidade Universitária- CEP 05508-030, São Paulo - SP</Typography>
                    <Typography variant="body2" align='center' color='initial'>
                    <b>PET MECÂNICA</b> - 2021 - Telefone: (11) 3091-9653 - 
                    <a className="icon-footer" title='Facebook' style={{paddingLeft: '5px'}} href='https://www.facebook.com/petmecanica'><FacebookIcon style={{fontSize: 24}}/></a>
                    <a className="icon-footer" title='Instagram' href="https://www.instagram.com/pet_mecanica/"><InstagramIcon style={{fontSize: 24}}/></a>
                    <a className="icon-footer" title='Linkedin' href="https://www.linkedin.com/company/petmecanica/"><LinkedInIcon style={{fontSize: 24}}/></a>

                    </Typography>
                        <Typography variant='body2' align='center' color='initial'>
                            Hosted with <span style={{color: '#f00'}}>❤</span> by <a className="icon-footer" style={{paddingLeft: '5px'}} href='https://github.com/PET-Mecanica/site-pet-mecanica'><GitHubIcon style={{fontSize: 23 }}></GitHubIcon></a>  
                        </Typography>
                </Container>
            </footer>
        );
    }
}