import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Highlights } from '../components/Highlights'

export const Main = () => {
    return (
        <section className='full-content'>
            <Navbar />
            <section className='main-content'>
                <Header />
                <Highlights />
            </section>
        </section>
    )
}
