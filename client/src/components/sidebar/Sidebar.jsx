import React from 'react'
import './sidebar.css'
import CalculateIcon from '@mui/icons-material/Calculate'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import CodeIcon from '@mui/icons-material/Code'
import EventIcon from '@mui/icons-material/Event'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          TAGS
          <li className="sidebar-list-item">
            <CalculateIcon className="sidebar-list-icon" />
            <span>Exercícios</span>
          </li>
          <li className="sidebar-list-item">
            <MenuBookIcon className="sidebar-list-icon" />
            <span>Livros</span>
          </li>
          <li className="sidebar-list-item">
            <LocalOfferIcon className="sidebar-list-icon" />
            <span>Lojas</span>
          </li>
          <li className="sidebar-list-item">
            <CodeIcon className="sidebar-list-icon" />
            <span>Programação</span>
          </li>
          <li className="sidebar-list-item">
            <EventIcon className="sidebar-list-icon" />
            <span>Eventos</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
