import React from 'react'
import '../SliderSection/index.scss'
function index() {
  return (
    <>
    <div className='SliderDiv'>
    <div className='sliderHeader'> <h2>EXPLORE OUR PRODUCTS</h2></div>
    <div className='sliderr'>
    <div class="container">
  <div class="row">
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-none d-lg-block">
            <div class="slide-box">
              <img src="https://dlcdnwebimgs.asus.com/gain/D3BB6D74-87CF-4FEF-ABE6-4E47535C2F6C/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/7A8E0C01-7EBA-49FF-977E-352D6EAAA8BC/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/3563183B-A875-4ACE-82E9-DDFD0406562B/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/D8D19FB9-2485-478F-9E58-4344265E0E69/w240/h175" alt="First slide"/>
            </div>
          </div>
          <div class="d-none d-md-block d-lg-none">
            <div class="slide-box">
            <img src="https://dlcdnwebimgs.asus.com/gain/F69CD34B-7709-41BF-BEEC-FD151700735A/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/47257F22-A35B-4A7D-A18C-CDAC0ED7B6EA/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/DD0607BB-A52B-4947-81D4-6E90FFE609C1/w240/h175" alt="First slide"/>
            </div>
          </div>
          <div class="d-none d-sm-block d-md-none">
            <div class="slide-box">
              <img src="https://dlcdnwebimgs.asus.com/gain/976CF93D-8371-4C36-B44C-88920ED5FA9D/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/8E7A4860-965C-424A-AC63-E228E0D0B391/w240/h175" alt="First slide"/>
            </div>
          </div>
          <div class="d-block d-sm-none">
          <img src="https://dlcdnwebimgs.asus.com/gain/F69CD34B-7709-41BF-BEEC-FD151700735A/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/47257F22-A35B-4A7D-A18C-CDAC0ED7B6EA/w240/h175" alt="First slide"/>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-none d-lg-block">
            <div class="slide-box">
            <img src="https://dlcdnwebimgs.asus.com/gain/F69CD34B-7709-41BF-BEEC-FD151700735A/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/47257F22-A35B-4A7D-A18C-CDAC0ED7B6EA/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/DD0607BB-A52B-4947-81D4-6E90FFE609C1/w240/h175" alt="First slide"/>
            </div>
          </div>
          <div class="d-none d-md-block d-lg-none">
            <div class="slide-box">
            <img src="https://dlcdnwebimgs.asus.com/gain/F69CD34B-7709-41BF-BEEC-FD151700735A/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/47257F22-A35B-4A7D-A18C-CDAC0ED7B6EA/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/DD0607BB-A52B-4947-81D4-6E90FFE609C1/w240/h175" alt="First slide"/>
            </div>
          </div>
          <div class="d-none d-sm-block d-md-none">
            <div class="slide-box">
            <img src="https://dlcdnwebimgs.asus.com/gain/976CF93D-8371-4C36-B44C-88920ED5FA9D/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/8E7A4860-965C-424A-AC63-E228E0D0B391/w240/h175" alt="First slide"/>
            </div>
          </div>
          <div class="d-block d-sm-none">
          <img src="https://dlcdnwebimgs.asus.com/gain/976CF93D-8371-4C36-B44C-88920ED5FA9D/w240/h175" alt="First slide"/>
              <img src="https://dlcdnwebimgs.asus.com/gain/8E7A4860-965C-424A-AC63-E228E0D0B391/w240/h175" alt="First slide"/>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>
    </div>
    </div>
    </>
  )
}

export default index