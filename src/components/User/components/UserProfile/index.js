import React from "react"
import { useParams } from "react-router-dom"
import Feed from "../Feed"
import { Title, Container } from "./styles"

export default function UserProfile(){

  const {user} = useParams()

  return (
    <Container>
      <Title>{user}</Title>
      <Feed user={user} />
    </Container>
  )
}