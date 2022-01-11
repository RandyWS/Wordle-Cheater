import axios from "axios";

const TOKEN = "token";

const SET_FETCH_WORDS = "SET_FETCH_WORDS";

export const setFetchedWords = (words) => {
  return {
    type: SET_FETCH_WORDS,
    words,
  };
};

export const _setFetchedWords = (word) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/algos/${id}`);

      if (data.id) {
        dispatch(setFetchedWords(data));
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
