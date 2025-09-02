import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  inputName = event => {
    this.setState({name: event.target.value})
    console.log(event.target.value)
  }

  inputComment = event => {
    this.setState({comment: event.target.value})
    console.log(event.target.value)
  }

  onClickLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem =>
        id === eachItem.id
          ? {...eachItem, isLiked: !eachItem.isLiked}
          : eachItem,
      ),
    }))
  }

  onDelete = id => {
    const {commentsList} = this.state
    const filterCommentsList = commentsList.filter(eachItem => {
      id !== eachItem.id
    })
    this.setState({commentsList: filterCommentsList})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const backgroundClassNames = `char-profie ${
      initialContainerBackgroundClassNames[
        Math.ceil(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    }`

    const newComment = {
      id: v4(),
      name,
      comment,
      time: new Date(),
      backgroundClassNames,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  renderComment = () => {
    const {commentsList} = this.state
    return commentsList.map(eachItem => (
      <CommentItem
        eachDetails={eachItem}
        key={eachItem.id}
        onClickLike={this.onClickLike}
        onDelete={this.onDelete}
      />
    ))
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Comments</h1>
        <div className="input-container">
          <form className="mini-container" onSubmit={this.addComment}>
            <p className="form-description ">
              Say Something about 4.0 Technologies
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="name-input"
              onChange={this.inputName}
              value={name}
            />
            <textarea
              placeholder="Your Comments "
              className="comment-input"
              onChange={this.inputComment}
              value={comment}
            />

            <button type="submit" className="add-button">
              Add Comment
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
        </div>
        <div className="comment-list">
          <p className="add-button">{commentsList.length}</p>
          <p className="head">Comments</p>
        </div>
        <div>
          <ul className="un-list">{this.renderComment()}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
