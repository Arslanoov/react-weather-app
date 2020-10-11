import * as React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './index.scss';

interface Props {
  notes: Array<any>
}

const NotesList: React.FunctionComponent<Props> = ({ notes }: Props) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Card key={note.id} className='note' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>
              {note.description.slice(0, 20)}
            </Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
};

export default NotesList;
