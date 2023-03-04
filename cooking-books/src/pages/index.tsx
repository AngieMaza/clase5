import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading} >Explore the world library recipes</h1>
        <Link href="/products" >
          <button className={styles.button} >EXPLORE</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
