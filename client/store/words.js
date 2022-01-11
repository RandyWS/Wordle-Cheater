import axios from "axios";

const TOKEN = "token";

const SET_FETCH_WORDS = "SET_FETCH_WORDS";

export const setFetchedWords = (words) => {
  return {
    type: SET_FETCH_WORDS,
    words,
  };
};

export const _fetchWords = (query) => {
  return async (dispatch) => {
    try {
      const base = "https://api.datamuse.com/words?sp=";
      let words = [];

      const newPromise = new Promise((res, rej) => {
        res(
          fetch("https://api.datamuse.com/words?sp=?????")
            .then((res) => res.json())
            .then((res) => {
              res.map((resObj) => words.push(resObj.word));
            })
        );
      });

      await newPromise;

      if (words.length) {
        dispatch(setFetchedWords(words));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  guessedWords: [],
  possibleWords: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FETCH_WORDS:
      return { ...state, possibleWords: action.words };

    default:
      return state;
  }
}
