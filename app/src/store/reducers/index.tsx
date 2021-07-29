import { combineReducers } from 'redux'

import weather from './weather'
import note from './note'

const appReducer = combineReducers({
  weather,
  note,
})

export default appReducer

export type RootState = ReturnType<typeof appReducer>
