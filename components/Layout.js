import Head from 'next/head'
import { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarMenu from './NavbarMenu';


const Layout = ({children}) => (
    <Fragment>
        <Head>
            <meta charset="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>My next app</title>
        </Head>
        <header>
            <NavbarMenu></NavbarMenu>
        </header>
        <main style={{ paddingBottom: '30px' }}>{children}</main>
    </Fragment>
)   

export default Layout;