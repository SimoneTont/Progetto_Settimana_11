import React from 'react'
import { RockSongs } from '../Actions/actions'

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
      default:
        break;
    }
    
    return state
}