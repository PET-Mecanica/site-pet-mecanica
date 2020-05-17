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

            <footer style={{backgroundColor: '#EEECED'}}>
                <Container maxWidth='lg'>
                    <Grid container justify='center' spacing={2} style={{paddingBottom: '30px'}}>
                    <Grid item xs={6}>
<List component='navbar'>
<ListItem>
<Typography variant="h6">PROJETOS</Typography>

</ListItem>
    <ListItem>
    Fala Sério
    </ListItem>
    <ListItem>Poli Mundi</ListItem>
    <ListItem>Apostilas</ListItem>
    <ListItem>SERES</ListItem>
</List>
                        </Grid>
                        <Grid item xs={6}>
<List component='navbar'>
<ListItem>
<Typography variant="h6">APOIO</Typography>

</ListItem>
    <ListItem>
    PET no Ministério da Educação
    </ListItem>
    <ListItem>Departamento de Engenharia Mecânica</ListItem>
    <ListItem>Escola Politécnica USP</ListItem>
    <ListItem>Universidade de São Paulo</ListItem>
</List>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" align="center" color="textSecondary">Escola Politécnica da USP Prédio de Eng. 
                        Mecânica, sala HT-17 ao lado das oficinas do PMR. Av. Prof. Mello Moraes, 2231 -
                         Cidade Universitária- CEP 05508-030, São Paulo - SP</Typography>
                    <Typography variant="body2" align='center' color='textSecondary'>
                    <b>PET MECÂNICA</b> - 2020 - Telefone: (11) 3091-9653 - 
                    <a style={{paddingRight: '10px'}} href='https://www.facebook.com/petmecanica'><FacebookIcon color='primary'/></a>
                    <a style={{paddingRight: '10px'}} href="https://www.instagram.com/pet_mecanica/"><InstagramIcon color='primary'/></a>
                    <a style={{paddingRight: '10px'}} href="https://www.linkedin.com/company/petmecanica/"><LinkedInIcon color="primary"/></a>

                    </Typography>
                        <Typography variant='body2' align='center' color='textSecondary'>
                            Hosted with ❤ by <a href='https://github.com/danielvitorpd'><GitHubIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} fontSize='small'></GitHubIcon></a>  
                        </Typography>
                </Container>
            </footer>
        );
    }
}