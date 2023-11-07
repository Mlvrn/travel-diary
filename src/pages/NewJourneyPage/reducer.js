import { produce } from 'immer';
import { SET_NEW_POST } from './constants';

const initialState = {
  posts: [],
};

const newJourneyReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_NEW_POST:
        const newPost = [...state.posts, action.post];
        draft.posts = newPost;
        break;
    }
  });

export default newJourneyReducer;
