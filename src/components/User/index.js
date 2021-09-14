import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../context";
import PageNotFound from "../PageNotFound";
import Feed from "./components/Feed";
import UserHeader from "./components/UserHeader";
import UserPhotoPost from "./components/UserPhotoPost";
import UserStats from "./components/UserStats";
import { Container } from "./styles";

export default function User(){

  const {data} = React.useContext(UserContext)

  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>} />
        <Route path="/posts" element={<UserPhotoPost />} />
        <Route path="/statistics" element={<UserStats />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Container>
  )
}