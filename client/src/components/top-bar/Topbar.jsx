import React from 'react'
import './topbar.css'
import { Search, Notifications } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">Práticas A</span>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <Search className="search-icon" />
          <input placeholder="Pesquisar..." className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-cont">1</span>
          </div>
        </div>
        <img
          src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
          className="topbar-img"
          alt="imagem"
        />
      </div>
    </div>
  )
}
