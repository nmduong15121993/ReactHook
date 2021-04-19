import React, { useRef, useState } from 'react'

const PostFiltersForm = ({onSubmitSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const typingTimeoutref = useRef(null);

  const handleSearchTermChange = (e) => {
    console.log(e.target.value);
    const val = e.target.value;
    setSearchTerm(val);

    if(!onSubmitSearch) return undefined;
    // SET -- 100 --- CLEAR --- 300 --> SUBMIT
    // SET -- 300 --> SUBMIT
    if(typingTimeoutref.current) {
      clearTimeout(typingTimeoutref.current);
    };
    // Set Timeout khi nhap 300ms se Submit
    typingTimeoutref.current = setTimeout(() => {
      const formValues = {
        searchTerm: val,
      };
      onSubmitSearch(formValues);
    }, 500); //thgian timeout

  }

  return (
    <form>
      <input 
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </form>
  )
}

export {PostFiltersForm};
