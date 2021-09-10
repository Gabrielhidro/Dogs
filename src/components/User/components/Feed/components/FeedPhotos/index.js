import React from "react";
import useFetch from "../../../../../../shared/hooks/useFetch";
import FeedPhotosItem from "./components/FeedPhotosItem";
import { PHOTOS_GET } from '../../../../../../api'
import Error from "../../../../../../shared/helper/Error";
import Loading from "../../../../../../shared/helper/Loading";
import { Container } from "./styles";

export default function FeedPhoto(){

  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos(){
      const {url, options} = PHOTOS_GET({page: 1, total: 20, user: 0})
      const {response, json} = await request (url, options)
      console.log(json);
    }
    fetchPhotos()
  }, [request])

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
  return (
    <Container>
      {data.map(photo => {
        return (
          <FeedPhotosItem photo={photo} key={photo.id} />
        )
      })}
    </Container>
  )
  else return null
}