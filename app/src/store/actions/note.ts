import { NoteActionType } from '../action-types'
import { Note } from '../../note/services/noteService'

interface FetchNotesAction {
  type: NoteActionType.FETCH_NOTES,
  payload: Note[],
}

interface AddNoteAction {
  type: NoteActionType.ADD_NOTE,
  payload: Note,
}

interface UpdateNoteAction {
  type: NoteActionType.UPDATE_NOTE,
  payload: Note,
}

interface RemoveNoteAction {
  type: NoteActionType.REMOVE_NOTE,
  payload: Note['id'],
}

export type Action =
  FetchNotesAction |
  AddNoteAction |
  UpdateNoteAction |
  RemoveNoteAction
