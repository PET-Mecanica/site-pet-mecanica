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
}

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
                <Toolbar>

                </Toolbar>
                <Container align='center' style={{display: 'flex', margin: 'auto', flexWrap: 'wrap'}}>
                    <Grid container justify='center' spacing={2}>
                        <Grid item xs={4}>
                            <Paper style={{height: 300,
        width: 300,
        backgroundColor: '#1F1F1F',
        color: '#78787A'}}  className={classes.paper} elevation={2}>
                                <div style={{padding: '50px'}}>
                                <img style={{paddingBottom: '20px'}} height='90px' width='90px' src='/confetti2.svg'/>
                                </div>
                                <div style={{paddingTop: '20px'}}>
                                    <Typography variant='h5'>
                                    Eventos com o Grupo

                                </Typography></div>

                                </Paper>
                        </Grid>
                        <Grid item xs={4}>
                        <Paper style={{height: 300,
        width: 300,
        backgroundColor: '#1F1F1F',
        color: '#78787A'}}  className={classes.paper} elevation={2}>
                                <div style={{padding: '50px'}}>
                                <img style={{paddingBottom: '20px'}} height='90px' width='90px' src='/confetti2.svg'/>
                                </div>
                                <div style={{paddingTop: '20px'}}>
                                    <Typography variant='h5'>
                                    Feira de Profissões

                                </Typography></div>

                                </Paper>
                        </Grid>
                        <Grid item xs={4}>
                        <Paper style={{height: 300,
        width: 300,
        backgroundColor: '#1F1F1F',
        color: '#78787A'}}  className={classes.paper} elevation={2}>
                                <div style={{padding: '50px'}}>
                                <img style={{paddingBottom: '20px'}} height='90px' width='90px' src='/confetti2.svg'/>
                                </div>
                                <div style={{paddingTop: '20px'}}>
                                    <Typography variant='h5'>
                                        Cursos feitos pelos próprios estudantes
                                </Typography></div>

                                </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Container className="row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1000px'}}>
                    <Grid item xs={6}>
                    <img src="/pet.jpg" className='rounded float-left' style={{
                            borderRadius: 'none', width: 'auto', height: 'auto', maxWidth: '500px', maxHeight: '600px'
                            }}/>
                    </Grid>
                    <Grid item xs={5}>
                            <Typography variant="h6">O PET-MECÂNICA DA ESCOLA POLITÉCNICA DA USP</Typography>
                            <p className='text'>O PET-Mecânica foi criado em 1991, ao mesmo tempo que o PET-Mecatrônica e o extinto PET-Minas, 
                                sendo estes os três primeiros grupos PET da Escola Politécnica da USP. </p>
                            <Botao value='Saiba mais'></Botao>
                    </Grid>
                </Container>
                <Container className="row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1000px'}}>
                    <Grid item xs={5}>
                            <Typography variant="h6">PRINCIPAIS ATIVIDADES DO PET-MECÂNICA DA POLI-USP</Typography>
                            <p className='text'>Nas atividades desenvolvidas pelo PET-Mecânica busca-se sempre disseminar algum tipo de conhecimento ou conceito ao mesmo tempo 
                                em que se agregam outros conhecimentos e conceitos aos próprios integrantes do grupo, o que faz com que os integrantes do PET 
                                desenvolvam uma postura diferenciada e treinem técnicas pedagógicas:</p>
                            <Botao value='Saiba mais'></Botao>
                    </Grid>
                    <Grid item xs={6}>
                    <img src="/grupo.jpg" className='rounded float-right' style={{
                            borderRadius: 'none', width: 'auto', height: 'auto', maxWidth: '500px', maxHeight: '600px'
                            }}/>
                    </Grid>
                </Container>
                <Container className="row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1000px'}}>
                    <Grid item xs={6}>
                    <img src="/jp.jpg" className='rounded float-left' style={{
                            borderRadius: 'none', width: 'auto', height: 'auto', maxWidth: '500px', maxHeight: '600px'
                            }}/>
                    </Grid>
                    <Grid item xs={5}>
                            <Typography variant="h6">OS PETIANOS</Typography>
                            <p className='text'>Conheça os alunos por trás do PET-Mecânica</p>
                            <Botao value='Saiba mais'></Botao>
                    </Grid>
                </Container>
                <Container className="row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1000px'}}>
                    
                    <Grid item xs={5}>
                            <Typography variant="h6">PROJETOS</Typography>
                            <p className='text'>Descubra os Projetos que estão em desenvolvimento</p>
                            <Botao value='Saiba mais'></Botao>
                    </Grid>
                    <Grid item xs={6}>
                        <Lottie options={{animationData: project}} height={300} width={300}></Lottie>
                    </Grid>
                </Container>
                <Container className="row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1000px'}}>
                    <Grid item xs={6}>
                        {<Lottie style={{float: 'left'}} options={defaultOptions} height={300} width={300}></Lottie>}
                    </Grid>
                    <Grid item xs={5}>
                            <Typography variant="h6">PESQUISAS</Typography>
                            <p className='text'>Conheça as Pesquisas que o PET Mecânica já fez</p>
                            <Botao value='Saiba mais'></Botao>
                    </Grid>
                </Container>
            </>
        );
    }
}

Main = withStyles(styles)(Main);