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
      // base query
      const base = "https://api.datamuse.com/words?sp=";
      let words = [];

      // calls the datamuse api, returns arr of objects
      // filter the objects by just the word
      const newPromise = new Promise((res, rej) => {
        res(
          fetch("https://api.datamuse.com/words?sp=?????&max=1000")
            .then((res) => res.json())
            .then((res) => {
              res.map((resObj) => words.push(resObj.word));
            })
        );
      });

      await newPromise;

      if (words.length) {
        // pass words to our filter that keeps track of excluded letters
        dispatch(filterWords(words));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterWords = (wordsArr) => {
  return async (dispatch, getState) => {
    try {
      const { words } = getState();
      let filteredWords = [...wordsArr];

      words.excludedLetters.map((letter) => {
        filteredWords = filteredWords.filter((word) => !word.includes(letter));
      });

      dispatch(setFetchedWords(filteredWords));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  guessedWords: [],
  possibleWords: [],
  excludedLetters: ["a", "i"],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FETCH_WORDS:
      return { ...state, possibleWords: action.words };

    default:
      return state;
  }
}
