import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
        console.log('characters',data.data[0])
        setCharacters(data.data)
    }

    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    },[])


  return (
    <div>
        <p>{title}</p>
        <img src={images?.jpg.large_image_url} alt="" />
        <p>{showMore ? synopsis : synopsis?.substring(0,200) + '...'}
        <span><button onClick={() => {setShowMore(!showMore)}}>{showMore ? "Show Less" : "Read More"}</button></span></p>
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
    </div>
  )
}

export default AnimeItem
