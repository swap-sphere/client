import Slider from 'react-slick'
import { bannerImgFive, bannerImgFour, bannerImgOne, bannerImgThree, bannerImgTwo } from '../../../assets'

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
    <div>
        <Slider {...settings}>
            <div>
                <img src={bannerImgOne} alt="banner-image-one" />
            </div>

            <div>
                <img src={bannerImgTwo} alt="banner-image-two" />
            </div>

            <div>
                <img src={bannerImgThree} alt="banner-image-three" />
            </div>

            <div>
                <img src={bannerImgFour} alt="banner-image-four" />
            </div>

            <div>
                <img src={bannerImgFive} alt="banner-image-five" />
            </div>
        </Slider>
    </div>
  )
}

export default Banner