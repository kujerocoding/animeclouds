import React, {createContext, useContext, useEffect, useReducer, useState} from 'react'

const GlobalContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";

const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME"
const GET_RANDOM_QUOTE = "GET_RANDOM_QUOTE"
const GET_CHARACTER_PICTURES = "GET_CHARACTER_PICTURES"
const GET_CHARACTER_VOICEACTOR = "GET_CHARACTER_VOICEACTOR"

const reducer = (state, action) => {
    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case GET_POPULAR_ANIME:
            return {...state, popularAnime:action.payload, loading: false}
        case GET_UPCOMING_ANIME:
            return {...state, upcomingAnime:action.payload, loading: false}
        case GET_AIRING_ANIME:
            return {...state, airingAnime:action.payload, loading: false}
        case GET_RANDOM_QUOTE:
            return {...state, randomQuote:action.payload, loading: false}
        case GET_CHARACTER_PICTURES:
            return {...state, characterPictures:action.payload, loading: false}
        case GET_CHARACTER_VOICEACTOR:
            return {...state, characterVoiceActor:action.payload, loading: false}
        case SEARCH:
            return {...state, searchResults:action.payload, loading: false}
        default:
            return state;
    }
   
}

export const GlobalContextProvider = ({children}) => {

    const initialState = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        randomQuote: [],
        characterPictures: [],
        characterVoiceActor: [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [search, setSearch] = useState()

    const getPopularAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity&limit=15`)
        const data = await response.json()
        dispatch({type: GET_POPULAR_ANIME, payload: data.data})
    }

    const getUpcomingAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/top/anime?filter=upcoming&limit=15`)
        const data = await response.json()
        dispatch({type: GET_UPCOMING_ANIME, payload: data.data})
    }

    const getAiringAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/top/anime?filter=airing&limit=15`)
        const data = await response.json()
        dispatch({type: GET_AIRING_ANIME, payload: data.data})
    }

    const getRandomQuote = async () => {
        dispatch({type: LOADING})
        const response = await fetch("https://animechan.vercel.app/api/random")
        const data = await response.json()
        dispatch({type: GET_RANDOM_QUOTE, payload: data})
    }

    const getCharacterPictures = async (id) => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/characters/${id}/pictures`)
        const data = await response.json()
        dispatch({type: GET_CHARACTER_PICTURES, payload: data.data})
    }

    const getCharacterVoiceActor = async (id) => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/characters/${id}/voices`)
        const data = await response.json()
        dispatch({type: GET_CHARACTER_VOICEACTOR, payload: data.data})
    }

    const searchAnime = async (anime) => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/anime?q=${anime}&order_by=popularity&sort=asc&sfw`)
        const data = await response.json()
        dispatch({type: SEARCH, payload: data.data})
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        if(e.target.value === ''){
            state.isSearch = false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(search){
            searchAnime(search)
            state.isSearch = true
        }else{
            state.isSearch = false;
        }
    }

    useEffect(() => {
        getAiringAnime()
        getRandomQuote()
    },[])

    return(
        <GlobalContext.Provider value={{
            ...state, handleChange, handleSubmit,searchAnime, search, getPopularAnime, getUpcomingAnime, getAiringAnime, getCharacterPictures,  getCharacterVoiceActor
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
