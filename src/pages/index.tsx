import Link from 'next/link'
import Layout from 'components/templates/Layout'
import React from 'react'

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
