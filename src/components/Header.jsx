import React from 'react'
import { useGlobalContext } from '../context/global'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

const Header = ({setRendered}) => {

  const {handleChange, handleSubmit, search, getUpcomingAnime, getAiringAnime, getPopularAnime} = useGlobalContext()
    
  return (
    <header className='text-center'>
        <nav className='w-11/12 mx-auto py-4 flex items-center justify-between'>
            <Link onClick={() => window.location.reload(true)} className='w-40'>
                <img src={Logo} alt="logo" />
            </Link>
            <form action="" className="flex bg-primary-btn pr-4 shadow ">
                    <input className="appearance-none border w-full py-1 px-2 text-secondary-300 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Search Anime' onChange={handleChange} value={search}/>
                    <button className="ml-4" type='submit' onClick={handleSubmit}><BsSearch className='fill-primary w-5 h-5'/></button>
            </form>
        </nav>
        <div className='flex gap-6 justify-center text-primary'>
            <button onClick={() => {
                setRendered('popular')
                getPopularAnime()
            }}
            className='hover:scale-105 hover:text-primary-btn'
            >Popular</button>
            <button onClick={() => {
                setRendered('airing')
                getAiringAnime()
            }}
            className='hover:scale-105 hover:text-primary-btn'
            >Airing</button>
            <button onClick={() => {
                setRendered('upcoming')
                getUpcomingAnime()
            }}
            className='hover:scale-105 hover:text-primary-btn'
            >Upcoming</button>
        </div>
  </header>
  )
}

export default Header
