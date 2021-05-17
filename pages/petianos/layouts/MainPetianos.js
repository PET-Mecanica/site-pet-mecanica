import React, { Component } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Paper, Card } from "@material-ui/core";

const theme = createMuiTheme({

});

const styles = {


}

export default class MainPetianos extends Component {

    render() {

        var egressos = [
            {
                "nome": "Alessandra da Cruz Nunes de Moraes"
            },
            {
                "nome": "Andrei Steschenko"
            },
            {
                "nome": "Augusto Strutz Banchieri de Paula"
            },
            {
                "nome": "Caique de Oliveira Kobayashi"
            },
            {
                "nome": "Eduardo Naoki Akiyoshi Ichige"
            },
            {
                "nome": "Gabriel de Sousa Araujo"
            },
            {
                "nome": "Gustavo Topdjian Bomfim"
            },
            {
                "nome": "Herval Pereira de Castro Junior"
            },
            {
                "nome": "Lucas de Oliveira Fracarolli"
            },
            {
                "nome": "Lucas Hattori Costa"
            },
            {
                "nome": "Mariane Soares dos Santos"
            },
            {
                "nome": "Pietra Brizot Vargas"
            },
            {
                "nome": "Rodrigo Zabotto Chiusoli"
            },
            {
                "nome": "Thiago Lima Oliveira"
            },
            {
                "nome": "Vitor Coppola"
            },
            {
                "nome": "Vitor Fuzimoto"
            },
            {
                "nome": "Vitor Luis Andrade"
            },
            {
                "nome": "Thais Hanashiro Moraes"
            },
            {
                "nome": "Pedro Henrique Pavelski"
            },
            {
                "nome": "Raissa Vergopolan"
            },
            {
                "nome": "Guilherme Müller da Silva"
            },
            {
                "nome": "Rogério Yukio Rodriguez"
            },
            {
                "nome": "Igor Schroter Salviatto"
            },
            {
                "nome": 'Diego Ferraz Nazaré (desde novembro de 2014)'

            },
            {
                "nome": 'Gustavo da Costa Calviño (desde novembro de 2014)'

            },
            {
                "nome": 'Rodrigo Gatti Pinheiro (desde novembro de 2014)'

            },
            {
                "nome": 'Felipe Tufaile (desde novembro de 2015)'

            },
            {
                "nome": "Albert Lopes de Oliveira"
            },
            {
                "nome": "Alessandra Lie Fujii"
            },
            {
                "nome": "Alessandro Aparecido Zanetti"
            },
            {
                "nome": "Alon Lederman"
            },
            {
                "nome": "Ana Amélia Loschiavo Arisawa"
            },
            {
                "nome": "André Daher de Moura"
            },
            {
                "nome": "André dos Santos Bonatto"
            },
            {
                "nome": "André dos Santos Cerciari"
            },
            {
                "nome": "Ariane Rodrigues de Oliveira"
            },
            {
                "nome": "Arshpreet Singh"
            },
            {
                "nome": "Arthur Pereira Goes"
            },
            {
                "nome": "Breno de Almeida Avancini"
            },
            {
                "nome": "Caio de Almeida Camilli"
            },
            {
                "nome": "Caio Henrique Kakiuti Bonini"
            },
            {
                "nome": "Carlos Augusto Vendramini"
            },
            {
                "nome": "Carlos Henrique Corteline"
            },
            {
                "nome": "Carolina Rezende de Castro"
            },
            {
                "nome": "Casemiro Tercio dos Reis Lima Carvalho"
            },
            {
                "nome": "Celso Rocha Alves Júnior"
            },
            {
                "nome": "Cláudio Alberto Ikeda"
            },
            {
                "nome": "Cristiane Moreira Rocco"
            },
            {
                "nome": "Daniel Custódio Lopes Trigo"
            },
            {
                "nome": "Daniel Gaspari Cirne de Toledo"
            },
            {
                "nome": "Daniel Masiero Nering"
            },
            {
                "nome": "Daniel Vilela"
            },
            {
                "nome": "Danillo Petrere Duarte"
            },
            {
                "nome": "Denis Alves Ferreira"
            },
            {
                "nome": "Diego Ferraz Nazaré"
            },
            {
                "nome": "Dustin Yajima"
            },
            {
                "nome": "Eleir Mundim Bortoleto"
            },
            {
                "nome": "Emmanuel Gantois Longa Filho"
            },
            {
                "nome": "Fábio Paniza Diaz"
            },
            {
                "nome": "Felipe Bezerra de Lima Lopes"
            },
            {
                "nome": "Felipe Sereno Barbosa"
            },
            {
                "nome": "Felipe Soares de Barros Barreto"
            },
            {
                "nome": "Fernando Akira Sato"
            },
            {
                "nome": "Fernando Geremias Toni"
            },
            {
                "nome": "Fernando Igarashi Ferraz de Arruda"
            },
            {
                "nome": "Fernando Luiz Sacomano Filho"
            },
            {
                "nome": "Fernando Martins Pedro"
            },
            {
                "nome": "Filipe Filgueira Farias"
            },
            {
                "nome": "Gabriel Guerra Costa"
            },
            {
                "nome": "Gabrielle Allana Fernandes de Souza"
            },
            {
                "nome": "Glaucia Ligia Kelly Priscilla Midori Funakura Gondo"
            },
            {
                "nome": "Guilherme de Moura Porto"
            },
            {
                "nome": "Guilherme Turra"
            },
            {
                "nome": "Gustavo da Costa Calviño"
            },
            {
                "nome": "Gustavo de Barros"
            },
            {
                "nome": "Gustavo Rocha da Silva Santos"
            },
            {
                "nome": "Henrique de Saes Triboni"
            },
            {
                "nome": "Henrique dos Reis Cadioli"
            },
            {
                "nome": "Hilário Marcos Koyama"
            },
            {
                "nome": "Jacques Magalhães Benain"
            },
            {
                "nome": "Jefferson Edward Gizzi"
            },
            {
                "nome": "João Carlos Ronchel Soares"
            },
            {
                "nome": "João Pedro Matos de Oliveira Pereira"
            },
            {
                "nome": "João Vitor Tomotani"
            },
            {
                "nome": "Jonas Machado Miguel"
            },
            {
                "nome": "José Eduardo Azevedo Ribeiro do Valle"
            },
            {
                "nome": "José Moreira de Souza Neto"
            },
            {
                "nome": "Jun Porto"
            },
            {
                "nome": "Keila Keiko Matsumura"
            },
            {
                "nome": "Keren Dantas Mineiro"
            },
            {
                "nome": "Leandro Cordeiro David"
            },
            {
                "nome": "Léo Cunha Caldeira Mesquita"
            },
            {
                "nome": "Leonardo Nicolas Letelier Pimstein"
            },
            {
                "nome": "Lucas Britan Giestas"
            },
            {
                "nome": "Lucas Hideki Furushio"
            },
            {
                "nome": "Lucas Nalesso Gonçalves"
            },
            {
                "nome": "Lucas Vinícius Antunes Rosa"
            },
            {
                "nome": "Luis Felipe Meyer de Orey Gaivão"
            },
            {
                "nome": "Marcela Tuboi da Ponta"
            },
            {
                "nome": "Marcelo Fernandes de Oliveira"
            },
            {
                "nome": "Marcelo Luiz Alves Fernandez"
            },
            {
                "nome": "Márcio Augusto Gomes Fernandes"
            },
            {
                "nome": "Márcio Norio Kobayashi"
            },
            {
                "nome": "Márcio Pagliuso Basso"
            },
            {
                "nome": "Marco Vitor de Brito Oliveira"
            },
            {
                "nome": "Marcos Andrade da Silva"
            },
            {
                "nome": "Marcos Eduardo Elias"
            },
            {
                "nome": "Marcos Ribeiro de Castro"
            },
            {
                "nome": "Maria Regina Gomes Zoby"
            },
            {
                "nome": "Marília Vidigal da Costa Souza"
            },
            {
                "nome": "Marlos Bonelli Leonel"
            },
            {
                "nome": "Mateus Costa Biselli"
            },
            {
                "nome": "Matheus Galdi da Silva"
            },
            {
                "nome": "Matheus Rabelo Lopes"
            },
            {
                "nome": "Melina Pereira Martins"
            },
            {
                "nome": "Miguel Chaves dos Santos"
            },
            {
                "nome": "Natália Bernardi Ghisi"
            },
            {
                "nome": "Natalia Espíndola Gabriel"
            },
            {
                "nome": "Patrícia Moraes Corregiari"
            },
            {
                "nome": "Paulo Roberto Ferreira"
            },
            {
                "nome": "Pedro Gabriel Castro dos Santos"
            },
            {
                "nome": "Pedro Henrique Moreira Pessoa"
            },
            {
                "nome": "Rafael Andrade Machado"
            },
            {
                "nome": "Rafael Felipe da Silva"
            },
            {
                "nome": "Rafael Nass de Andrade"
            },
            {
                "nome": "Rafael Ramon Araújo Costa"
            },
            {
                "nome": "Rafael Ramos Gonçalves Passos"
            },
            {
                "nome": "Renata Yumi Takeshita"
            },
            {
                "nome": "Renato Forni"
            },
            {
                "nome": "Ricardo Floriano de Souza"
            },
            {
                "nome": "Ricardo Prado Soares"
            },
            {
                "nome": "Ricardo Shirota Filho"
            },
            {
                "nome": "Roberto Eskenazi"
            },
            {
                "nome": "Rodolfo Figueira de Souza"
            },
            {
                "nome": "Rodrigo Christophe Marangoni"
            },
            {
                "nome": "Rodrigo Gatti Pinheiro"
            },
            {
                "nome": "Rodrigo Romano Pretola"
            },
            {
                "nome": "Rodrigo Thiago Vioto Cunha"
            },
            {
                "nome": "Rodrigo Vodola do Amaral"
            },
            {
                "nome": "Ronaldo Uliana de Oliveira"
            },
            {
                "nome": "Samuel Alexandre de Oliveira Rodrigues"
            },
            {
                "nome": "Samuel José Sarraf Borelli"
            },
            {
                "nome": "Silas Henrique Gonçalves Junior"
            },
            {
                "nome": "Silvio Luis Hori Cavallaro"
            },
            {
                "nome": "Taciana Tonetto Castelo Branco Trigo"
            },
            {
                "nome": "Thales Marques Barbosa"
            },
            {
                "nome": "Thiago Luis Cabral de Sousa"
            },
            {
                "nome": "Thiago Vilaça Vieira Silva"
            },
            {
                "nome": "Thomas Guercio"
            },
            {
                "nome": "Tiago Naviskas Lippi"
            },
            {
                "nome": "Valter Barbosa Júnior"
            },
            {
                "nome": "Victor Rocha Lima Pitaluga"
            },
            {
                "nome": "Vinicius Garcia do Prado"
            },
            {
                "nome": "Vitor Belissimo Faleiros"
            },
            {
                "nome": "Vítor Henrique Uemura Biscuola"
            },
            {
                "nome": "Walter Mussio Fornazier Volpini"
            },
            {
                "nome": "William Corrêa Guttner"
            },
            {
                "nome": "Yuri Perim"
            }
        ];

        var items = [

            {
                foto: 'Joao_Nunes.jpg',
                nome: 'João Nunes',
                descricao: "Nenhuma limitação do ser humano é maior do que a que ele mesmo impõe.",
                periodo: '2018-2020'


            },
            {
                foto: 'gusela.jpg',
                nome: 'Luca Gusella',
                descricao: `"If there's love in this life we're unstoppable" - Avicii`,
                periodo: '2019-2021'
            },
            {
                foto: 'Vittor_Braide.jpg',
                nome: 'Vittor Braide',
                descricao: "O pior tipo de arrependimento é por aquilo que não fazemos.",
                periodo: '2020-2021'
            },

            {
                foto: 'Gabriel_Souza.jpg',
                nome: 'Gabriel Souza',
                descricao: "",
                periodo: '2019-2021'


            },
            {
                foto: 'Giovanna_Girotto.jpg',
                nome: 'Giovanna Girotto',
                descricao: ``,
                periodo: '2020-2021'
            },
            {
                foto: 'Guilherme_Yamashita.jpg',
                nome: 'Guilherme Yamashita',
                descricao: "",
                periodo: '2020-2021'
            },

            {
                foto: 'Gabriel_David.JPG',
                nome: 'Gabriel David',
                descricao: `"Quando a vida te decepciona, qual é a solução? Continue a nadar!" - Dory`,
                periodo: '2020-2021'
            },
            {
                foto: 'Gustavo_Ribeiro.jpg',
                nome: 'Gustavo Ribeiro',
                descricao: "",
                periodo: '2019-2021'
            },

            {
                foto: 'Lucas_Paiva.png',
                nome: 'Lucas Paiva',
                descricao: "",
                periodo: '2018-2021'


            },
            {
                foto: 'Lucas_Garrido.jpg',
                nome: 'Lucas Garrido',
                descricao: `Você é o único responsável por sua vida, tanto pelas suas conquistas quanto pelos seus fracassos. `,
                periodo: '2020-2021'
            },
            {
                foto: 'Matheus_Teixeira.jpg',
                nome: 'Matheus Teixeira',
                descricao: "",
                periodo: '2020-2021'
            },

            {
                foto: 'Murilo_Marchioni.jpg',
                nome: 'Murilo Marchioni',
                descricao: `“The best way to learn is to surround yourself with the right people. Hang out with people better than you, and you cannot help but improve. Nothing is more important than getting better people into your life.”   - Guy Spier
                `,
                periodo: '2019-2021'
            },
            {
                foto: 'Felipe_Pimentel.jpeg',
                nome: 'Felipe Pimentel',
                descricao: "Nada é em vão, todos caminhos têm algo a ensinar.",
                periodo: '2020-2021'
            },
            {
                foto: 'Leme_Lorena.jpg',
                nome: 'Lorena Leme',
                descricao: ":)",
                periodo: '2019-2021'
            },
            {
                foto: 'blank-profile.png',
                nome: 'Caio de Souza',
                descricao: '',
                periodo: '2020-2021'
            },
            {
                foto: 'Bruno_Piazza.jpg',
                nome: 'Bruno Piazza',
                descricao: "",
                periodo: '2019-2021'
            },
            {
                foto: 'blank-profile.png',
                nome: 'Daniel Damião',
                descricao: "",
                periodo: '2019-2021'
            },
            {
                foto: 'Lucas_Godoi.jpeg',
                nome: 'Lucas de Godoi',
                descricao: '',
                periodo: '2019-2021'
            },
            {
                foto: 'Rafael_Durand.JPG',
                nome: 'Rafael Durand',
                descricao: '',
                periodo: '2020-2021'
            },
        ]

        return (

            <div style={{backgroundColor: '#252525'}}>
<Container className="row justify-content-space-around container-fluid d-flex" style={{display: 'flex',
    textAlign: 'center',
    /* padding: 80px 0px; */}}>
<Grid style={{padding: '3rem 0'}} item lg={12} xs={12} md={12} ><h4>Tutores</h4></Grid>
                    <Grid item lg={4} xs={12} md={6} style={{padding: '1rem', margin: 'auto'}}>
                        <Paper className='foto-petiano' elevation={0} style={{margin: 'auto', height: '100%', backgroundColor: '#252525'}}>
                    <div className="overflow">
                        <img style={{borderRadius: '50%', width: '14rem', border: '4px solid #252525'}} src="Tamai.jpg" ></img>
                    </div>
                    <div className='card-body text-white'>
                        <h4 className='card-title'>Edilson Hiroshi Tamai</h4>
                        <h6 className='text-secondary'>2000-Atual</h6>
                        <p className='card-text' ></p>
                    </div>
                    </Paper>
                    </Grid>
<Grid style={{padding: '3rem 0'}} item lg={12} xs={12} md={12} ><h4>Petianos Atuais</h4></Grid>
                {
                    items.map((item, i) => 
                    <Grid item lg={4} xs={12} md={6} style={{padding: '1rem'}}>
                        <Paper key={i} className='foto-petiano' elevation={0} style={{margin: 'auto', height: '100%', backgroundColor: '#252525'}}>
                    <div className="overflow">
                        <img style={{borderRadius: '50%', width: '14rem', border: '4px solid #252525'}} src={item.foto} ></img>
                    </div>
                    <div className='card-body text-white'>
                        <h4 className='card-title'>{item.nome}</h4>
                        <h6 className='text-secondary'>{item.periodo}</h6>
                        <p className='card-text' >{item.descricao}</p>
                    </div>
                    </Paper>
                    </Grid>
                    )
                }

                <Grid style={{paddingTop: '2rem'}} item lg={12} xs={12} md={12}>
                
                <h4 style={{textAlign: 'left'}}>Egressos</h4>
                <ul style={{textAlign: 'left', fontSize: '0.9rem'}}>
                    {egressos.map((user, index) => index%2 == 0
                    ? <p className="card-text nome-egressos" style={{listStyleType: 'none', float: 'left', width: '50%'}}>{user.nome}</p> 
                    : <p className="card-text nome-egressos" style={{listStyleType: 'none'}}>{user.nome}</p>)}
                </ul>

                </Grid>
                </Container>
            </div>
        );
    }
}

MainPetianos = withStyles(styles)(MainPetianos);