import React, {Component} from 'react'
import Main from './layouts/Main'
import HeaderToolbar from './layouts/HeaderToolbar'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import Head from 'next/head'

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`

export default class HomePage extends Component {

    render(){

        return (
            <>
            <Head>
                <link rel="icon" href="../public/logo.png" />
                <title>PET Mecânica</title>
                <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Bowlby+One+SC|Palanquin+Dark|Rubik+Mono+One&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
            </Head>
            <HeaderToolbar></HeaderToolbar>
            <div className='container-fluid' style={{padding: '0'}}>
                <Header></Header>
                <Main></Main>
            </div>
            <Footer></Footer>


            </>
        );
    }
}