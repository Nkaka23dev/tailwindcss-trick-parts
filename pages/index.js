import Head from 'next/head'
import { Dancing_Script, Merriweather, Oswald } from '@next/font/google'

const danceScript = Dancing_Script({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'] })
const merryWeather = Merriweather({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Fill the gap</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <section id='home' className='h-screen grid'>
        <div className={`m-auto`}>
          <h1 className={`text-4xl mt-2`}>This will be for different font.</h1>
          <h1 className={`text-4xl mt-2`}>This will be for different font.</h1>
          <h1 className={`text-4xl mt-2`}>This will be for different font.</h1>
          <h1 className='text-4xl mt-2'>This will be for different font.</h1>
          <h1 className='text-4xl mt-2'>This will be for different font.</h1>
        </div>
      </section> */}
      <h1>All Recaped projects</h1>
     <video/>
    </>
  )
}
