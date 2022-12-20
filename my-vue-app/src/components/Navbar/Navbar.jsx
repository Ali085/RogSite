import React from 'react'
import "../Navbar/Navbar.scss"
function Navbar() {
  return (
    <>
      <nav>
        <div className='NavDiv'>
          <div className='burger'><i class="fa-solid fa-bars"></i></div>
          <div className='NavLogo'><img src="https://www.pngmart.com/files/22/Republic-Of-Gamers-Logo-PNG-File.png" alt="" /></div>
          <div className='NavList'>
            <ul>
              <li><a href="!#">PRODUCTS</a></li>
              <li><a href="!#">INNOVATION</a></li>
              <li><a href="!#">DOWNLOADS</a></li>
              <li><a href="!#">COMMUNITY</a></li>
              <li><a href="!#">WHAT'S HOT</a></li>
              <li><a href="!#">SUPPORT</a></li>
            </ul>
          </div>
          <div className='NavSearch'>
            <svg xmlns="http://www.w3.org/2000/svg" width="71.418" height="15.556" viewBox="0 0 71.418 15.556" svg-inline="" src="@images/logo/asus-logo.svg" alt="asus" role="none" focusable="false"><g data-name="组件 69 – 1"><path fill="#797979" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" d="M52.803 15.056l.009-3.84h13.593a1.609 1.609 0 00.649-.183.818.818 0 00.256-.578c0-.737-.613-.769-.921-.785l-9.882-.815A4.615 4.615 0 0154.3 7.812a3.758 3.758 0 01-1.271-2.052s12.766.746 14.184.877a4.359 4.359 0 013.618 3.351 6.077 6.077 0 01-.022 1.57 4.233 4.233 0 01-4.008 3.5zm-12.767-.017l-.354-.025a4.216 4.216 0 01-3.621-3.534v-.609a5.825 5.825 0 01-.077.656 4.261 4.261 0 01-3.52 3.5h-18.3v-9.8l3.8.276v5.738h13.688a.768.768 0 00.807-.74c.007-.738-.562-.814-.864-.828 0 0-9.444-.774-9.782-.806a4.988 4.988 0 01-2.284-1.074 3.976 3.976 0 01-1.2-2.258s12.694 1 14.119 1.129c2.392.221 3.494 2.753 3.59 3.327 0 0 .008.059.015.164V4.642l3.881.278v5.078a1.23 1.23 0 001.119 1.273h6.6a1.264 1.264 0 001.267-1.285v-4.46l3.843.227v5.358c0 3.627-3.817 3.931-3.817 3.931zM.918 15.021L7.651 4.597l4.341.458-6.472 9.966zM52.803 4.363v-.311a5.491 5.491 0 01.973-2A4.27 4.27 0 0156.918.5h14v3.866zm-3.937 0V.519h3.909v3.844zm-12.844 0V.519h3.912v3.844zm-28.216 0s1.589-2.59 1.983-3.1a1.682 1.682 0 011.4-.738h6.946v3.527a5.5 5.5 0 01.977-2A4.252 4.252 0 0122.253.496h13.086v3.863z" data-name="联合 1"></path></g></svg>
            <hr />
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
      <div className='NavAfter'>
        <p>Create an account for better product support!</p>
      </div>
    </>

  )
}

export default Navbar