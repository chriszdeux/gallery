import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { DataContext } from '../context/DataContext'
import { useIncrementDecrement } from '../hooks/useIncrementDecrement'
import { ModalFavImages } from './ModalFavImages'
// import { ModalImageUser } from '../modal/ModalImageUser'
// import { ModalFavImages } from './ModalFavImages'
// ModalFavImages
import Masonry from 'react-masonry-component'
import { MyMasonry } from './MyMasonry'
export const FavoritePage = (props) => {
  const { favImages, mediaQueries: { tablet, tablet_hd, desk, desk_hd, full_hd, masonryOptions } } = useContext( DataContext )
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState([])
  const [slider, setSlider] = useState(0)
  // const {slider, increment, decrement} = useIncrementDecrement( currentPosition )
  // debugger
  // const myProps = {
  //   fitWidth: false,
  //   columnWidth: 300,
  //   gutter: 30,
  //   itemSelector: 'photo-item',
  // }
  // debugger
  useEffect(() => {
    setData(favImages)
  }, [ favImages ])

  const handleOpenModal = (position) => {
    // debugger
    setSlider(position)
    setOpenModal(!openModal)
    // setData(favImages)
    // setSlider(position)
  }

  // useEffect()


  // debugger
  return (
    <>
    <section id="favorite__page" className="container-9">
    <h2 className="no--images">{ favImages.length > 0 ? `Favorite images: ${favImages.length}` : 'No Images' }</h2>
      <MyMasonry 
      // columnCount="2"
      // gap="5"
      favImages= {favImages} 
      />
    </section>
    {/* {
      openModal &&
      <ModalFavImages values={{ slider, data, handleOpenModal }}/>
    } */}
  </>
  )
}
