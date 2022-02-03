import React from 'react';
import './Explore.css';
import ImageGallery from 'react-image-gallery';

const images = [
  {originalTitle:"GigaOwl #55",description:"GigaOwl #55",originalHeight:"400" ,originalWidth:"400",original:"https://rarible.mypinata.cloud/ipfs/QmYXCymmPDuUD4sH4LV9eH3W653hJcoiY1ZKUwiQXmKF22/image.png",price:"0.005 ETH"},
  {originalTitle:"GigaOwl #21",description:"GigaOwl #21",originalHeight:"400" ,originalWidth:"400",original:"https://rarible.mypinata.cloud/ipfs/QmQ6t8jCQM2E1on9gDC1eeeF5ZGfg564XNQSmUy8iL3XYq/image.png",price:"0.050 ETH"},
  {originalTitle:"GigaOwl #98",description:"GigaOwl #98",originalHeight:"400" ,originalWidth:"400",original:"https://rarible.mypinata.cloud/ipfs/QmYmN4AYgg8DojKm38cfjzZoSMS2vyMyuYEF8Sbkak37Pi/image.png",price:"0.010 ETH"},
  {originalTitle:"GigaOwl #22",description:"GigaOwl #22",originalHeight:"400" ,originalWidth:"400",original:"https://rarible.mypinata.cloud/ipfs/QmaDQZyMzNDAcDKqUAtBP6rTEKADyVBhQTArQQx11hSNpj/image.png",price:"0.016 ETH"}
]

const Explore = () => {

        return (
          <div className="carousel-cont">
            <ImageGallery items={images} showFullscreenButton={false}  showBullets={true}/>
            </div>
        )
}

export default Explore;