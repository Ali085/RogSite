import React from 'react'
import '../HomeSection/index.scss'

function index() {
  return (
    <>
    <section className='HomeSection'>
    {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://dlcdnwebimgs.asus.com/gain/C6CAB979-3C02-4F28-ABF7-85B9984351AD/fwebp" class="d-block w-100" alt="rog"/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://dlcdnwebimgs.asus.com/gain/61E66D12-AD75-475E-A70D-37169A60BDF0/fwebp" class="d-block w-100" alt="rog"/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://dlcdnwebimgs.asus.com/gain/0A33FE2D-9022-44B7-9FA3-A20C787F0D00/fwebp" class="d-block w-100" alt="rog"/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
<div id="carouselExampleIndicators" class="carousel slide desktop" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://dlcdnwebimgs.asus.com/gain/C6CAB979-3C02-4F28-ABF7-85B9984351AD/fwebp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://dlcdnwebimgs.asus.com/gain/61E66D12-AD75-475E-A70D-37169A60BDF0/fwebp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://dlcdnwebimgs.asus.com/gain/0A33FE2D-9022-44B7-9FA3-A20C787F0D00/fwebp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


    </section>
    </>
  )
}

export default index