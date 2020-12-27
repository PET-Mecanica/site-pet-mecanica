import { Component } from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { createMuiTheme, withStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Lottie from 'react-lottie'
import rocket from '../../11022-rocket.json'
import project from '../../project.json'
import Botao from './Botao'
import Toolbar from '@material-ui/core/Toolbar'

const theme = createMuiTheme({

});

const styles = {

    paper: {
        height: 300,
        width: 300,
        backgroundColor: '#1F1F1F',
        color: '#fff'
    }
};

export default class Main extends Component {

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: rocket,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
              
            },
          };

        const { classes } = this.props

        return(

            <>
                
                <div className="size-100" style={{backgroundColor: '#252525'}}>
                    <Container className="container size-100 row justify-content-between">
                        <Grid className='grid' item lg={6} md={12}>
                        <img src="/pet.jpg" className='float-left' style={{
                                borderRadius: 'none', width: '100%', height: '100%', maxWidth: '500px', maxHeight: '600px'
                                }}/>
                        </Grid>
                        <Grid className='grid' item lg={6} md={12}>
                                <Typography className='text' variant="h2">O PET Mecânica da Escola Politécnica da USP</Typography>
                                <p className='text'>O PET-Mecânica foi criado em 1991, ao mesmo tempo que o PET-Mecatrônica e o extinto PET-Minas, 
                                    sendo estes os três primeiros grupos PET da Escola Politécnica da USP. </p>
                                <Botao href='/sobre' value='Saiba mais' color='#e1e1e6'></Botao>
                        </Grid>
                    </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#252525'}}>
                <Container className="container size-100 row justify-content-between">
                    <Grid className='grid' item lg={6} md={12}>
                            <Typography className='text' variant="h2">Principais atividades do PET Mecânica</Typography>
                            <p className='text'>Um dos principais objetivos das atividades é disseminar conhecimento.</p>
                            <Botao href='projetos' value='Saiba mais' color='#e1e1e6'></Botao>
                    </Grid>
                    <Grid className='grid' item lg={6} md={12}>
                    <img src="/grupo.jpg" className='float-right' style={{
                            borderRadius: 'none', width: '100%', height: '100%', maxWidth: '500px', maxHeight: '600px'
                            }}/>
                    </Grid>
                </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#252525'}}>
                <Container className="container size-100 row justify-content-between">
                    <Grid className='grid' item lg={6} md={12}>
                    <img src="/jp.jpg" className='float-left' style={{
                            borderRadius: 'none', width: '100%', height: '100%', maxWidth: '500px', maxHeight: '600px'
                            }}/>
                    </Grid>
                    <Grid className='grid' item lg={6} md={12}>
                            <Typography className='text' variant="h2">Conheça os Petianos</Typography>
                            <p className='text'>Conheça os alunos por trás do PET-Mecânica</p>
                            <Botao href='petianos' value='Saiba mais' color='#e1e1e6'></Botao>
                    </Grid>
                </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#252525'}}>
                <Container className="container size-100 row justify-content-between">
                    
                    <Grid className='grid' item lg={6} md={12}>
                            <Typography variant="h2" className='text'>Projetos atuais do PET Mecânica</Typography>
                            <p className='text'>Descubra os Projetos que estão em desenvolvimento</p>
                            <Botao href='/projetos' value='Saiba mais' color='#e1e1e6'></Botao>
                    </Grid>
                    <Grid className='grid' item lg={6} md={12}>
                        
                    </Grid>
                </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#252525'}}>
                <Container className="container size-100 row justify-content-between">
                    <Grid className='grid' item lg={6} md={12}>
                        
                    </Grid>
                    <Grid className='grid' item lg={6} md={12}>
                            <Typography className='text' variant="h2">Pesquisas do PET Mecânica</Typography>
                            <p className='text'>Conheça as Pesquisas que o PET Mecânica já fez</p>
                            <Botao href='/projetos' value='Saiba mais' color='#e1e1e6'></Botao>
                    </Grid>
                </Container>
                </div>
            </>
        );
    }
}

Main = withStyles(styles)(Main);