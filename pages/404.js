import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
        <Container>
            <h1 className='text-center mt-5'>404 - Page Not Found</h1>
        </Container>
    </Layout>
  )
}

export default NotFoundPage