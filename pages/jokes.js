import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import Layout from '../components/Layout'
import { getRandomJoke } from '../lib/joke'

const Jokes = ({joke}) => {
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