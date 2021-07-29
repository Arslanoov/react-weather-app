export interface Note {
  id: string,
  title: string,
  description: string
}

export default interface NoteServiceInterface {
  getNotes(): Array<Note>;

  addNote(title: string, description: string): string;

  updateNote(id: string, title: string, description: string): void;

  removeNote(id: string): void;
}
