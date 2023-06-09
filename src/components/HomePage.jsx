import React from 'react'
import { useState } from 'react'
import Popular from './Popular'
import { useGlobalContext } from '../context/global'
import Airing from './Airing'
import Upcoming from './Upcoming'
import Header from './Header'


const HomePage = () => {

    const {randomQuote} = useGlobalContext()
    const [rendered, setRendered] = useState('airing')

    const switchComponent =() => {
      switch(rendered){
          case 'popular':
              return <Popular rendered={rendered}/>
          case 'airing':
              return <Airing rendered={rendered}/>
          case 'upcoming':
              return <Upcoming rendered={rendered}/>
          default:
              return <Popular rendered={rendered}/>
      }
    }

    const title = () => {
        switch(rendered){
            case 'popular':
                return 'Popular Anime'
            case 'airing':
                return 'Airing Anime'
            case 'upcoming':
                return 'Upcoming Anime'
        }
    }

  return (
    <>
    <Header setRendered={setRendered} rendered={rendered}/>
      <main className='lg:w-11/12 mx-auto py-10'>
        <div className='inline-block rounded-ee-full rounded-se-full bg-primary-btn py-4 px-8 mb-10'>
            <h2 className='text-2xl text-primary uppercase font-bold'>Top 15 {title()}</h2>
        </div>
        <div className='flex'>
                <div className='px-4 w-full lg:w-5/6'>
                {switchComponent()}
                </div>
                <div className='hidden text-gray-500 items-center lg:flex flex-col gap-2 w-1/6 h-screen pl-6 text-sm'>
                    <p>Quote of the day:</p>
                    <p className='italic'>"{randomQuote?.quote}"</p>
                    <p>-{randomQuote?.character}</p>
                    <p className=''>( {randomQuote?.anime} )</p>
                </div>
        </div>
      </main>
      <footer className='text-primary text-center my-6 text-sm'>
        <p>&copy; 2023 AnimeClouds. All rights reserved.</p>
    </footer>
    </>
  )
}

export default HomePage
