export const FETCH_NOTES = 'GET_NOTES';

interface GetNotesAction {
  type: typeof FETCH_NOTES,
  payload: Array<any>
}

export type NoteActionTypes = GetNotesAction;
