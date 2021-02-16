import Image from 'next/image'
import {useUser} from '@auth0/nextjs-auth0';


export default function Home() {
    const {user, isLoading, error} = useUser();

    if (isLoading) return <Loading/>;
    
    if (error) return <Error/>

    return (
        <div>
            {user ? <LogoutButton/>: <LoginButton/>}
            <h1>Coming Soon...</h1>
            <Image src="/Charco/Charco/Coming_soon.png"
                width={500}
                height={500}/>
        </div>
    )
}

function LoginButton() {
    return (
        <a href="/api/auth/login">Login</a>
    )
}

function LogoutButton() {
    return (
        <a href="/api/auth/logout">Logout</a>
    )
}

function Loading() {
    return (
        <div>
            <Image src="/Charco/Charco/Waiting.png"
                width={500}
                height={500}/>
        </div>
    )
}

function Error() {
    return <Image src="/Charco/Charco/Something_went_wrong.png"
        width={500}
        height={500}/>
}
