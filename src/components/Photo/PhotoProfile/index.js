import React from "react";
import { useParams } from "react-router-dom"
import { PHOTO_GET_PROF } from "../../../api";
import Error from "../../../shared/helper/Error";
import Loading from "../../../shared/helper/Loading";
import useFetch from "../../../shared/hooks/useFetch"
import { Container } from "./styles";
import PhotoContent from "../PhotoContent";

export default function PhotoProfile(){

  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET_PROF(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
  return (
    <Container>
      <PhotoContent data={data} />
    </Container>
  )
  else return null
}