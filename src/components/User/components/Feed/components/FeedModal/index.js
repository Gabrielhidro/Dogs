import React from "react"
import { PHOTO_GET } from "../../../../../../api"
import Error from "../../../../../../shared/helper/Error"
import Loading from "../../../../../../shared/helper/Loading"
import useFetch from "../../../../../../shared/hooks/useFetch"
import PhotoContent from "../../../../../Photo/PhotoContent"

export default function FeedModal({photo}){

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <div>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}