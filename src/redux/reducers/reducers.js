import React from 'react'
import { RockSongs, PopSongs, HipHopSongs, AddFavorite } from '../Actions/actions'

export const bigReducers = (state = [], action) => {

    switch (action.type) {
      case 'ROCK_SONGS':
        return ({
          ...state,
          rockSongs: [action.payload]
        })
        case 'POP_SONGS':
        return ({
          ...state,
          popSongs: [action.payload]
        })
        case 'HIPHOP_SONGS':
        return ({
          ...state,
          hiphopSongs: [action.payload]
        })
        case 'ADD_FAVORITE':
          return ({
            ...state,
            favorites: [action.payload]
          })
      default:
        break;
    }
    
    return state
}