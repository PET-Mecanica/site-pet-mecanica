import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'
import Botao from '../../layouts/Botao'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({

});

const styles = {

}

export default class MainSobre extends Component{

    render(){

        return(
            <div style={{backgroundColor: '#252525'}}>
            <Container className="reverse container row justify-content-between">
                <Grid item lg={6} md={12}>
                <img src="interno.jpg" className='float-left' style={{
                    width: '100%', height: '100%', maxWidth: '500px', maxHeight: '600px'
                    }}/>
                </Grid>
                <Grid item lg={6} md={12}>
                <h2 className="h1-center">O PET-MECÂNICA DA ESCOLA POLITÉCNICA DA USP</h2>
                <p className="p-center">O PET-Mecânica foi criado em 1991, ao mesmo tempo que o PET-Mecatrônica e o extinto PET-Minas, sendo estes os três primeiros grupos PET da Escola Politécnica da USP. Já passaram pelo PET-Mecânica mais de 100 alunos - entre bolsistas e colaboradores - e três professores tutores.</p>
                <p className="p-center">A intenção do grupo é desenvolver projetos de Pesquisa, Ensino e Extensão no âmbito do curso de Engenharia Mecânica da Poli-USP, de forma a contribuir para uma formação diferenciada não apenas de seus integrantes, mas também dos demais alunos do curso, tanto profissional quanto cidadã, incentivando o desenvolvimento da consciência social e das habilidades acadêmicas e pessoais - a curiosidade, o entusiasmo e a satisfação de ser parte ativa da história da Escola Politécnica da USP. Dessa forma, o PET-Mecânica busca ser reconhecido como um catalisador na melhoria da graduação na qual está inserido, sempre alinhado aos valores da Responsabilidade, Proatividade, Compromisso, Criatividade, Inovação e Ética.</p>
                <p className="p-center">O perfil de egresso que o PET-Mecânica busca é o profissional de engenharia com o perfil definido pela Escola Politécnica da USP e que, adicionalmente, seja capaz de liderar as pessoas ao seu redor e de incentivá-las a participar de mudanças positivas para a sociedade.</p>
                </Grid>
            
            </Container>

            <Container className="container row justify-content-between">
                <Grid item lg={6} md={12}>
                <h2 className="h1-center">O PET NO BRASIL</h2>
                <p className="p-center">O Programa de Educação Tutorial não se restringe ao curso de Engenharia Mecânica nem à USP. Atualmente existem 842 grupos PET distribuídos entre 121 Instituições de Ensino Superior por todo o Brasil. Criado em 1979 como Programa Especial de Treinamento, em 2004 passou a ser identificado pela denominação atual. Atualmente é mantido pela Secretaria de Educação Superior do Ministério da Educação, SESu/MEC.</p>
                <p className="p-center">O Programa de Educação Tutorial é composto por grupos tutoriais de aprendizagem e busca propiciar aos alunos, sob a orientação de um professor tutor, condições para a realização de atividades extracurriculares, que complementem a sua formação acadêmica, procurando atender mais plenamente às necessidades do próprio curso de graduação e/ou ampliar e aprofundar os objetivos e os conteúdos programáticos que integram sua grade curricular. Espera-se, assim, proporcionar a melhoria da qualidade acadêmica dos cursos de graduação apoiados pelo PET.</p>
                <p className="p-center">As atividades extracurriculares que compõem o Programa têm como objetivo garantir aos alunos do curso oportunidades de vivenciar experiências não presentes em estruturas curriculares convencionais, visando a sua formação global e favorecendo a formação acadêmica.</p>
                <p className="p-center">A médio e longo prazo, a SESu/MEC espera fomentar a formação de profissionais de nível superior, nas diversas áreas do conhecimento, dotados de elevados padrões científicos, técnicos, éticos e com responsabilidade social, nas diversas áreas do conhecimento, que sejam capazes de uma atuação no sentido da transformação da realidade nacional, em especial como docentes e pesquisadores pós-graduados em áreas profissionais.</p>
                </Grid>
                <Grid item lg={6} md={12}>
                <img src="brasil.png" className='float-right' style={{
                    width: '100%', height: '100%', maxWidth: '500px', maxHeight: '600px'
                    }}/>
                </Grid>
                </Container>

            <Container className="row justify-content-between" style={{padding: '40px 0'}}>

                    <div style={{textAlign: 'center'}}>
                    <Typography className='text' variant="h6" style={{paddingBottom: '15px'}}>DOCUMENTOS PARA SABER MAIS SOBRE O PET</Typography>
                    <Botao href='/pdpp.pdf' value='Clique aqui' color='#EEEEEF'></Botao>
                    </div>
            </Container>

            </div>
            );
    }
}

MainSobre = withStyles(styles)(MainSobre);