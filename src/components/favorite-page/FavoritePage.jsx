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
import { Card } from '../main/Card'
import { useShowComponent } from '../hooks/useShowComponent'
import { ImageInfo } from '../modal/ImageInfo'
export const FavoritePage = (props) => {
  const { favImages, mediaQueries: { tablet, tablet_hd, desk, desk_hd, full_hd, masonryOptions }, handleData, handleEachData, transitionAnimation:{ fade_in } } = useContext( DataContext )
  
  useEffect(() => {
    handleEachData(favImages)
  }, [ favImages ])
  const [openModal, setOpenModal] = useState(false)
  // const [data, setData] = useState([])
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
  const [add, setAdd] = useState()
  const addAttribute = ( data ) => {
    setAdd(data.map(item => {
      return {
        ...item,
        deleteOption: true
      }
    }))
  }

  // useEffect(() => {
  //   const adding = addAttribute(handleData);
  //   return ()
  // }, [favImages])

  const handleOpenModal = (position) => {
    // debugger
    setSlider(position)
    setOpenModal(!openModal)
    // setData(favImages)
    // setSlider(position)
  }

  // useEffect()

  const {handleToggle, toggle} = useShowComponent(false)
  const [handleIndex, setHandleIndex] = useState({
    index: '',
    id: ''
  });

  const { index, id } = handleIndex

  // debugger
  return (
    <>
    <section id="favorite__page" className={ `container-9 ` }>
    <h2 className="no--images">{ favImages.length > 0 ? `Favorite images: ${favImages.length}` : 'No Images' }</h2>
      {/* <MyMasonry 
      // columnCount="2"
      // gap="5"
      favImages= {favImages} 
      /> */}

      <div className={`images__container ${ fade_in }`} style={{ animationDelay: '1s' }}>
        {
          !!handleData && handleData.map((data, index) => (
            <Card key={ `${data.id}${index}` } values={{ data, index, handleToggle, toggle, setHandleIndex }} />
          ))
        }
      </div>
      {
        toggle && <ImageInfo values={ {handleToggle, index, id } }/>
      }
    </section>
    {/* {
      openModal &&
      <ModalFavImages values={{ slider, data, handleOpenModal }}/>
    } */}
  </>
  )
}
