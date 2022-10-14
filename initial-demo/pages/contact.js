import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../componets/Navbar'
import styles from '../styles/Home.module.css'

export default function contactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <Link href="/">Contact</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact.js</code>
        </p>

       
      </main>

    </div>
  )
}