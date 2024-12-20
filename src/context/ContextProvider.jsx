import React, { useState } from 'react'
import GlobalContext from './globalContext'

function ContextProvider({children}) {
    const[data,setData]=useState([])
  return (
    <GlobalContext.Provider value={{data,setData}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider