import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/global'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'



const Gallery = () => {

  const navigate = useNavigate()

const {id} = useParams()
const {getCharacterPictures, characterPictures} = useGlobalContext()
//console.log('characterPictures', characterPictures)

const [index, setIndex] = useState(0)

useEffect(() => {
    getCharacterPictures(id)
},[id])

const handlePictureClick = (i) => {
    setIndex(i)
}

  return (
    <div className='bg-secondary-btn h-screen grid place-content-center'>
        <button onClick={() => navigate(-1)} className='text-primary'><BiArrowBack className='w-8 h-8' /></button>
        <div className=''>
          <div className='w-72 h-96 mx-auto p-4 rounded-lg'>
              <img src={characterPictures[index]?.jpg.image_url} alt="" className='w-full h-full object-cover rounded-lg' />
          </div>
          <div className='w-full p-4 bg-secondary-300 flex flex-wrap gap-4 items-center justify-center rounded-md'>
          {characterPictures?.map((picture, i) => 
            <div className={`w-20 h-20 rounded-md cursor-pointer scale-90 transition ease-in-out duration-300 ${index === i ? 'outline-2 outline outline-primary-btn scale-100' : ''}`} onClick={() => handlePictureClick(i)}>
              <img src={picture?.jpg.image_url} key={i} className='w-full h-full object-cover rounded-md'/>
          </div>
          )}
          </div>
        </div>
    </div>
  )
}

export default Gallery
