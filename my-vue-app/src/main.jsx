import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './components/Navbar/Navbar'
import './components/_reset.scss'
import HomeSection from './components/HomeSection/index'
import SliderSection from './components/SliderSection/index'
import RecentSection from './components/RecentSection/index'
import Action from './components/Action/index'
import Join from './components/Join/index'
import Footer from './components/Footer/index'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <HomeSection></HomeSection>
 <SliderSection></SliderSection>
 <RecentSection></RecentSection>
 <Action></Action>
 <Join></Join>
 <Footer></Footer>
  </React.StrictMode>,
)
