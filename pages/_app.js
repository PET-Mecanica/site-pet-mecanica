import App from 'next/app'
import '../css/styles.css'
import '../css/link.css'
import '../css/index.css'
import { ThemeProvider } from 'styled-components'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const theme = {
  colors: {
    primary: '#0070f3',
  },
}

// This default export is required in a new `pages/_app.js` file.
export default class MyApp extends App {

    render() {

        const { Component, pageProps } = this.props

        return (

            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}