import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import RepositoryTable from 'components/RepositoryTable';
import Loader from 'components/Loader';

import { REPOS_QUERY } from 'queries';
import Pagination from './Pagination';


export default function Repository({ search, license, date }) {
  const [after, setAfter] = useState(null);
  const [before, setBefore] = useState(null);
  const [first, setFirst] = useState(20);
  const [last, setLast] = useState(null);

  useEffect(() => {
    if (search || license) {
      setFirst(20)
      setLast(null)
      setBefore(null)
      setAfter(null)
    }
  }, [search, license])

  const { loading, error, data } = useQuery(REPOS_QUERY, {
    variables: 
      { 
        queryString: `${search ? search + 'in:name' : ''} ${license ? 'license:'+license : ''} 
          is:public language:JavaScript created:>${date} sort:stars`,
        after,
        before,
        first,
        last
      }
  })

  const onNext = () => {
    setFirst(20)
    setLast(null)
    setBefore(null)
    setAfter(data.search.pageInfo.endCursor)
  }

  const onPrev = () => {
    setFirst(null)
    setLast(20)
    setBefore(data.search.pageInfo.startCursor)
    setAfter(null)
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && !error && data && data.search.edges.length ?
        <>
          <RepositoryTable
            data={data ? data.search.edges : []}
          />
          <Pagination 
            hasNext={data.search.pageInfo.hasNextPage}
            hasPrev={data.search.pageInfo.hasPreviousPage}
            onNext={onNext}
            onPrev={onPrev}
          />
        </> : ''
      }
      {!loading && !error && data && data.search.edges.length === 0 ?
        <span><br />Nothing Found</span> : ''
      }
    </>
  )
}
