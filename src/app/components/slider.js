import React, { PureComponent } from 'react'
import Slider from "react-slick";

class SliderContainer extends PureComponent {
  render () {
    const { sliderSelect, sliderIndex } = this.props
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true,
      centerMode: true,
      adaptiveHeight: true,
      afterChange: index => sliderSelect(index),
    };
    return (
      <Slider className="slider-container" {...settings}>
        <div className={sliderIndex === 0 ? "slider-tile-scale" : ""}>
          <img
            src="https://www.seenbysolomon.com/wp-content/uploads/CG1-1080x1080.jpg"
            height="100"
            width="110"
          />
        </div>
        <div className={sliderIndex === 1 ? "slider-tile-scale" : ""}>
          <img
            src="https://news.nationalgeographic.com/content/dam/news/2017/06/02/map-post-sf-shipwrecks/01-map-post-san-francisco-shipwreck.adapt.885.1.jpg"
            height="100"
            width="110"
          />
        </div>
        <div className={sliderIndex === 2 ? "slider-tile-scale" : ""}>
          <img
            src="https://www.isro.gov.in/sites/default/files/ISRO%20to%20map%20and%20provide%20management%20plans%20for%20%20heritage%20sites%20and%20monuments%20of%20National%20importance/image1.jpg"
            height="100"
            width="110"
          />
        </div>
        <div className={sliderIndex === 3 ? "slider-tile-scale" : ""}>
          <img
            src="https://burritojustice.files.wordpress.com/2011/10/1938-aerial-dolores-park.jpg?w=768&h=1342"
            height="100"
            width="110"
          />
        </div>
        <div className={sliderIndex === 4 ? "slider-tile-scale" : ""}>
          <img
            src="https://burritojustice.files.wordpress.com/2011/10/1938-aerial-la-lengua-crop.jpg?w=768&h=599"
            height="100"
            width="110"
          />
        </div>
        <div className={sliderIndex === 5 ? "slider-tile-scale" : ""}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyVL3X83EQcyv3YFdzJC1MompztIGrMusbL-NPDVF8fbg9OUu"
            height="100"
            width="110"
          />
        </div>
      </Slider>
    )
  }
}

export default SliderContainer