import { produce } from 'immer';
import { SET_POST_BY_ID } from './constants';

const initialState = {
  post: null,
};

const postReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_POST_BY_ID:
        draft.post = action.post;
        break;
      default:
        return state;
    }
  });

export default postReducer;
