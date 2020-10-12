import {ADD_NOTE, FETCH_NOTES, NoteActionTypes, REMOVE_NOTE, UPDATE_NOTE} from '../actions/types/note';

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

    case UPDATE_NOTE:
      const updateItemIdx: number = state.list.findIndex((note: any) => note.id === action.payload.id);
      const updateItem = state.list[updateItemIdx];

      const newItem = {
        id: updateItem.id,
        title: action.payload.title,
        description: action.payload.description
      };

      return {
        ...state,
        list: [
          ...state.list.slice(0, updateItemIdx),
          newItem,
          ...state.list.slice(updateItemIdx + 1)
        ]
      };

    case REMOVE_NOTE:
      const idx: number = state.list.findIndex((note: any) => note.id === action.payload);

      return {
        ...state,
        list: [
          ...state.list.slice(0, idx),
          ...state.list.slice(idx + 1)
        ]
      };

    default:
      return state;
  }
}

export default noteReducer;
