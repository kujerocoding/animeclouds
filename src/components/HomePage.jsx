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
    <div>
      <header>
        <h1>{shit()}</h1>
        <button onClick={() => {setRendered('popular')}}
        className='bg-red-500'
        >Popular</button>
        <form action="">
            <input type="text" placeholder='Search Anime' onChange={handleChange} value={search}/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
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
      </header>
      <div>
      {switchComponent()}
      </div>
    </div>
  )
}

export default HomePage
