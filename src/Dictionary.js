import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("book");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
     axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }
 
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" />
      </form>
      <Results results={results} />
    </div>
  );
}
