import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect } from 'react/cjs/react.development';
import  photo  from "../../utils/temp/photo.jpeg";
import { DataContext } from '../context/DataContext';
import { useShowComponent } from '../hooks/useShowComponent';
import { ImageInfo } from '../modal/ImageInfo';
import { ImageInfoUser } from '../modal/ImageInfoUser';


export const Collection = ({values}) => {
  const { index, item } = values
  // debugger
  const { handleData, handleEachData } = useContext(DataContext);
  const { id, title, description, total_photos, preview_photos, position } = item;

  // useEffect(() => {
  //   handleEachData(preview_photos)
  // }, [ item ])
  const {handleToggle, toggle} = useShowComponent(false)

  // debugger
  return (
    <>
    <div className="collection__container">
      <figure className="collections" onClick={ handleToggle }>
        {
          preview_photos.map(item => (
            <LazyLoadImage key={ item.id } className="photo" src={ item.urls.small } alt="" />
          ))
        }
        {/* <img className="photo--1" src={ photo } alt="" /> */}
        {/* <img className="photo--2" src={ photo } alt="" /> */}
        {/* <img className="photo--3" src={ photo } alt="" /> */}
        {/* <figcaption className="collection--name">Lorem ipsum dolor sit amet consectetur.</figcaption> */}
        <figcaption className="total--photos">photos: { total_photos }</figcaption>
      </figure>
      <h4 className="collection--name">{ title }</h4>
    </div>
    {
        toggle && <ImageInfoUser values={{ handleToggle, toggle, position, handleData, id }}/>
      }
    </>
  )
}
