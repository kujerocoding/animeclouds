import React from 'react'
import Popular from './components/Popular'
import {useGlobalContext} from './context/global'

const App = () => {
  
  const global = useGlobalContext()
  console.log(global)
  return (
    <div>
      <Popular />
    </div>
  )
}

export default App
