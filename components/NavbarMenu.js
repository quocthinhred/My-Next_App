import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarMenu = () => (
    <Navbar bg='dark' variant='dark' className='px-5'>
        <Navbar.Brand>My Next App</Navbar.Brand>
        <Nav style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <div style={{display: 'flex'}}>
                <Link href='/' passHref><Nav.Link>Home</Nav.Link></Link>
                <Link href='/products/product' passHref><Nav.Link>Products</Nav.Link></Link>
                <Link href='/recommend' passHref><Nav.Link>Trending</Nav.Link></Link>
                <Link href='/posts' passHref><Nav.Link>Posts</Nav.Link></Link>
                <Link href='/about' passHref><Nav.Link>About</Nav.Link></Link>
                <Link href='/server/cache1' passHref><Nav.Link>Cache1</Nav.Link></Link>
                <Link href='/server/cache2' passHref><Nav.Link>Cache2</Nav.Link></Link>
                <Link href='/server/cache3' passHref><Nav.Link>Cache3</Nav.Link></Link>
            </div>
            <div>
                <Link href='/cart' passHref><Nav.Link><FontAwesomeIcon icon={faCartShopping} /></Nav.Link></Link>
            </div>
            
        </Nav>
    </Navbar>
)

export default NavbarMenu;
