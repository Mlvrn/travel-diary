import { produce } from 'immer';
import { SET_ALL_POST } from './constants';

export const initialState = {
  posts: [],
};

const landingPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POST:
        draft.posts = action.posts;
        break;
      default:
        return state;
    }
  });

export default landingPageReducer;
