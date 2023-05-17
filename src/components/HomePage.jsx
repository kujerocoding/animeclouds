import React from 'react'
import { useState } from 'react'
import Popular from './Popular'
import { useGlobalContext } from '../context/global'
import Airing from './Airing'
import Upcoming from './Upcoming'


const HomePage = () => {

    const {handleChange, handleSubmit,searchAnime, search , getPopularAnime, getUpcomingAnime, getAiringAnime} = useGlobalContext()

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
    const shit = () => {
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
      <header className='border-2 border-black text-center bg-blue-500'>
        <nav className='w-11/12 mx-auto py-4 flex items-center justify-between border-2 border-yellow-500'>
        <div className='w-40 border-2 border-white'>
            <img src="../src/assets/images/logo.png" alt="logo" />
        </div>
        <form action="">
                <input type="text" placeholder='Search Anime' onChange={handleChange} value={search}/>
                <button type='submit' onClick={handleSubmit}>Search</button>
            </form>
        <div className='hidden border-2 border-green-500 md:flex gap-6 items-center'>
            <button onClick={() => {setRendered('popular')}}
            className='bg-red-500'
            >Popular</button>
            <button onClick={() => {
                setRendered('airing')
                getAiringAnime()
            }}
            className='bg-red-500'
            >Airing</button>
            <button onClick={() => {
                setRendered('upcoming')
                getUpcomingAnime()
            }}
            className='bg-red-500'
            >Upcoming</button>
        </div>
        </nav>
      </header>
      
      <main>
      <h1 className='text-3xl'>{shit()}</h1>
      <div>
      {switchComponent()}
      </div>
      </main>
    </>
  )
}

export default HomePage
