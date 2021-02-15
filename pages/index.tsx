import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import auth0 from './api/utils/auth0'

export default function Home({session}) {
  return (
    <div className={styles.container}>
      {session ? <LogoutButton/> : <LoginButton/>}
      <h1>Coming Soon...</h1>
      <Image src="/Charco/Charco/Coming_soon.png" width={500} height={500}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await auth0.getSession(context.req);
  console.log(`👋 log - auth session started for: ${session?.user.name}`);
  return {
    props: {
      session: session      
    }
  }
}

function LoginButton(){
  return (
    <a href="/api/login">Login</a>
  )
}
function LogoutButton(){
  return (
    <a href="/api/logout">Logout</a>
  )
}
