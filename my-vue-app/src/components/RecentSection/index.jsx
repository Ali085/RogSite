import React from 'react'
import '../RecentSection/index.scss'
function index() {
  return (
    <>
   <section className='Recent'>
    <div className='headerH2'><h2>RECENT STORIES</h2></div>
    <div className='ImgHeader'>
        <div><img src="https://dlcdnrog.asus.com/rog/media/1670893994624.webp" alt="Foto" /></div>
        <div><img src="https://dlcdnrog.asus.com/rog/media/1669857154768.webp" alt="Foto" /></div>
        <div><img src="https://dlcdnrog.asus.com/rog/media/166864109730.webp" alt="Foto" /></div>
    </div>
    <div className='ImgBottom'>
        <div><img src="https://dlcdnrog.asus.com/rog/media/1667344658657.webp" alt="foto" /></div>
        <div><img src="https://dlcdnrog.asus.com/rog/media/1665200765593.webp" alt="foto" /></div>
    </div>
    <p>LEARN MORE</p>
   </section>
    </>
  )
}

export default index