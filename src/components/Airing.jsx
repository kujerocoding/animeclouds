import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context/global'

const Airing = () => {

  const {airingAnime, isSearch} = useGlobalContext()
  
 
  const conditionalRender = () => {
    if(!isSearch){
      return airingAnime.map(anime => {
        //console.log(anime)
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        <img src={anime.images.jpg.large_image_url} alt="" className='w-full h-full object-cover'/>
        </Link>
      })
    }else{
      alert('No anime found')
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

export default Airing

