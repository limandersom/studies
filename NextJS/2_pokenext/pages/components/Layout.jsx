import Navbar from "./NavBar"
import Footer from "./Footer"

import Head from 'next/head'

export default function Layout({ children }) {

    return (
        <>
            <Head>
                <title>PokeNext.js - Lima</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <Navbar />
            <main className='main-container'>{children}</main>
            <Footer />
        </>
    )
}