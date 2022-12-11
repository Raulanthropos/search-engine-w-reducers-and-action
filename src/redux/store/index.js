import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'
import jobReducer from '../reducers/job'
import { combineReducers } from '@reduxjs/toolkit'
// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers ({
  favourite: mainReducer,
  job: jobReducer
})

const store = configureStore({
  reducer: bigReducer,
})

export default store

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file