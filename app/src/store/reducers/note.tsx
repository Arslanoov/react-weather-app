import { NoteActionType } from '../action-types'
import { NoteAction } from '../actions'
import { Note } from '../../note/services/noteService'

interface ForecastData {
  id: number | string
}

///

interface NoteState {
  list: ForecastData[]
}

const initialState: NoteState = {
  list: [],
}

export function noteReducer(
  state: NoteState = initialState,
  action: NoteAction,
): any {
  switch (action.type) {
    case NoteActionType.FETCH_NOTES:
      return {
        ...state,
        list: action.payload,
      }

    case NoteActionType.ADD_NOTE:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload,
        ],
      }

    case NoteActionType.UPDATE_NOTE: {
      const updateItemIdx: number = state.list.findIndex((note: Note) => note.id === action.payload.id)
      const updateItem = state.list[updateItemIdx]

      const newItem = {
        id: updateItem.id,
        title: action.payload.title,
        description: action.payload.description,
      }

      return {
        ...state,
        list: [
          ...state.list.slice(0, updateItemIdx),
          newItem,
          ...state.list.slice(updateItemIdx + 1),
        ],
      }
    }

    case NoteActionType.REMOVE_NOTE: {
      const idx: number = state.list.findIndex((note: Note) => note.id === action.payload)

      return {
        ...state,
        list: [
          ...state.list.slice(0, idx),
          ...state.list.slice(idx + 1),
        ],
      }
    }

    default:
      return state
  }
}

export default noteReducer
