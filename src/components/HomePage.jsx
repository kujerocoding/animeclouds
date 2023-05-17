import React from 'react'
import { useState } from 'react'
import Popular from './Popular'
import { useGlobalContext } from '../context/global'
import Airing from './Airing'
import Upcoming from './Upcoming'
import Header from './Header'


const HomePage = () => {

    const [rendered, setRendered] = useState('popular')

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
      <main className='w-11/12 mx-auto py-10 '>
      <h1 className='text-2xl text-primary bg-secondary-btn mb-10 p-4 uppercase font-bold'>{title()}</h1>
      <div>
      {switchComponent()}
      </div>
      </main>
    </>
  )
}

export default HomePage
