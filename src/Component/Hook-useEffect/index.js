import React, { useEffect, useState } from 'react'

import axios from "axios";
import queryString from "query-string";
// Compnent 
import {UseEffectAPI} from "./UseEffectAPI";
import {UseEffectPagiation} from "./UseEffectPagiation";
import {PostFiltersForm} from "./PostFiltersForm";
import {Clock} from "./Clock";

const UseEffectHook = () => {

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState(
    {
      _page: 1,
      _limit: 10,
      _totalRows: 1
    }
  );

  const  [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: ''
  });

  const [showClock, setShowClock] = useState(true);

  // useEffect(() => {
  //   const FechAPI = async () => {
  //     try {
  //       const URL = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
  //       const {data, status} = await axios.get(URL);
  //       // console.log(data);
  //       if (status !== 200) throw new Error("Can't fetch data");
  //       setPostList(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   FechAPI();
  // }, []);

  useEffect(() => {
    const FechAPI = async () => {
      try {
        const paramsString = queryString.stringify(filters);
        // console.log(paramsString);
        const URL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const {data, status} = await axios.get(URL);
        // console.log(data);
        if (status !== 200) throw new Error("Can't fetch data");
        setPostList(data.data);
        setPagination(data.pagination);
      } catch (error) {
        console.log(error);
      }
    }

    FechAPI();
  }, [filters]);

  const onHandlePageChange = (newpage) =>  {
    // console.log("new page:"  +  newpage);
    setFilters({
      ...filters,
      _page: newpage
    })
  }

  const handleSearchChange = (newSearch) => {
    // console.log("New Search:", newSearch);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newSearch.searchTerm
    });
  }

  return (
    <div>
      <h1>UseEffect</h1>
      <h2>UseEffect for Call API</h2>
      <UseEffectAPI post={postList} />

      <h2>useEffect for Paginationn</h2>
      <UseEffectPagiation
        pagination={pagination}  
        onPageChange={onHandlePageChange}
      />

      <hr/>
      <h2>useEffect Search SDung Kỹ Thuật Debounce</h2>
      <PostFiltersForm onSubmitSearch={handleSearchChange} />

      <hr/>
      <h2>Clock</h2>
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)} >Hide Clock</button>

    </div>
  )
}

export {UseEffectHook};
