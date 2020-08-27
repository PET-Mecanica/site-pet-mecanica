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
                
                <div className="size-100" style={{backgroundColor: '#252525'}}>
                    <Container className="size-100 row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1280px'}}>
                        <Grid item xs={6}>
                        <img src="/pet.jpg" className='float-left' style={{
                                borderRadius: 'none', width: 'auto', height: 'auto', maxWidth: '500px', maxHeight: '600px'
                                }}/>
                        </Grid>
                        <Grid item xs={5}>
                                <Typography className='text' variant="h4" style={{paddingBottom: '15px'}}>O PET Mecânica da Escola Politécnica da USP</Typography>
                                <p className='text'>O PET-Mecânica foi criado em 1991, ao mesmo tempo que o PET-Mecatrônica e o extinto PET-Minas, 
                                    sendo estes os três primeiros grupos PET da Escola Politécnica da USP. </p>
                                <Botao href='/sobre' value='Saiba mais' color='#B62638'></Botao>
                        </Grid>
                    </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#B62638'}}>
                <Container className="size-100 row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1000px'}}>
                    <Grid item xs={5}>
                            <Typography className='text-black' variant="h4">Principais Atividades</Typography>
                            <p className='text-black'>Nas atividades desenvolvidas pelo PET-Mecânica busca-se sempre disseminar algum tipo de conhecimento ou conceito ao mesmo tempo 
                                em que se agregam outros conhecimentos e conceitos aos próprios integrantes do grupo, o que faz com que os integrantes do PET 
                                desenvolvam uma postura diferenciada e treinem técnicas pedagógicas:</p>
                            <Botao href='projetos' value='Saiba mais' color='#070708'></Botao>
                    </Grid>
                    <Grid item xs={6}>
                    <img src="/grupo.jpg" className='float-right' style={{
                            borderRadius: 'none', width: 'auto', height: 'auto', maxWidth: '500px', maxHeight: '600px'
                            }}/>
                    </Grid>
                </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#252525'}}>
                <Container className="size-100 row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1000px'}}>
                    <Grid item xs={6}>
                    <img src="/jp.jpg" className='float-left' style={{
                            borderRadius: 'none', width: 'auto', height: 'auto', maxWidth: '500px', maxHeight: '600px'
                            }}/>
                    </Grid>
                    <Grid item xs={5}>
                            <Typography className='text' variant="h4">Le Petianos</Typography>
                            <p className='text'>Conheça os alunos por trás do PET-Mecânica</p>
                            <Botao href='petianos' value='Saiba mais' color='#B62638'></Botao>
                    </Grid>
                </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#B62638'}}>
                <Container className="size-100 row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1000px'}}>
                    
                    <Grid item xs={5}>
                            <Typography variant="h4" className='text-black'>Projetos Atuais do PET</Typography>
                            <p className='text-black'>Descubra os Projetos que estão em desenvolvimento</p>
                            <Botao href='/projetos' value='Saiba mais' color='#070708'></Botao>
                    </Grid>
                    <Grid item xs={6}>
                        <Lottie options={{animationData: project}} height={300} width={300}></Lottie>
                    </Grid>
                </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#252525'}}>
                <Container className="size-100 row justify-content-between" style={{display: 'flex', alignItems: 'center', padding: '80px 0', maxWidth: '1000px'}}>
                    <Grid item xs={6}>
                        {<Lottie style={{float: 'left'}} options={defaultOptions} height={300} width={300}></Lottie>}
                    </Grid>
                    <Grid item xs={5}>
                            <Typography className='text' variant="h4">Pesquisas do PET</Typography>
                            <p className='text'>Conheça as Pesquisas que o PET Mecânica já fez</p>
                            <Botao href='/projetos' value='Saiba mais' color='#B62638'></Botao>
                    </Grid>
                </Container>
                </div>
            </>
        );
    }
}

Main = withStyles(styles)(Main);