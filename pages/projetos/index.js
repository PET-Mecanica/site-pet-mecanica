import React, {Component} from 'react'
import Main from '../layouts/Main'
import HeaderToolbar from '../layouts/HeaderToolbar'
import Footer from '../layouts/Footer'
import HeaderProjetos from './layouts/HeaderProjetos'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import Head from 'next/head'
import MainProjetos from './layouts/MainProjetos'


const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`

export default class HomePage extends Component {

    constructor(props) {

        super(props)
        this.state = {
            valid: false
        }
    }

    onValidate = event => {
        this.setState({valid: !this.state.valid})
    }

    render(){

        return (
            <>
            <Head>
                <link rel="icon" href="logo2.png" />
                <title>PET-Mecânica, Escola Politécnica da USP</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;1,600&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Bowlby+One+SC|Palanquin+Dark|Rubik+Mono+One&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
            </Head>
            <div className={`shadow-screen ${this.state.valid ? 'hidden' : ''}`}></div>
            <HeaderToolbar onValidate={this.onValidate} ></HeaderToolbar>
            <div className='container-fluid' style={{padding: '0', zIndex: '2'}}>
                <HeaderProjetos></HeaderProjetos>
                <MainProjetos></MainProjetos>
            </div>
            <svg className="svg-retangle-footer">
                    <rect className='retangle'></rect>
                </svg>
            <Footer></Footer>


            </>
        );
    }
}