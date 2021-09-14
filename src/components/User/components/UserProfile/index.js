import React from "react"
import { useParams } from "react-router-dom"
import Feed from "../Feed"

export default function UserProfile(){

  const {user} = useParams()

  return (
    <div>
      <h1>{user}</h1>
      <Feed user={user} />
    </div>
  )
}