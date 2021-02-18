import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'
import MyAppBar from '../components/MyAppBar'

function MyApp({ Component, pageProps }) {
  return(
    <UserProvider>
      <MyAppBar/>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp
