import React from 'react'
import { useGlobalContext } from '../context/global'
import {BsSearch} from 'react-icons/bs'

const Header = ({setRendered}) => {

    const {handleChange, handleSubmit, search, getUpcomingAnime, getAiringAnime} = useGlobalContext()
    
  return (
    <header className='text-center bg-secondary drop-shadow-md text-lg'>
    <nav className='w-11/12 mx-auto py-4 flex items-center justify-between'>
        <div className='w-40'>
            <img src="../src/assets/images/logo.png" alt="logo" />
        </div>
        <form action="" className="flex bg-primary-btn pr-4 shadow ">
                <input className="appearance-none border w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Search Anime' onChange={handleChange} value={search}/>
                <button className="ml-4" type='submit' onClick={handleSubmit}><BsSearch className='fill-accent w-5 h-5'/></button>
        </form>
        <div className='hidden md:flex gap-6 items-center text-primary'>
            <button onClick={() => {setRendered('popular')}}
            className='hover:scale-105'
            >Popular</button>
            <button onClick={() => {
                setRendered('airing')
                getAiringAnime()
            }}
            className='hover:scale-105'
            >Airing</button>
            <button onClick={() => {
                setRendered('upcoming')
                getUpcomingAnime()
            }}
            className='hover:scale-105'
            >Upcoming</button>
        </div>
    </nav>
  </header>
  )
}

export default Header
