import React from "react"
import { PHOTO_GET } from "../../../../../../api"
import Error from "../../../../../../shared/helper/Error"
import Loading from "../../../../../../shared/helper/Loading"
import useFetch from "../../../../../../shared/hooks/useFetch"
import PhotoContent from "../../../../../Photo/PhotoContent"
import { ModalContainer } from "./styles"

export default function FeedModal({photo, setModalPhoto}){

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  function handleOutsideClick (event){
    if (event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <ModalContainer onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </ModalContainer>
  )
}