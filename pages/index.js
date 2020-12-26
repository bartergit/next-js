import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BarterBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className="blue">BarterBlog!</span>
        </h1>

        <p className={styles.description}>
          Персональный блог для мыслей. <span className="blue">Just for fun.</span>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Обо мне &rarr;</h3>
            <p>Пока ничего нет...</p>
          </a>

          <a href="/posts/hello-world" className={styles.card}>
            <h3>Hello world! &rarr;</h3>
            <p>Goodbye home!</p>
          </a>
          <h1 className="title">
            Read{' '}
            <Link href="/posts/hello-world">
              <a>this page!</a>
            </Link>
          </h1>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div >
  )
}
