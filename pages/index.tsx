import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Coming Soon...</h1>
      <Image src="/Charco/Charco/Coming_soon.png" width={500} height={500}/>
    </div>
  )
}
