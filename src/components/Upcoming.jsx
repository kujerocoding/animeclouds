import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context/global'

const Upcoming = ({rendered}) => {

  const {upcomingAnime, isSearch, searchResults} = useGlobalContext()
  
 
  const conditionalRender = () => {
    if(!isSearch && rendered === 'upcoming'){
      return upcomingAnime?.map(anime => {
        console.log('upcoming',anime)
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className='relative text-center hover:scale-105 transition ease-in-out duration-300'>
        <img src={anime.images.jpg.large_image_url} alt="" className='w-full h-full object-cover'/>
        <div className='absolute bottom-0 left-0 w-full'><p className='text-primary bg-secondary-btn'>"{anime.title}"</p></div>
        </Link>
      })
    }else{
      return searchResults?.map(anime => {
        //console.log(anime)
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        <img src={anime.images.jpg.large_image_url} alt="" className='w-full h-full object-cover'/>
        </Link>
      })
    }
  }


  return (
    <div className=''>
      <div className='grid grid-cols-auto gap-10'>
      {conditionalRender()}
      </div>
    </div>
  )
}

export default Upcoming

