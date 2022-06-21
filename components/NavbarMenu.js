import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link'

const NavbarMenu = () => (
    <Navbar bg='dark' variant='dark' className='px-3'>
        <Navbar.Brand>My Next App</Navbar.Brand>
        <Nav>
            <Link href='/' passHref><Nav.Link>Home</Nav.Link></Link>
            <Link href='/products' passHref><Nav.Link>Products</Nav.Link></Link>
            <Link href='/about' passHref ><Nav.Link>About</Nav.Link></Link>
        </Nav>
    </Navbar>
)

export default NavbarMenu;