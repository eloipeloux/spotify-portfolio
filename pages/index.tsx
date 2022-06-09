import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import HomePage from './homePage'

const Home: NextPage = () => {
  return (
    <div className={styles.container + ' font-satoshi'}>
      <Header />
      <Head>
        <title>Portfolio Eloi</title>
        <meta name="description" content="Musical portfolio for Eloi PELOUX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      <Footer />
    </div>
  )
}

export default Home
