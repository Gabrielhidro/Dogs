import React from "react"
import { UserContext } from "../../../context"
import PhotoCommentsForm from "../PhotoCommentsForm"
import {CommentsContainer} from './styles'

export default function PhotoComments(props){
  
  const [comments, setComments] = React.useState(() => props.comments)
  const {login} = React.useContext(UserContext)

  return (
    <>
      <CommentsContainer>
        {comments.map((comment) => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
      </CommentsContainer>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  )
}