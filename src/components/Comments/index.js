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

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const backgroundClassNames =
      initialContainerBackgroundClassNames[
        Math.ceil(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    const newComment = {
      id: v4(),
      name,
      comment,
      time: new Date(),
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
      <CommentItem eachDetails={eachItem} key={eachItem.id} />
    ))
  }

  render() {
    const {name, comment} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Comments</h1>
        <div className="input-container">
          <form className="mini-container" onSubmit={this.addComment}>
            <h1 className="form-description ">
              Say something about 4.0 Technologies
            </h1>

            <input
              type="text"
              placeholder="Your Name"
              className="name-input"
              onChange={this.inputName}
              value={name}
            />
            <input
              type="textarea"
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
            />
          </div>
        </div>
        <div className="comment-list">
          <p className="add-button">0</p>
          <h1 className="head">Comments</h1>
        </div>
        <div>
          <ul>{this.renderComment()}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
