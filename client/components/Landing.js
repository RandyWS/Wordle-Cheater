import React, { useState, useEffect } from "react";
import { _fetchWords } from "../store";
import { useDispatch, useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Landing = (props) => {
  const dispatch = useDispatch();
  const [word, setWord] = useState(new Array(5).fill(""));
  const [excluded, setExcluded] = useState([]);
  const [included, setIncluded] = useState([]);
  const { possibleWords, excludedLetters, includedLetters } = useSelector(
    (state) => state.words
  );

  const handleSubmitWord = async (ev) => {
    ev.preventDefault();

    dispatch(_fetchWords(word));
  };

  const setLetter = (lett, idx) => {
    let currWord = [...word];
    currWord[idx] = lett;
    setWord(currWord);
  };

  const setIncludedLetters = (letters) => {
    let currIncluded = [...included];
    letters.forEach((lett) => {
      if (!currIncluded.includes(lett.toLowerCase())) {
        currIncluded.push(lett);
      }
    });
    setExcluded(currIncluded.sort());
  };

  const setExcludedLetters = (letters) => {
    let currExcluded = [...excluded];
    letters.forEach((lett) => {
      if (!currExcluded.includes(lett.toLowerCase())) {
        currExcluded.push(lett);
      }
    });
    setExcluded(currExcluded.sort());
  };

  console.log("possible Words", possibleWords);
  console.log("word", word);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="query">
            <small>Any Confirmed Letters?</small>
          </label>
          {word.map((lett, idx) => {
            return (
              <input
                key={idx}
                name="query"
                type="text"
                value={lett}
                onChange={(ev) => setLetter(ev.target.value, idx)}
              />
            );
          })}
        </div>

        <div>
          <label htmlFor="included">
            <small>Letters in word, not in correct place</small>
          </label>
          <input
            name="included"
            type="text"
            value={included}
            onChange={(ev) => setIncludedLetters(ev.target.value)}
          />
        </div>

        <div>
          <label htmlFor="excluded">
            <small>Excluded Letters</small>
          </label>
          <input
            name="excluded"
            type="text"
            value={excluded}
            onChange={(ev) => setExcludedLetters(ev.target.value)}
          />
        </div>

        <div>
          <button type="submit" onClick={handleSubmitWord}>
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Landing;
