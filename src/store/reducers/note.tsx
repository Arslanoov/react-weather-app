import {ADD_NOTE, FETCH_NOTES, NoteActionTypes, REMOVE_NOTE} from '../actions/types/note';

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

    case REMOVE_NOTE:
      const idx = state.list.findIndex((note: any) => note.id === action.payload);
      //const item = state.list[idx];

      return {
        ...state,
        list: [
          ...state.list.slice(0, idx),
          //item,
          ...state.list.slice(idx + 1)
        ]
      };

    default:
      return state;
  }
}

export default noteReducer;
