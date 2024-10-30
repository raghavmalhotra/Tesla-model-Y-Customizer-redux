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
    performanceMode: false,
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
      state.performanceMode = !state.performanceMode
      state.exteriorColor = state.performanceMode
        ? state.exteriorColor.slice(0, -4) + '-Performance.jpg'
        : state.exteriorColor.slice(0, -16) + '.jpg'
      console.log(state.exteriorColor)
    },
    changeColor: (state, action) => {
      if (
        action.payload === 'interiorDark' ||
        action.payload === 'interiorLight'
      ) {
        state.interiorColor = colorMap[action.payload]
      } else {
        const selectedColor = state.performanceMode
          ? colorMap[action.payload + 'Performance']
          : colorMap[action.payload]
        state.exteriorColor = selectedColor
      }

      console.log(action.payload)
    },
  },
})

export const { changeColor, togglePerformanceWheels } = carSlice.actions

export const carReducer = carSlice.reducer
