import { Note } from '../../../note/services/noteService';

export const FETCH_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

interface GetNotesAction {
  type: typeof FETCH_NOTES,
  payload: Array<Note>
}

interface AddNoteAction {
  type: typeof ADD_NOTE,
  payload: Note
}

interface UpdateNoteAction {
  type: typeof UPDATE_NOTE,
  payload: {
    id: string,
    title: string,
    description: string
  }
}

interface RemoveNoteAction {
  type: typeof REMOVE_NOTE,
  payload: string
}

export type NoteActionTypes = GetNotesAction | AddNoteAction | UpdateNoteAction | RemoveNoteAction;
