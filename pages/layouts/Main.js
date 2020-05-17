import { Component } from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { createMuiTheme, withStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Lottie from 'react-lottie'
import rocket from '../../rocket.json'
import project from '../../project.json'

const theme = createMuiTheme({

});

const styles = {

    paper: {
        height: 330,
        width: 300,
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
                <Container align='center' style={{display: 'flex', magin: 'auto', flexWrap: 'wrap'}}>
                    <Grid container justify='center' spacing={2}>
                        <Grid item xs={4}>
                            <Paper className={classes.paper} elevation={3}>EVENTOS</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper} elevation={3}>FEIRA DE PROFISSÕES</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper} elevation={3}>CURSOS</Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Container style={{display: 'flex', alignItems: 'center', padding: '56px 0 0', maxWidth: '1000px'}}>
                    <Grid item xs={6}>
                        <img src="/PET.svg" className='rounded float-right' style={{width: '200px', height: '300px'}}/>
                    </Grid>
                    <Grid item xs={6}>
                            <Typography variant="h6">O PET-MECÂNICA DA ESCOLA POLITÉCNICA DA USP</Typography>
                            <p>O PET-Mecânica foi criado em 1991, ao mesmo tempo que o PET-Mecatrônica e o extinto PET-Minas, 
                                sendo estes os três primeiros grupos PET da Escola Politécnica da USP. </p>
                            <Button variant="outlined">Saiba mais</Button>
                    </Grid>
                </Container>
                <Container style={{display: 'flex', alignItems: 'center', padding: '56px 0 0', maxWidth: '1000px'}}>
                    <Grid item xs={6}>
                            <Typography variant="h6">PRINCIPAIS ATIVIDADES DO PET-MECÂNICA DA POLI-USP</Typography>
                            <p>Nas atividades desenvolvidas pelo PET-Mecânica busca-se sempre disseminar algum tipo de conhecimento ou conceito ao mesmo tempo 
                                em que se agregam outros conhecimentos e conceitos aos próprios integrantes do grupo, o que faz com que os integrantes do PET 
                                desenvolvam uma postura diferenciada e treinem técnicas pedagógicas:</p>
                            <Button variant="outlined">Saiba mais</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img src="/PET.svg" className='rounded float-right' style={{width: '200px', height: '300px'}}/>
                    </Grid>
                </Container>
                <Container style={{display: 'flex', alignItems: 'center', padding: '56px 0 0', maxWidth: '1000px'}}>
                    <Grid item xs={6}>
                        <img src="/PET.svg" className='rounded float-right' style={{width: '200px', height: '300px'}}/>
                    </Grid>
                    <Grid item xs={6}>
                            <Typography variant="h6">OS PETIANOS</Typography>
                            <p>Conheça os alunos por trás do PET-Mecânica</p>
                            <Button variant="outlined">Saiba mais</Button>
                    </Grid>
                </Container>
                <Container style={{display: 'flex', alignItems: 'center', padding: '56px 0 0', maxWidth: '1000px'}}>
                    
                    <Grid item xs={6}>
                            <Typography variant="h6">PROJETOS</Typography>
                            <p>Descubra os Projetos que estão em desenvolvimento</p>
                            <Button variant="outlined">Saiba mais</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Lottie options={{animationData: project}} height={300} width={300}></Lottie>
                    </Grid>
                </Container>
                <Container style={{display: 'flex', alignItems: 'center', padding: '56px 0 0', maxWidth: '1000px'}}>
                    <Grid item xs={6}>
                        <Lottie options={defaultOptions} height={300} width={300}></Lottie>
                    </Grid>
                    <Grid item xs={6}>
                            <Typography variant="h6">PESQUISAS</Typography>
                            <p>Conheça as Pesquisas que o PET Mecânica já fez</p>
                            <Button variant="outlined">Saiba mais</Button>
                    </Grid>
                </Container>
            </>
        );
    }
}

Main = withStyles(styles)(Main);