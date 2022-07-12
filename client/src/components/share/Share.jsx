import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import LabelIcon from '@mui/icons-material/Label'
import RoomIcon from '@mui/icons-material/Room'
import './share.css'

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="share-profile-img"
            src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
            alt=""
          />
          <input placeholder="Digite aqui..." className="share-input" />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMediaIcon htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Imagem ou Vídeo</span>
            </div>
            <div className="share-option">
              <LabelIcon htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Tópicos</span>
            </div>
            <div className="share-option">
              <RoomIcon htmlColor="red" className="share-icon" />
              <span className="share-option-text">Localização</span>
            </div>
          </div>
          <button className="share-button">Compartilhar</button>
        </div>
      </div>
    </div>
  )
}
