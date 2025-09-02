// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import React from 'react'

const CommentItem = props => {
  const {eachDetails, onClickLike, onDelete} = props
  const {id, name, comment, time, isLiked, backgroundClassNames} = eachDetails
  const isOnClikcLiked = () => {
    onClickLike(id)
  }

  const profile = name.toUpperCase()[0]

  return (
    <li className="list">
      <div className="top-container">
        <p className={backgroundClassNames}> {profile}</p>
        <div>
          <h1 className="Name">{name}</h1>
          <p className="Comment">{comment}</p>
        </div>
        <p className="date">
          {formatDistanceToNow(new Date(time))} minuties ago
        </p>
      </div>

      <div className="btn-contaner">
        <div className="like-container">
          <img
            src={
              isLiked
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
            className="like-img"
            alt="like"
          />
          <button
            className={isLiked ? 'para-like' : 'para'}
            onClick={isOnClikcLiked}
          >
            Like
          </button>
        </div>
        <button
          data-testid="delete"
          onClick={() => onDelete(id)}
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
