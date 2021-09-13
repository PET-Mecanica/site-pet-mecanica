import { Component } from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { createMuiTheme, withStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

export default class MainCube extends Component {

    render() {

        return(
<>
<div className="size-100" style={{backgroundColor: '#113662'}}>
                    <Container className="container size-100 row justify-content-between">
                    
                        <Grid className='grid' item lg={6} md={12}>
                                <Typography className='text' variant="h2">O que é o Poli Polaris?</Typography>
                                <p className='text'>A equipe Poli Polaris, incubada no início de 2021, visa a desenvolver uma equipe com foco no estudo e prototipagem de CubeSats, satélites de tamanho reduzido e baixo custo. Com isso, o foco é não somente em competições nacionais e internacionais, como a CubeDesign e OBSAT, mas também em projetos científicos de longo prazo, como lançamento de satélites.</p>
                        </Grid>
                        <Grid className='grid' item lg={6} md={12}>
                        <img src="poli_polaris.png" className='float-left' style={{
                                borderRadius: 'none', width: '100%', height: '100%', maxWidth: '500px', maxHeight: '600px', transform: 'translateX(0%)', paddingBottom: '1rem'
                                }}/>
                        <img src='banner_pattern.png' className='product-overlay img-fluid banner-left' ></img>

                        </Grid>
                    </Container>

                    
                </div>


<div className="size-100" style={{backgroundColor: '#113662'}}>
                    <Container className="container size-100 row justify-content-between">

                    <Grid className='grid' item lg={6} md={12}>
                       
                        <img src="Montagem.png" className='float-left' style={{
                                borderRadius: 'none', width: '100%', height: '100%', maxWidth: '500px', maxHeight: '600px', transform: 'translateX(0%)', paddingBottom: '1rem'
                                }}/>
                        <img src='banner_pattern.png' className='product-overlay img-fluid banner-left' ></img>

                        </Grid>
                        <Grid className='grid' item lg={6} md={12}>
                                <Typography className='text' variant="h2">O Começo do Projeto</Typography>
                                <p className='text'>A equipe Poli Polaris, incubada no início de 2021, visa a desenvolver uma equipe com foco no estudo e prototipagem de CubeSats, satélites de tamanho reduzido e baixo custo. Com isso, o foco é não somente em competições nacionais e internacionais, como a CubeDesign e OBSAT, mas também em projetos científicos de longo prazo, como lançamento de satélites.</p>
                        </Grid>
                    </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#113662'}}>
                    <Container className="container size-100 row justify-content-between">
                        <Grid className='grid' item lg={6} md={12}>
                                <Typography className='text' variant="h2">Os Avanços</Typography>
                                <p className='text'>Em sua primeira competição, a OBSAT (Olimpíada Brasileira de Satélites), a equipe elaborou os passos iniciais da missão Polaris I, cujo intuito é desenvolver um satélite para monitorar o branqueamento de corais na costa brasileira. Com menos de três meses de existência, o grupo foi aprovado para a segunda fase, garantindo a 8º posição em todo o Estado de São Paulo e recebendo materiais para executar a missão planejada.</p>
                        </Grid>
                    </Container>
                </div>

                <div className="size-100" style={{backgroundColor: '#113662'}}>
                <Container className="container size-100 row justify-content-between">
                    <Grid className='grid' item lg={6} md={12}>
                            <Typography className='text' variant="h2">Objetivo do Projeto</Typography>
                            <p className='text'>Além disso, a equipe tem como objetivo difundir o tema de CubeSats na Escola Politécnica e, assim, integrar membros e membras das mais diversas engenharias. O Poli Polaris incentiva, portanto, o estudo e o desenvolvimento de tecnologias de ponta no tema aeroespacial dentro da universidade pública.</p>
                    </Grid>
                </Container>
            </div>
</>
        );
    }
} 