import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

const AnimeItem = () => {

    const {id} = useParams()

    const [anime, setAnime] = useState([])
    const [characters, setCharacters] = useState([])
    const [showMore, setShowMore] = useState(false)

    const {aired,
        episodes,
        favorites,
        images,
        popularity,
        rank,
        rating,
        status,
        synopsis,
        title,
        title_japanese,
        duration,
        score,
        year,
        trailer} = anime

    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        //console.log('anime',data.data)
        setAnime(data.data)
    }
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        console.log('characters',data.data)
        setCharacters(data.data)
    }

    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    },[])


  return (
    <section className='w-10/12 my-10 mx-auto text-primary'>
        
        <div className='flex justify-between p-4 items-center bg-gradient-to-l from-secondary to-primary-btn'>
        <div>
            <p className='text-2xl'>{title}</p>
            <p className='text-xl'>{title_japanese}</p>
        </div>
        <div className='hover:scale-105 w-6'><Link to='/'><BiArrowBack className='w-full h-full'/></Link></div>
        </div>
        <div className='relative flex flex-col items-center lg:flex-row gap-4 mb-6 p-4'>
            <div className='absolute top-0 left-0 w-full h-full -z-10 blur-sm overflow-hidden'>
                <img src={images?.jpg.large_image_url} alt="" className='w-full h-full object-cover object-top'/>
            </div>
            <div className='w-11/12 md:w-8/12 lg:w-1/3 rounded-xl'>
                <img src={images?.jpg.large_image_url} alt="" className='w-full rounded-xl'/>
            </div>
            <div className='w-11/12 md:w-8/12 lg:w-2/3 flex flex-col gap-4 bg-secondary-300-5 text-primary p-4'>
                
                <div className='text-primary'>
                    <p className='text-2xl font-bold'>Score: {score === null ? 'Not available': score}</p>
                    <div className='flex gap-10'>
                        <div className='w-full flex flex-wrap justify-evenly bg-accent font-bold p-2'>
                            <p>Ranked: #{rank}</p>
                            <p>Favorites: {favorites}</p>
                            <p>Popularity: {popularity}</p>
                        </div>
                    </div>
                </div>

               

                <div className=''>
                    <p className='font-bold '>Synopsis</p>
                    <p className='text-sm'>{showMore ? synopsis : synopsis?.substring(0,300) + '...'}
                        <span>
                            <button onClick={() => {setShowMore(!showMore)}} className='text-accent'
                            >{showMore ? "Show Less" : "Read More"}
                            </button>
                        </span>
                    </p>
                </div>

                <div className='font-bold'>
                    
                    <p>Status: &nbsp;<span className='font-normal'>{status}</span></p>
                    <div className='flex gap-10'>
                        <div> 
                            <p>Aired: &nbsp;<span className='font-normal'>{aired?.string}</span></p>
                            <p>Episodes: &nbsp;<span className='font-normal'>{episodes}</span></p>
                            <p>Rating: &nbsp;<span className='font-normal'>{rating}</span></p>
                            <p>Duration: &nbsp;<span className='font-normal'>{duration}</span></p>
                            <p>Year: &nbsp;<span className='font-normal'>{year}</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='flex flex-col h-[400px] items-center mb-6'>
            <div className='w-full md:w-8/12 h-full text-center'>
                <h2 className='text-lg uppercase my-4'>trailer</h2>
                <div className='w-full h-5/6 bg-primary p-4'>
                    {trailer?.embed_url && 
                    <iframe
                    title={`Trailer of ${title}`} 
                    src={trailer?.embed_url}
                    allow="autoplay"
                    className='w-full h-full'
                    >
                    </iframe>
                    }
                </div>
            </div>
        </div>
        <div className=' text-center mb-6'>
        <h2 className='text-lg uppercase mb-4'>characters</h2>
            <div className='grid grid-cols-characters gap-4'>
                {characters?.map((character, index) => {
                const {role} = character
                const {images, name, mal_id} = character.character
                return <Link to={`/character/${mal_id}`} key={index}>
                    <div className='p-2 bg-secondary-300 rounded-xl'>
                        <img src={images?.jpg.image_url} alt="" className='w-full h-full object-cover rounded-xl'/>
                    </div>
                    <p className='text-sm'>{name}</p>
                     <p className='text-xs'>{role}</p>
                </Link>
                })}
            </div>
        </div>
    </section>
  )
}

export default AnimeItem
