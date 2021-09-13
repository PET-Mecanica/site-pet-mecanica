import React, { Component } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Paper, Card } from "@material-ui/core";
import Botao from '../../layouts/Botao'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Link from 'next/link'


const theme = createMuiTheme({

});

const styles = {

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(48),
          height: theme.spacing(48),
        },
      },
    
    paper: {
        backgroundImage: 'url(../public/dots.png)',
        backgroundSize: 'contain',
        backgroundColor: 'rgba(0,0,0,0.1)'

    },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
}

export default class MainProjetos extends Component {

    constructor(props){

        super(props)
        this.state = {
            open: [false, false, false, false, false, false, false, false, false, false]
        }

        this.openModal1 = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        
    }

    openModal = (index) => {

        let open = this.state.open;
        console.log(open[index])
        open[index] = true;
        this.setState({open: open })
    };

    closeModal = () => {
        
        let open = this.state.open

        for (var i = 0; i < this.state.open.length; i++) {
            open[i] = false
        }

        this.setState({open: open})
    }

    render() {

        const { classes } = this.props

        var items = [

            {

                titulo: 'Skate do Futuro',
                descricao: `
                O projeto de tecnologia, desenvolvido em
parceria com o laboratório “Fábrica do Futuro”,
tem como objetivo modelar e prototipar um
sistema de aparafusamento automatizado, de
baixo custo, de um truck ao shape de um skate.`,
                
imagem: 'Skate do Futuro.JPG',

descricaoDetalhada: [`O projeto "Skate do Futuro" surgiu a partir de uma parceria entre o PET Mecânica e o laboratório de tecnologia da Escola Politécnica da Universidade de São Paulo "Fábrica do Futuro".`,

,`O laboratório parceiro tem como escopo a indústria 4.0. Com isso, o projeto elaborado visa fomentar o segmento através de um mecanismo de aparafusamento automatizado de um Truck ao Shape de um Skate, contribuindo, assim, para o segmento de manufatura do laboratório, que utiliza o Skate e suas partes como método de validação das novas tecnologias.

`,`O projeto teve início em março de 2020, portanto, no início do período da pandemia da COVID-19. Assim, as atividades desenvolvidas foram realizadas de maneira integralmente remota, com o apoio de mais de 8 membros internos.

`,`O projeto foi segmentado em 3 grandes áreas: 

`,`Avanço: responsável pelo processo de aproximação da caixa de aparafusamento ao Shape através de fusos e castanhas associados a motores de passo.

`,`Aparafumento: responsável pelo processo aparafusamento a partir de 4 motores de passo associados a eixos com ferramentas.

`,`Base: responsável por fixar o Skate e parte das suas peças , além de promover um movimento de avanço horizontal realizado por fuso e castanha.`],

imagemDetalhada: [`Untitled.png`, `Untitled (1).png`, `Untitled (2).png`],
            },
            {
                titulo: 'PET Recicla',
                descricao: 'Em parceria com o professor Ronan Contrera do PHA, a pesquisa visa o desenvolvimento de um biodigestor de escala residencial para a produção de biogás a partir de resíduos orgânicos domésticos.',
                imagem: 'pet-recicla.jpg',
                descricaoDetalhada: [`O projeto surgiu em novembro, no contexto da pandemia, como continuidade da etapa em grupo do processo seletivo de 2020. A princípio, o PET Recicla tinha o objetivo de aprofundar os conhecimentos do grupo na temática de reciclagem, gestão de lixo e resíduos sólidos e, dessa forma, ser possível  o desenvolvimento de uma solução de engenharia e inovação. Nesse contexto, o subtema de maior interesse foi a questão de Resíduos Orgânicos, bem como as tecnologias de biodigestão e compostagem.
 
                `,`Após essa fase de imersão, neste início de 2021, o projeto do PET Recicla dá início a fase de pesquisa em grupo, com a atuação de sete membros do PET Mecânica e sob a orientação do professor Ronan Contrera do Departamento de Engenharia Hidráulica e Ambiental da Escola Politécnica da USP. O tema da pesquisa é o desenvolvimento de um biodigestor de escala residencial para a produção de biogás a partir de resíduos orgânicos domésticos.`],
imagemDetalhada: [`pet-recicla1.png`, `pet-recicla2.jpg`, `pet-recicla3.jpg`],

            },
            {
                titulo: 'Embrace Diversity',
                descricao: 'O núcleo de minorias Embrace Diversity surgiu com os objetivos de acolher, ampliar e fomentar a diversidade dentro do grupo, além de trazer esse debate para os petianos e reforçar a importância da representatividade no curso de engenharia mecânica.',
                imagem: 'embrace-diversity.png',
                descricaoDetalhada: [`A pauta do projeto surgiu tendo em vista a falta de diversidade étnico-racial, de gênero e sexual dentro do curso de engenharia mecânica e, consequentemente, do PET Mecânica. Entretanto, além de respeito, a Poli precisa de inclusão, representatividade e debate, funções que não cabem apenas aos coletivos de acolhimento de minorias ou às políticas de cotas da universidade, mas cabem  a toda comunidade politécnica e a todos os grupos de extensão e pesquisa. 
 
                `,`Nesse sentido, o PET Mecânica reconhece a relevância da temática de diversidade e, desde já, se compromete a fazer o seu papel nessa luta por inclusão e repúdio ao preconceito de qualquer tipo. Idealizado durante o período de isolamento social por dois nov@s petian@s, o núcleo Embrace Diversity foi criado com os objetivos de fomentar, acolher e ampliar a diversidade dentro do grupo, além de trazer esse debate para os petianos e reforçar a importância de representatividade de minorias no curso. 
                 
                `,`Dentre os projetos que a Embrace Diversity se propõe a realizar, destacam-se: debates e conteúdos internos ou abertos para todo o curso sobre diversidade e minorias; a movimentação das mídias sociais do PET Mecânica no contexto dessas temáticas; a promoção de estatísticas sobre as minorias dentro do curso de engenharia mecânica na Poli; além da divulgação e o acolhimento de grupos minoritários nos próximos processos seletivos.`],
imagemDetalhada: [`embrace-diversity1.jpg`, `Capa Embrace Diversity.png`],

            },
            {
                titulo: 'Poli Mundi',
                descricao: 'O Poli Mundi visa a concentrar em seu site informações úteis e confiáveis sobre os intercâmbios oferecidos pela Escola Politécnica, principalmente por meio de depoimentos de politécnicos que participaram dos programas de internacionalização da graduação.',
                imagem: 'poli-mundi.jpg',
                descricaoDetalhada: [`O Poli Mundi visa a concentrar em um só lugar (site) informações úteis e confiáveis sobre os intercâmbios oferecidos pela Escola Politécnica. Para tanto, almeja-se o esclarecimento dos questionamentos mais frequentes dos alunos em relação a todas as etapas do intercâmbio, desde o processo seletivo até o retorno à Poli. São abordados aspectos culturais, financeiros e do cotidiano dos possíveis destinos de intercâmbio. 

                `,`O principal escopo é a exposição de todas as informações necessárias para a tomada de decisões quando o assunto é intercâmbio. Alguns fatores importantes são os países que podem ser destino dos estudantes; as universidades que possuem acordo com a Poli; e quais as exigências da universidade no exterior (língua, *curriculum*, etc.).
                
                `,`O projeto do Poli Mundi começou a ser executado em 2015. Após um hiato de dois anos, foi retomado em 2020 e passou por uma reestruturação, sendo criadas três áreas: Formulário, Identidade Visual e Site.
                
                `,`Formulário: responsável por elaborar o formulário de coleta dos depoimentos de intercambistas, de modo a padronizar as respostas e facilitar a categorização dos textos.
                
                `,`Identidade Visual: encarregada de criar um novo logo para o projeto, bem como elaborar os demais recursos visuais necessários.
                
                `,`Site: tem como meta construção, manutenção e atualização do conteúdo a ser divulgado no novo site do projeto.
                
                `,`Nesse processo de retomada do projeto, o ponto central é a construção de um novo site para exposição das informações, o qual seja melhor organizado, mais padronizado e com uma estética mais agradável em comparação ao site anterior.`],
imagemDetalhada: [`1.png`, `2.png`, `3.png`],

            },
            {
                titulo: 'Mini Cursos PET',
                descricao:'Tem como objetivo capacitar os atuais membros do PET através de mini cursos, workshops organizados pelos próprios membros.',
                imagem: 'mini-curso-pet.png',
                descricaoDetalhada: [`O Mini Cursos PET é uma iniciativa dos membros do PET de constante aprendizado. Suportado pelo pilar do Ensino, ele incentiva o aprendizado e capacitação dos membros do PET-Mecânica através de atividades expositivas ou interativas organizadas por um ou mais membros do próprio grupo. Dessa forma, além do conhecimento a ser transmitido pelo ministrante do curso, há também o treino e pesquisa realizado por esse, que precisa organizar o conteúdo, muitas vezes aprofundá-lo e, organizá-lo.

                `,`Os cursos são oferecidos de acordo com a demanda do grupo e a oferta de alguém que se dispõe a ensinar. Com um concílio de ambas as partes, uma data favorável é acertada e o ministrante do minicurso ou do workshop tem o tempo também acordado para concluir seu trabalho. Isso envolve preparo de material, ensaio e muita didática. Algumas vezes, outras entidades também participam, firmando parcerias em prol da continuidade do conhecimento.
                
                `,`Já os temas são muito relacionados ao mercado de trabalho e ao curso de graduação em que estamos inseridos. Alguns exemplos de minicursos já ministrados são software de edição de imagens e vídeo, softwares de integração numérica, softwares de edição de texto, produtividade, metodologias de projeto entre outros.
                
                `,`O projeto é aberto a todos os membros, e já foi realizado, também, um mini curso de LaTeX para o público em geral. Esse minicurso foi o primeiro passo par uma futura abertura para outros temas.`],
imagemDetalhada: [],

            },
            {
                titulo: 'IDEEA',
                descricao: 'Focado em desenvolver tecnologias inovadores, o projeto internacional IDEEA junta diversas universidades ao redor do mundo em equipes para colaborarem entre si, o que já resultou em drones auxiliadores no processo de polinização, por exemplo. O desafio de 2021 é desenvolver soluções de mobilidade urbana para grandes cidades.',
                imagem: 'ideea.jpg',
                descricaoDetalhada: [`Building the education of tomorrow's designers and engineers`
                ,`IDEEA é uma organização internacional sem fins lucrativos formada por 22 universidades mundo afora e empresas com a missão de desenvolver a educação e a pesquisa de novas tecnologias relevantes para mobilidade, desenvolvimento de produtos e indústria 4.0, tornando-se um laboratório para a indústria experimentar, resolver e desenvolver novos métodos, visão e direção para o futuro. 

                `,`Baseado na metodologia Design Thinking, a organização promove competições de ciclos anuais com a promoção de design e engenharia colaborativos em equipes internacionais compostas pelas universidades participantes para o desenvolvimento de tecnologias, cujo impacto seja grande.
                
                `,`Os projetos anteriores focaram-se em Drone Modulares inovadores para certas demandas com grande impacto social. Assim, foram projetados drones para auxiliar no combate a incêndios e na polinização de plantas, por exemplo.
                
                `,`A Poli foi convidada em 2021 para fazer parte da IDEEA, e é aí que entra o PET, que fornece suas bases para criar uma equipe competitiva, auxiliando-a neste começo. O projeto atual envolve desenvolver soluções de mobilidade para grandes metrópoles.
                `],
imagemDetalhada: [`foto_drone.png`, `proejto_atual.png`],

            },
            {
                titulo: 'Pesquisa de Avaliação de Curso',
                descricao: 'Um projeto voltado para a identificação das necessidades mais latentes do curso de Engenharia Mecânica da Escola Politécnica da USP. ',
                imagem: 'Foto.jpg',
                descricaoDetalhada: [`A Pesquisa Avaliativa teve início como iniciativa da representação discente do curso de Engenharia Mecânica da Escola Politécnica. Logo no início, contou com o completo apoio do PET-Mecânica, se tornando um projeto deste. A pesquisa surgiu em março de 2020, com o propósito de identificar pontos de melhoria necessários para a evolução do curso, assim como aumentar o grau de satisfação por parte dos alunos e dos professores.`
                ,` O projeto já está bem avançado, tendo passado pelo processo de elaboração do formato da pesquisa, assim como o levantamento dos principais indicadores de qualidade do curso que serão avaliados na pesquisa. Muito em breve, será divulgado o questionário avaliativo final, restando apenas o tratamento dos dados obtidos e a divulgação dos resultados.`],
imagemDetalhada: [`pesquisa1.jpeg`, `pesquisa2.jpeg`, `pesquisa3.jpeg`],

            },
            {

                titulo: 'Fala Sério',
                descricao: 'Grande parceiro do PET Mecânica, o Fala Sério atua para motivar, inspirar, promover autoconhecimento e mostrar o papel da educação na construção dos sonhos e do futuro de alunos do Ensino Médio Público.',
                imagem: 'fala_serio.png',
                descricaoDetalhada: [

                    `A passagem do Ensino Médio para a vida adulta faz com que os alunos tenham que encarar diversas questões sobre o futuro, muitas vezes incerto, que os espera. Para auxiliar os alunos a responderem esses questionamentos, surgiu o Fala Sério.`
                    ,`A Iniciativa Fala Sério é um projeto criado em 2014 por integrantes do PET Mecânica, e que desde 2018 constitui um grupo independente e que reúne participante dos mais variados institutos da USP, ainda continuando um grande parceiro do PET atualmente. Os seus principais objetivos são motivar, inspirar, promover o autoconhecimento e mostrar o papel da educação na construção do futuro dos jovens.`
                    ,` O grupo pretende, portanto, ajudá-los a definir o que querem para o futuro baseados na esperança que carregam dentro de si, ajudando-os a serem aquilo que, no fundo, eles querem ser. Dessa forma, aborda-se os temas "felicidade" e "futuro" com o intuito de expandir seus horizontes de possibilidades e sonhos, para que, assim, eles tenham coragem e esperança para fazerem aquilo que almejam, quaisquer que sejam as circunstâncias.`
                    ,`Durante esses 6 anos, foram realizadas atividades em diversas escolas públicas diferentes, impactando, ao todo, mais de mil alunos. Atualmente, a equipe de voluntários conta com membros ativos de diversos institutos diferentes da USP e busca crescer e se diversificar cada vez mais.`
                ],
                imagemDetalhada: ['fala_serio1.jpg', 'fala_serio2.jpg', 'fala_serio3.jpg',],
            },
            {

                titulo: 'Mídias',
                descricao: `A equipe de Marketing é um setor da administração interna do PET-Mecânica, que cuida especialmente das redes sociais do grupo. O objetivo do projeto é promover os trabalhos e projetos realizados pelo PET e a divulgação de conteúdo educacional, assim levar o trabalho científico para além dos muros da universidade, fazendo chegar ao público.`,              
                imagem: 'midias.png',
                descricaoDetalhada: [
                    `A equipe de Marketing é um setor da administração interna do PET-Mecânica, que cuida especialmente das redes sociais do grupo. O objetivo do projeto é promover os trabalhos e projetos realizados pelo PET e a divulgação de conteúdo educacional, assim levar o trabalho científico para além dos muros da universidade, fazendo chegar ao público.`,                   
`Integrantes: Daniel Damião, Gabriel Duarte, Giovanna Giroto, Luca Gusela, Lucas Garrido, Lucas Godoi, Lucas Paiva e Vittor Breid.`
                    ],
                imagemDetalhada: [],
            },
            {

                titulo: 'Poli Polaris',
                descricao: `A equipe Poli Polaris, incubada no início de 2021, visa a desenvolver uma equipe com foco no estudo e prototipagem de CubeSats, satélites de tamanho reduzido e baixo custo. Com isso, o foco é não somente em competições nacionais e internacionais, como a CubeDesign e OBSAT, mas também em projetos científicos de longo prazo, como lançamento de satélites.`,
                imagem: 'poli_polaris.png',
                descricaoDetalhada: [
                    `A equipe Poli Polaris, incubada no início de 2021, visa a desenvolver uma equipe com foco no estudo e prototipagem de CubeSats, satélites de tamanho reduzido e baixo custo. Com isso, o foco é não somente em competições nacionais e internacionais, como a CubeDesign e OBSAT, mas também em projetos científicos de longo prazo, como lançamento de satélites.`,

`Em sua primeira competição, a OBSAT (Olimpíada Brasileira de Satélites), a equipe elaborou os passos iniciais da missão Polaris I, cujo intuito é desenvolver um satélite para monitorar o branqueamento de corais na costa brasileira. Com menos de três meses de existência, o grupo foi aprovado para a segunda fase, garantindo a 8º posição em todo o Estado de São Paulo e recebendo materiais para executar a missão planejada.`,

`Além disso, a equipe tem como objetivo difundir o tema de CubeSats na Escola Politécnica e, assim, integrar membros e membras das mais diversas engenharias. O Poli Polaris incentiva, portanto, o estudo e o desenvolvimento de tecnologias de ponta no tema aeroespacial dentro da universidade pública.`
                    ],
                imagemDetalhada: ['Montagem.png'],
            }

        ]

        return (
            <div style={{backgroundColor: '#252525', paddingTop: '60px'}}>
                <Container className="row justify-content-space-around container-fluid d-flex" style={{display: 'flex !important',
    textAlign: 'center'}}>

        {
            
            items.map((item, index) => 
<>
            <Grid item lg={4} xs={12} md={6} style={{paddingBottom: '1rem'}} >

                    <Paper key = {index} style={{margin: 'auto', height: '100%', backgroundColor: '#2f2f2f',}} elevation={0} className="paper">
                <div className="overflow">
                    <img className='card-img-top' src={item.imagem} alt=""/>
                </div>
                <div className='card-body text-dark' style={{textAlign: 'center'}}>
                    <h4 style={{fontWeight: 'bold', color: '#EEEEEF'}} className='card-title'>{item.titulo}</h4>
                
                    <p className='card-text'>
                        {item.descricao}
                    </p>
                <Link href="/">
                <Button href="/" onClick={() => this.openModal(index)} className='button-section button-project' size='large' variant="outlined" style={{
        fontFamily: 'Poppins',
        LetterSpacing: '0.15rem !important',
        backgroundColor: 'rgb(0,0,0,0)',
        borderRadius: '0',
        border: `2px solid #EEEEEF`,
        color: `#EEEEEF`,
        margin: theme.spacing(1),
        padding: '10px 22px',
        outline: 'none'
        }}>
                    SAIBA MAIS
                </Button>
                </Link>
               
                </div>
            </Paper>

    </Grid>


<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
className={classes.modal}
open={this.state.open[index]}
onClose={this.closeModal}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
  timeout: 500,
}}
>
<Fade in={this.state.open[index]}>

<Container className="row justify-content-space-around container-fluid d-flex" style={{display: 'flex !important',
    textAlign: 'center', backgroundColor: '#2f2f2f'}}>

<Grid className={item.imagemDetalhada.length == 0 ? 'display-none' : ""} item lg={6} md={6} >

<div className="overflow" style={{padding: '5rem 0'}}>
    {item.imagemDetalhada.map(imagem => <img style={{borderRadius: '0', margin: '.5rem', width: '18rem', border: '5px solid #fff', boxShadow: '-5px 5px 8px rgba(0,0,0,0.15)'}} className='card-img-top' src={imagem} alt=""/>)}
                    
                </div>

</Grid>
<Grid item lg={item.imagemDetalhada.length == 0 ? 12 : 6} md={item.imagemDetalhada.length == 0 ? 12 : 6} >
<div className='card-body text-dark' style={{textAlign: 'center'}}>
                    <h4 style={{fontWeight: 'bold', color: '#EEEEEF'}} className='card-title'>{item.titulo}</h4>                             
                        {item.descricaoDetalhada.map(paragrafo => <p  className='card-text'>{paragrafo}</p>)}

                    

                    </div>
</Grid>
</Container>
</Fade>
</Modal>
</>                
            )
        }
        </Container>
            </div>
        );
    }
}

MainProjetos = withStyles(styles)(MainProjetos);