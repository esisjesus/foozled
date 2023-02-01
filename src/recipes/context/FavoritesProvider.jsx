import React from 'react'
import { useFav } from '../hooks/useFav'
import { FavoritesContext } from './FavoritesContext'

const initialFavList = []

export const FavoritesProvider = ({children}) => {
  
  const {favManager} = useFav(initialFavList)

  return (
    <FavoritesContext.Provider value = { favManager }>
        { children }
    </FavoritesContext.Provider>
  )
}
