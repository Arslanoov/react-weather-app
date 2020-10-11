export const FETCH_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';

interface GetNotesAction {
  type: typeof FETCH_NOTES,
  payload: Array<any>
}

interface AddNoteAction {
  type: typeof ADD_NOTE,
  payload: any
}

export type NoteActionTypes = GetNotesAction | AddNoteAction;
