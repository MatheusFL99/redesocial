import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Users } from '../../dummyData'
import './post.css'

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile-img"
              src={Users.filter(u => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="post-user-name">
              {Users.filter(u => u.id === post.userId)[0].username}
            </span>
            <span className="post-date">1 minuto atrás</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img src={post.media} alt="" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            {!isLiked ? (
              <FavoriteBorderIcon className="like-icon" onClick={likeHandler} />
            ) : (
              <FavoriteIcon className="like-icon" onClick={likeHandler} />
            )}
            <span className="post-like-count">{like} curtidas</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">
              {post.comment} comentários
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
