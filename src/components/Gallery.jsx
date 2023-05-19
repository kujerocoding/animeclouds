import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/global'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'



const Gallery = () => {

  const navigate = useNavigate()

const {id} = useParams()
const {getCharacterPictures, characterPictures, getCharacterVoiceActor, characterVoiceActor} = useGlobalContext()
console.log('character voice actor', characterVoiceActor)

const [index, setIndex] = useState(0)

useEffect(() => {
    getCharacterPictures(id)
    getCharacterVoiceActor(id)
},[id])

const handlePictureClick = (i) => {
    setIndex(i)
}

  return (
    <div className='bg-secondary-btn'>
        <div className='w-11/12 mx-auto text-right pt-6'>
        <button onClick={() => navigate(-1)} className='text-primary'><BiArrowBack className='w-8 h-8' />
        </button>
        </div>
        <div className='flex flex-col items-center justify-center bg-secondary rounded-md'>
        <div className=' flex flex-col md:flex-row items-center md:items-center justify-center gap-4 md:gap-20 md:p-10'>
            <div className='w-72 h-96 rounded-lg mb-4 p-2 bg-primary'>
                <img src={characterPictures[index]?.jpg.image_url} alt="" className='w-full h-full object-cover rounded-lg' />
            </div>

            <div>
            {characterVoiceActor?.map((item, i )=> item.language === 'Japanese' ? (
              <div key={i} className=' border-2 border-secondary-300 rounded-md p-2 text-primary text-center mb-8 md:mb-0 md:mt-4 flex items-center gap-4 md:text-left'>
                
                <div className='w-20 h-20 grayscale'>
                  
                  <img src={item.person.images.jpg.image_url} alt="" className='w-full h-full object-cover rounded-md'/>
                </div>
                <div> 
                  <h2 className='text-sm'>Voice Actor</h2>
                  <p>{item.person.name}</p>
                  <p className='text-sm'>{item.language}</p>
                </div>
            </div>
            ) : "" )}
            </div>

         </div>
          <div className='w-full p-4 bg-secondary-300 flex flex-wrap gap-4 items-center justify-center rounded-md'>
          {characterPictures?.map((picture, i) => 
            <div className={`w-20 h-20 rounded-md cursor-pointer scale-90 transition grayscale ease-in-out duration-300 ${index === i ? ' scale-105 grayscale-0' : ''}`} onClick={() => handlePictureClick(i)}>
              <img src={picture?.jpg.image_url} key={i} className='w-full h-full object-cover rounded-md'/>
          </div>
          )}
          </div>
        </div>
        
    </div>
  )
}

export default Gallery
