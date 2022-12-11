export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const GET_JOBS_LIST = "GET_JOBS_LIST"


export const removeFromFavourites = (something) => (
    {
    type: REMOVE_FROM_FAVOURITES,
    payload: something
}
)

export const addToFavourites = (something) => (
    {
        type: ADD_TO_FAVOURITES,
        payload: something
    }
)

export const getListOfJobs = (query) => { //This is an async function, thanks to the middleware redux thunk!
    const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseEndpoint + query + '&limit=20')
            if (response.ok) {
              const { data } = await response.json()
              console.log(data) //It's working!
              dispatch(
                {
                    type: GET_JOBS_LIST,
                    payload: data,
                }
              )
            } else {
              alert('Error fetching results')
            }
          } catch (error) {
            console.log(error)
          }
        }
    }