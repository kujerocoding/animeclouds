import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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
    <section className='w-10/12 my-10 mx-auto border-2 border-black text-primary'>
        
        <div className='flex justify-between items-center bg-primary-btn'>
        <div>
        <p className='text-2xl'>{title}</p>
        <p className='text-xl'>{title_japanese}</p>
        </div>
        <div><Link to='/'>Back</Link></div>
        </div>
        <div className='lg:flex gap-4 border-2 border-red-500'>
            <div className='basis-1/5'>
                <img src={images?.jpg.large_image_url} alt="" className='w-full'/>
            </div>
            <div className='basis-4/5 flex flex-col gap-4 border-2 border-green-500'>
                
                <div className='bg-pink-500'>
                    <p className='text-xl'>Score: {score}</p>
                    <div className='flex gap-10'>
                        <div>
                            <p>Favorites: {favorites}</p>
                            <p>Ranked: #{rank}</p>
                        </div>
                        <div>
                            <p>Rating: {rating}</p>
                            <p>Popularity: {popularity}</p>
                        </div>
                    </div>
                </div>

               

                <div className='bg-gray-500'>
                    <p className='font-bold'>Synopsis</p>
                    <p className='text-sm'>{showMore ? synopsis : synopsis?.substring(0,200) + '...'}
                        <span>
                            <button onClick={() => {setShowMore(!showMore)}} className='text-accent'
                            >{showMore ? "Show Less" : "Read More"}
                            </button>
                        </span>
                    </p>
                </div>

                <div className='bg-orange-500'>
                    
                    <p className='text-xl'>Status: {status}</p>
                    <div className='flex gap-10'>
                        <div> 
                            <p>Aired: {aired?.string}</p>
                            <p>Episodes: {episodes}</p>
                        </div>
                        <div>
                            <p>Duration: {duration}</p>
                            <p>Year: {year}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <p>trailer</p>
        <div>
            {trailer?.embed_url && 
            <iframe 
            src={trailer?.embed_url}
            width="800"
            height="450"

            >

            </iframe>
            }
        </div>
        <p>characters</p>
        <div className='grid grid-cols-characters gap-4'>
            {characters?.map((character, index) => {
            const {role} = character
            const {images, name, mal_id} = character.character
            return <Link to={`/character/${mal_id}`} key={index}>
                <div>
                    <img src={images?.jpg.image_url} alt="" className='w-full h-full object-cover'/>
                    <p>{name}</p>
                    <p>{role}</p>
                </div>
            </Link>
            })}
        </div>
    </section>
  )
}

export default AnimeItem
