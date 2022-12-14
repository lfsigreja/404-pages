import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import notFoundPage from '../data/notFoundPage.json'
export default function Home() {
  return (
    <div>
      <Head>
        <title>404 generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {notFoundPage.map((page) => (
        <Link href={`/${page.name}`}>
          <h2>{page.name}</h2>
        </Link>
      ))}
    </div>
  )
}
