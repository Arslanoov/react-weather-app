import * as React from 'react';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './index.scss';

interface Props {
  notes: Array<any>
}

const NotesList: React.FunctionComponent<Props> = ({ notes }: Props) => {
  return (
    <div className='notes-list'>
      {notes.map((note, index) => (
        <Card key={note.id + index} className="note" >
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Button as={Link} to={`/note/${note.id}`} variant="primary">View</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
};

export default NotesList;
