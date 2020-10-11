import {
  FETCH_NOTES,
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

    default:
      return state;
  }
}

export default noteReducer;
