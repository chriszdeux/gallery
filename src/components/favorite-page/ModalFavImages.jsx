import React, { useContext, useEffect, useRef, useState } from 'react'
import photo from '../../utils/temp/photo.jpg';
// import '../utils/icons';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai'
import { DataContext } from '../context/DataContext';
// import { ModalImage } from './ModalImage';
import { cleanup } from '@testing-library/react';
import { useIncrementDecrement } from '../hooks/useIncrementDecrement';
import { SliderControls } from '../utils/SliderControls';
// import { ModalImageUser } from './ModalImageUser';
// ModalImageUser
import { SliderControlsUser } from '../utils/SliderControlsUser';
import { useFetchCollectionImages } from '../hooks/useFetchCollectionImages';
import { ModalImageUser } from '../modal/ModalImageUser';

export const ModalFavImages = ( { values } ) => {
  // ModalImageUser
 const { slider:currentPosition, data, handleOpenModal } = values
 const { slider, increment, decrement} = useIncrementDecrement( currentPosition )
  // <ModalImage
  return (
    <section className="modal__image__info"  >
      <CloseIcon 
        className="close--icon"
        onClick={ handleOpenModal }
      />
        {/* <div className="username"> */}
          {console.log('changed')/* <figure className="username__profile__image">
            <img className="username--profile--image" src={ photo } alt="" />
          <h3 className="username--profile">username</h3>
          </figure> */}
        {/* </div> */}
          
          {
          <div  className={`modal__image`}>
            <ModalImageUser values={{ data, slider }} />
          </div>
          }

        {/* <div  className="modal__image">
          {
            data.map(item => (
              <ModalImage values={ item }/>        
            ))
          }
        </div> */}
        {
          
      <SliderControlsUser values={{ slider, increment, decrement, data }}/>
        }

      </section>
  )
}