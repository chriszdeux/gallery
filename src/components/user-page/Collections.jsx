import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect } from 'react/cjs/react.development'
import { DataContext } from '../context/DataContext'
import { useIncrementDecrement } from '../hooks/useIncrementDecrement'
import { useShowComponent } from '../hooks/useShowComponent'
import { ImageInfo } from '../modal/ImageInfo'
import { Collection } from './Collection'

export const Collections = () => {
  const { userData:{ data:data_user }, dataCollection:{ data, load }, handleData, handleEachData } = useContext( DataContext )
  // debugger
  const { listCollection } = !!data_user && data_user;
// debugger
  // useEffect(() => {
  //   handleEachData(listCollection)
  // }, [ listCollection ])
  // const { position } = listCollection
  // debugger
  // const { slider, increment, decrement } =useIncrementDecrement( position )
  // debugger
  const { handleToggle, toggle } = useShowComponent()
  // debugger
  return (
    <>
    <div className="user__collections container-9">
      {
        listCollection != undefined && 
        listCollection.map((item, index) => (
          <Collection 
          key={`${item.id}${index}`} 
          values={ {item, index} }
          />
          ))
        }                  
      {/* <Collection />                  
      <Collection />                   */}
    </div>
      
    </>
      
  )
}
