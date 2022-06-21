import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
        <h1 className='mt-5 text-center'>UDPT21</h1>
        <ul className='mt-5 text-center' style={{listStyle: 'none'}}>
            <li>18120241 - Trần Quốc Thịnh</li>
            <li>18120261 - Phạm Hoàng Việt</li>
            <li>18120302 - Phạm Hải Đăng</li>
            <li>18120303 - Phan Khắc Thành Danh</li>
        </ul>
    </Layout>
  )
}

export default About