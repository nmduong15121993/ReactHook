import React, { useEffect, useState } from 'react'

import axios from "axios";

// Compnent 
import {UseEffectAPI} from "./UseEffectAPI";
import {UseEffectPagiation} from "./UseEffectPagiation";

const UseEffectHook = () => {

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState(
    {
      _page: 1,
      _limit: 10,
      _totalRows: 1
    }
  );

  useEffect(() => {
    const FechAPI = async () => {
      try {
        const URL = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const {data, status} = await axios.get(URL);
        console.log(data);
        if (status !== 200) throw new Error("Can't fetch data");
        setPostList(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    FechAPI();
  }, []);


  // const onHandlePageChange = ()

  return (
    <div>
      <h1>UseEffect</h1>
      <h2>UseEffect for Call API</h2>
      <UseEffectAPI post={postList} />

      <h2>useEffect for Paginationn</h2>
      <UseEffectPagiation />
    </div>
  )
}

export {UseEffectHook};
