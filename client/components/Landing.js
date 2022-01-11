import React, { useState, useEffect } from "react";
const datamuse = require("datamuse");

/**
 * COMPONENT
 */
const Landing = (props) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    datamuse.request("words?sp=t??k").then((json) => {
      console.log(json);
      //do it!
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="query">
            <small>Query</small>
          </label>
          <input
            name="query"
            type="text"
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
          />
        </div>

        <div>
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default Landing;
