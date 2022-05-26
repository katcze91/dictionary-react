import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
   
  }
  function handleResponse(response){
      console.log(response.data[0])
  }
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse)
  
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
