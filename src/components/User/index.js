import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import UserHeader from "./components/UserHeader";
import UserPhotoPost from "./components/UserPhotoPost";
import { Container } from "./styles";

export default function User(){
  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/posts" element={<UserPhotoPost />} />
      </Routes>
    </Container>
  )
}