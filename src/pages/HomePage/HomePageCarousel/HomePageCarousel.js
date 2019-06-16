import React from 'react'
import './HomePageCarousel.css'
// components
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'

const HomePageCarousel = () => {
  const onChange = () => {}
  const onClickItem = () => {}
  const onClickThumb = () => {}

  return (
    <Carousel
      showThumbs={false}
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}>
      <div>
        <img className="HomePageCarousel-image" alt="" src="/assets/images/01.jpeg" />
      </div>
      <div>
        <img className="HomePageCarousel-image" alt="" src="/assets/images/02.jpeg" />
      </div>
      <div>
        <img className="HomePageCarousel-image" alt="" src="/assets/images/03.png" />
      </div>
    </Carousel>
  )
}

export default HomePageCarousel
