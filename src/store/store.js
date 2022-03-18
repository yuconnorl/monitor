import { configureStore } from '@reduxjs/toolkit'
import moduleInfoReducer from './reducers/moduleInfoSlice'

const store = configureStore({ reducer: { moduleInfo: moduleInfoReducer } })

export default store
