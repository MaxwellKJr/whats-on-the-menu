import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | What's On The Menu</title>
      </Head>
      <h1>What's On The Menu?</h1>
   </>
  )
}
