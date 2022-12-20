import React from 'react'
import '../Action/index.scss'
function index() {
  return (
   <>
   <div className='ActionDiv'>
    <div className='ActionHeader'> <h2>ROG IN ACTION</h2></div>
     <div className='ActionImages'>
        <div> <img src="https://dlcdnrog.asus.com/rog/media/1671059676670.webp" alt="foto" />
        <h5>Gaming</h5>
        <p>After one year with Xbox Game Pass, I'm never giving it up

I once dreamed of a day when I could play any game I wanted, whenev</p>
        </div>
        <div> <img src="https://dlcdnrog.asus.com/rog/media/1664418290661.webp" alt="foto" />
        <h5>Gaming</h5>
        <p>Star Citizen: 10 years of pushing the boundaries of what a game can be

Star Citizen is a space simulation game that has spent a decade redefi</p>
        </div>
        <div> <img src="https://dlcdnrog.asus.com/rog/media/1652837729215.webp" alt="foto" />
        <h5>Gaming</h5>
        <p>Take an incredible journey across the Old West in Red Dead Redemption 2

Travel back in time to the Old West with this story-driven masterpiece.</p>
        </div>
     </div>
     <div className='ActionBottom'>
        <h4>LEARN MORE</h4>
     </div>
   </div>
   </>
  )
}

export default index