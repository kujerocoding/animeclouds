import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/global'
import { Link, useParams } from 'react-router-dom'



const Gallery = () => {

const {id} = useParams()
const {getCharacterPictures, characterPictures} = useGlobalContext()

const [index, setIndex] = useState(0)

useEffect(() => {
    getCharacterPictures(id)
    //console.log(characterPictures)
},[])

const handlePictureClick = (i) => {
    setIndex(i)
}

  return (
    <div>
        <div><Link to='/'>Back</Link></div>
        <div className='w-64 h-96'>
            <img src={characterPictures[index]?.jpg.image_url} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='border-2 border-red-500 flex flex-wrap'>
        {characterPictures?.map((picture, index) => 
          <div className='w-20 h-20 cursor-pointer' onClick={() => handlePictureClick(index)}>
            <img src={picture.jpg.image_url} key={index} className='w-full h-full object-cover'/>
         </div>
      )}
        </div>
    </div>
  )
}

export default Gallery
