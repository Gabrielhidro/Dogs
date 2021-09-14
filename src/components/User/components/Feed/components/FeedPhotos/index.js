import React from "react";
import useFetch from "../../../../../../shared/hooks/useFetch";
import FeedPhotosItem from "./components/FeedPhotosItem";
import { PHOTOS_GET } from '../../../../../../api'
import Error from "../../../../../../shared/helper/Error";
import Loading from "../../../../../../shared/helper/Loading";
import { Container } from "./styles";

export default function FeedPhoto({page, user, setModalPhoto, setInfinite}){

  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos(){
      const total = 3
      const {url, options} = PHOTOS_GET({page, total, user})
      const {response, json} = await request (url, options)
      if(response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
  return (
    <Container>
      {data.map(photo => {
        return (
          <FeedPhotosItem setModalPhoto={setModalPhoto} photo={photo} key={photo.id} />
        )
      })}
    </Container>
  )
  else return null
}