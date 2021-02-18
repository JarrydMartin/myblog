import Image from 'next/image'
import {useUser} from '@auth0/nextjs-auth0';
import React from 'react';
import { Grid } from '@material-ui/core';


export default function Home() {
    const { isLoading, error} = useUser();

    if (isLoading) return <Loading/>;
    
    if (error) return <Error/>

    return (
        <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
            <h1>Coming Soon...</h1>
            <Image src="/Charco/Charco/Coming_soon.png"
                width={500}
                height={500}/>
        </Grid>
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
