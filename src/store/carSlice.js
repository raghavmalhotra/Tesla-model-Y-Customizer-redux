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
    changeColor: (state, action) => {
      if (
        action.payload === 'interiorDark' ||
        action.payload === 'interiorLight'
      ) {
        state.interiorColor = colorMap[action.payload]
      } else {
        state.exteriorColor = colorMap[action.payload]
      }

      console.log(action.payload)
    },
  },
})

export const { changeColor } = carSlice.actions

export const carReducer = carSlice.reducer
