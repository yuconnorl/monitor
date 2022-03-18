import { createSlice } from '@reduxjs/toolkit'

export const moduleInfoSlice = createSlice({
  name: 'moduleInfo',
  initialState: {
    firstLoading: true,
    data: [],
  },
  reducers: {
    initialModuleRoutes: (state, { payload }) => {
      state.data = payload
    },
    alterLoadingState: (state, { payload }) => {
      state.firstLoading = payload
    },
  },
})

export const { initialModuleRoutes, alterLoadingState } = moduleInfoSlice.actions

export default moduleInfoSlice.reducer
