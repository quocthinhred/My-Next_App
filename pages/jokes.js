import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import Layout from '../components/Layout'
import { getRandomJoke } from '../lib/joke'

const Jokes = ({joke}) => {
    
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(false);
        setTimeout(()=>{setLoading(true)}, 1000);
    }, [joke.value]);

    if (!loading) {
        return (
            <Layout>
                <div className='text-center mt-5'>
                    <Spinner animation='border' role='status' variant='dark'>
                    </Spinner>
                    <span className='sr-only'>LOADING . . .</span>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <Card className='my-3 shadow mx-2'>
                <Card.Body>
                    <Card.Title>Random Joke</Card.Title>
                    <Card.Text>{joke.value}</Card.Text>
                    <Link href='/' passHref>
                        <Card.Link>Back</Card.Link>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    )
    
  
}

export const getServerSideProps = async () => {
    const joke = await getRandomJoke()

    return {
        props: {
            joke
        }
    }
}

export default Jokes