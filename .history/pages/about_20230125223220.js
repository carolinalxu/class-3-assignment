import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  console.log(data);
  const [information, setInformation] = useState([...data])

  return (
    <>
      <Head>
        <h1 className= {styles.header}> Lina Columbia Institute of Technology </h1>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      <Link className={styles.about} href="..">Back Home</Link>

        <div className={styles.contents}>
            <input className={styles.lcit} type="image" src="icon/lcit.png" alt="school"></input>
            <p className={styles.paragraph}> We offer practical career credentials designed for the workplace, from diplomas and certificates to bachelor's and master's degrees. Our schools cover subjects as diverse as applied and natural sciences, business and media, computing and IT, engineering, health sciences and trades.</p>
        </div>
       
    
    
      </main>
    </>
  )
}

        