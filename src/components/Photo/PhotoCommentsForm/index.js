import React from "react"
import { COMMENT_POST } from "../../../api"
import { SubmitCommentsImg } from "../../../shared/assets"
import Error from "../../../shared/helper/Error"
import useFetch from "../../../shared/hooks/useFetch"
import { Button, Container, TextArea } from "./styles"


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
    <Container onSubmit={handleSubmit}>
      <TextArea 
        id="comment"
        name="comment"
        placeholder="Comentar..."
        value={comment}
        onChange={({target}) => setComment(target.value)}
      />

      <Button>
        <img src={SubmitCommentsImg} alt='' />
      </Button>
      
      <Error error={error} />
    </Container>
  )
}