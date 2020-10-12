import { v4 as uuid } from 'uuid';
import NoteServiceInterface, { Note } from './noteService';

export default class DummyNoteService implements NoteServiceInterface {
  private data: Array<Note> = [
    {
      id: uuid(),
      title: 'Some note',
      description: 'Lotem ipsum doler sit amit...'
    },
    {
      id: uuid(),
      title: 'Some note 2',
      description: 'Lotem ipsum doler sit amit... 2'
    },
    {
      id: uuid(),
      title: 'Some note 3',
      description: 'Lotem ipsum doler sit amit... 3'
    },
    {
      id: uuid(),
      title: 'Some note 4',
      description: 'Lotem ipsum doler sit amit... 4'
    }
  ];

  getNotes(): Array<Note> {
    return this.data;
  }

  addNote(title: string, description: string): string {
    const id = uuid();

    this.data.push({
      id,
      title,
      description
    });

    return id;
  }

  updateNote(id: string, title: string, description: string): void {
    const idx: number = this.data.findIndex((note) => note.id === id);

    if (this.data[idx]) {
      this.data[idx] = {
        id: id,
        title: title,
        description: description
      };
    }
  }

  removeNote(id: string): void {
    this.data = this.data.filter((note) => note.id !== id);
  }
}
