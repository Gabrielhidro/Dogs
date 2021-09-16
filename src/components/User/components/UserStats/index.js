import React from "react";
import { STATS_GET } from "../../../../api";
import Error from "../../../../shared/helper/Error";
import Loading from "../../../../shared/helper/Loading";
import useFetch from "../../../../shared/hooks/useFetch";
import UserStatsGraphs from "./components/UserStatsGraphs";

export default function UserStats(){
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <h1>Estatísticas</h1>
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};