import React from 'react'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../top-bar/Topbar'
import './home.css'

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="home-container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}
