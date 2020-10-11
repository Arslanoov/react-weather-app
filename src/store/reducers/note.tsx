import {
  FETCH_NOTES,
  ADD_NOTE,
  NoteActionTypes
} from '../actions/types/note';

const initialState: any = {
  list: []
};

export function noteReducer(
  state: any = initialState,
  action: NoteActionTypes
): any {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        list: action.payload
      };

    case ADD_NOTE:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ]
      };

    default:
      return state;
  }
}

export default noteReducer;
