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
    performanceWheels: false,
    Customizations: [],
    total: 0,
  },
  reducers: {
    addcustomization: (state, action) => {},
    removeCustomization: (state, action) => {
      //   const newList = state.items.filter(
      //     (item) => item.id !== action.payload.id
      //   )
      //   state.items = newList
      //   state.total -= action.payload.price
    },

    togglePerformanceWheels: (state) => {
      state.performanceWheels = !state.performanceWheels
      state.exteriorColor = state.performanceWheels
        ? state.exteriorColor.slice(0, -4) + '-Performance.jpg'
        : state.exteriorColor.slice(0, -16) + '.jpg'
      // console.log(state.exteriorColor)
    },
    addPerformanceWheels: (state) => {
      1
      if (!state.performanceWheels) {
        state.performanceWheels = true
        state.exteriorColor =
          state.exteriorColor.slice(0, -4) + '-Performance.jpg'
        // console.log(state.exteriorColor)
      }
    },

    removePerformanceWheels: (state) => {
      if (state.performanceWheels) {
        state.performanceWheels = false
        state.exteriorColor = state.exteriorColor.slice(0, -16) + '.jpg'
        // console.log(state.exteriorColor)
      }
    },
    changeColor: (state, action) => {
      if (
        action.payload === 'interiorDark' ||
        action.payload === 'interiorLight'
      ) {
        state.interiorColor = colorMap[action.payload]
      } else {
        const selectedColor = state.performanceWheels
          ? colorMap[action.payload + 'Performance']
          : colorMap[action.payload]
        state.exteriorColor = selectedColor
      }

      console.log(action.payload)
    },
  },
})

export const {
  changeColor,
  togglePerformanceWheels,
  addPerformanceWheels,
  removePerformanceWheels,
} = carSlice.actions

export const carReducer = carSlice.reducer
