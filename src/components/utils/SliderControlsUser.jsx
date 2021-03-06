import React, { useState } from 'react'
import { BiLeftArrow as Left, BiRightArrow as Right } from 'react-icons/bi' 
import { useEffect } from 'react/cjs/react.development'
import { useIncrementDecrement } from '../hooks/useIncrementDecrement'


export const SliderControlsUser = ( { values } ) => {
  const {slider, increment, decrement, handleData, handleEntranceAnimation, memoNextImage, memoPrevImage} = values
  // const { increment, decrement } = useIncrementDecrement()
  // debugger
  // useEffect(() => {
  //   handleEntranceAnimation()
  // }, [ slider ])


  return (
    <div className="slider__controls">
      {
        slider > 0 &&
        <Left 
          className="left--icon"
          onClick={ memoPrevImage } 
        />
      }
      {
        slider < handleData.length - 1  &&
        <Right 
          className="right--icon"
          onClick={ memoNextImage } 
        />
      }
    </div>
  )
}
