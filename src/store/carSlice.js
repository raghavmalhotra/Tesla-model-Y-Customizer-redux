import { createSlice } from '@reduxjs/toolkit'
import { Customizations } from '../components'
import {
  stealthGrey,
  ultraRed,
  deepBlueMetallic,
  quickSilver,
  solidBlack,
  pearlWhite,
  stealthGreyPerformance,
  ultraRedPerformance,
  deepBlueMetallicPerformance,
  quickSilverPerformance,
  solidBlackPerformance,
  pearlWhitePerformance,
} from '../assets/images/exterior'

import { interiorDark, interiorLight } from '../assets/images/interior'
import { act } from 'react'

const colorMap = {
  ultraRed,
  stealthGrey,
  quickSilver,
  solidBlack,
  pearlWhite,
  deepBlueMetallic,
  interiorDark,
  interiorLight,
  ultraRedPerformance,
  stealthGreyPerformance,
  quickSilverPerformance,
  solidBlackPerformance,
  pearlWhitePerformance,
  deepBlueMetallicPerformance,
}
const carSlice = createSlice({
  name: 'car',
  initialState: {
    exteriorColor: stealthGrey,
    interiorColor: interiorDark,
    exteriorColorString: 'stealthGrey',
    interiorColorString: 'interiorDark',
    performanceWheels: false,
    fullSelfDriving: false,
    total: 52490,
  },
  reducers: {
    addPerformanceWheels: (state) => {
      if (!state.performanceWheels) {
        state.performanceWheels = true
        state.exteriorColorString = state.exteriorColorString + 'Performance'
        const selectedColor = colorMap[state.exteriorColorString]
        state.exteriorColor = selectedColor
        state.total += 2500
      }
    },

    removePerformanceWheels: (state) => {
      if (state.performanceWheels) {
        state.performanceWheels = false
        state.exteriorColorString = state.exteriorColorString.slice(0, -11)
        const selectedColor = colorMap[state.exteriorColorString]
        state.exteriorColor = selectedColor
        // console.log(state.exteriorColor)
        state.total += 2500
      }
    },
    changeColor: (state, action) => {
      if (
        action.payload === 'interiorDark' ||
        action.payload === 'interiorLight'
      ) {
        state.interiorColorString = action.payload

        state.interiorColor = colorMap[action.payload]
      } else {
        if (state.performanceWheels) {
          state.exteriorColor = colorMap[action.payload + 'Performance']
          state.exteriorColorString = action.payload + 'Performance'
        } else {
          state.exteriorColor = colorMap[action.payload]
          state.exteriorColorString = action.payload
        }
      }
    },

    toggleFullSelfDriving: (state, action) => {
      state.fullSelfDriving = action.payload

      if (state.fullSelfDriving) {
        state.total = state.total + 5000
      } else {
        state.total = state.total - 5000
      }
    },
  },
})

export const {
  changeColor,
  togglePerformanceWheels,
  addPerformanceWheels,
  removePerformanceWheels,
  toggleFullSelfDriving,
} = carSlice.actions

export const carReducer = carSlice.reducer
