import React from 'react';
import { useEffect } from 'react';
import { STATS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import UserStatsGraphs from './UserStatsGraphs';

const UserStates = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title='Estatísticas' />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStates;
