import Head from 'next/head'
import { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Footer from './footer';
import NavbarMenu from './NavbarMenu';


const Layout = ({children}) => (
    <Fragment>
        <Head>
            <meta charset="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="zalo-platform-site-verification" content="PVJYTuo6HrPNYTy9d8T844YAuHsa-ZP5D3K" />
            <title>My next app</title>
        </Head>
        <header>
            <NavbarMenu></NavbarMenu>
        </header>
        <main style={{ paddingBottom: '30px' }}>{children}</main>
        <Footer></Footer>
    </Fragment>
)   

export default Layout;
