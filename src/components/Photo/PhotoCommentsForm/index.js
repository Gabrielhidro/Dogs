import React from "react"
import { COMMENT_POST } from "../../../api"
import { SubmitCommentsImg } from "../../../shared/assets"
import Error from "../../../shared/helper/Error"
import useFetch from "../../../shared/hooks/useFetch"


export default function PhotoCommentsForm ({id, setComments}){
  
  const {request, error} = useFetch()
  const [comment, setComment] = React.useState('')

  async function handleSubmit(event){
    event.preventDefault()
    const {url, options} = COMMENT_POST(id, {comment})
    const {response, json} = await request(url, options)
    if(response.ok){
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        id="comment"
        name="comment"
        placeholder="Comentar..."
        value={comment}
        onChange={({target}) => setComment(target.value)}
      />

      <button>
        <img src={SubmitCommentsImg} alt='' />
        <Error error={error} />
      </button>
    </form>
  )
}