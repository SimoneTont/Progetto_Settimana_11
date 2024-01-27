let SearchUrl='https://striveschool-api.herokuapp.com/api/deezer/search?q='

export const RockSongs = () => {
    return (dispatch, getState) => {
        fetch(SearchUrl+'rock')
              .then(resp => resp.json())
              .then(json => {
               return dispatch({ type: 'ROCK_SONGS', payload: json })
              })
              .catch(err => console.error(err)) 
      }
}

export const PopSongs = () => {
    return (dispatch, getState) => {
        fetch(SearchUrl+'pop')
              .then(resp => resp.json())
              .then(json => {
               return dispatch({ type: 'POP_SONGS', payload: json })
              })
              .catch(err => console.error(err)) 
      }
}

export const HipHopSongs = () => {
    return (dispatch, getState) => {
        fetch(SearchUrl+'hiphop')
              .then(resp => resp.json())
              .then(json => {
               return dispatch({ type: 'HIPHOP_SONGS', payload: json })
              })
              .catch(err => console.error(err)) 
      }
}