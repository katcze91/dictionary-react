import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Seaching for ${keyword}`);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
