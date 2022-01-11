import React, { useState, useEffect } from "react";
import { _fetchWords } from "../store";
import { useDispatch, useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Landing = (props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { possibleWords } = useSelector((state) => state.words);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    dispatch(_fetchWords(query));
  };

  console.log("possible Words", possibleWords);

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
