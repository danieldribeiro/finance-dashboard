import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Highlights } from '../components/Highlights'

export const Main = () => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const date = new Date()
    const month = date.getMonth()
    const actualMonth = months[month]
    const day = date.getDate()
    const year = date.getFullYear()

    const actualDate = `${months[month]} ${day}, ${year}`

    return (
        <section className='full-content'>
            <Navbar />
            <section className='main-content'>
                <Header actualDate={actualDate}/>
                <Highlights actualMonth={actualMonth} year={year}/>
            </section>
        </section>
    )
}
