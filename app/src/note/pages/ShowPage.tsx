import * as React from 'react';

import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';

import Button from 'react-bootstrap/Button';

import NoteLayout from '../layouts/NoteLayout';
import withNoteService from '../hoc/withNoteService';
import { removeNote } from '../../store/actions/note';
import { Note } from '../services/noteService';

const ShowPage: React.FC = ({
  history, list, id, removeNote,
}: any) => {
  const idx: number = list.findIndex((note: Note) => note.id === id);
  const note = list[idx];
  if (!note) {
    return <Redirect to="/notes" />;
  }

  const onDelete = (e: Event) => {
    e.preventDefault();
    if (confirm('Are you sure?')) {
      removeNote(id);
      return history.push('/notes');
    }
  };

  return (
    <NoteLayout>
      <p>
        <Button variant="primary" to="/notes" as={Link}>
          Back to list
        </Button>
        <Button variant="primary" to={`/note/update/${id}`} as={Link} style={{ marginLeft: '20px' }}>Edit</Button>
        <Button variant="danger" onClick={onDelete} style={{ marginLeft: '20px' }}>Remove</Button>
      </p>

      <h3>{note.title}</h3>

      <div dangerouslySetInnerHTML={{ __html: note.description }} />
    </NoteLayout>
  );
};

interface StateProps {
  note: {
    list: Array<any>
  }
}

const mapStateToProps = ({ note: { list } }: StateProps) => ({ list });

const mapDispatchToProps = (dispatch: Dispatch, { noteService }: any) => bindActionCreators({
  removeNote: (id: string) => removeNote(noteService, id)(),
}, dispatch);

export default withRouter(
  compose(
    withNoteService(),
    connect(mapStateToProps, mapDispatchToProps),
  )(ShowPage),
);
