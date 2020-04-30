import { combineReducers } from 'redux'
import gamePlay from './gamePlay'
import highScore from './highScore'

export const rootReducer = combineReducers({
    gamePlay,
    highScore
})