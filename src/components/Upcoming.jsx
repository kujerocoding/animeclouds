import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context/global'

const Upcoming = ({rendered}) => {

  const {upcomingAnime, isSearch, searchResults} = useGlobalContext()
  
 
  const conditionalRender = () => {
    if(!isSearch && rendered === 'upcoming'){
      return upcomingAnime?.map(anime => {
        //console.log(anime)
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        <img src={anime.images.jpg.large_image_url} alt="" className='w-full h-full object-cover'/>
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
    <div className='border-2 border-red-500'>
      <div className='grid grid-cols-auto gap-4 border-2 border-blue-500'>
      {conditionalRender()}
      </div>
    </div>
  )
}

export default Upcoming

