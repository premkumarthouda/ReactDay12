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
import {Component} from 'react'

class Comments extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Comments</h1>
          <p>Say something about 4.0 Technologies</p>

          <input type="text" placeholder="Your Name"/>
          <input type="textarea" placeholder="Your Comments " />

          <button>Add Comment</button>
        </div>
        <div>
        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"/>
        </div>
      </div>
    )
  }
}
export default Comments
