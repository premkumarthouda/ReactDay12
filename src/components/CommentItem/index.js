// Write your code here
import React from 'react'
const CommentItem = props => {
  const {eachDetails} = props
  const {name, comment} = eachDetails
  return (
    <li>
      <p>{name}</p>
      <p>{comment}</p>
    </li>
  )
}
export default CommentItem
