import * as React from 'react';

import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';

import { Editor } from '@tinymce/tinymce-react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import NoteServiceInterface, { Note } from '../../services/noteService';
import NoteLayout from '../../layouts/NoteLayout';
import { updateNote } from '../../../store/actions/note';
import withNoteService from '../../hoc/withNoteService';

import './index.scss';

const UpdatePage: React.FC = ({
  history, list, id, updateNote,
}: any) => {
  const idx: number = list.findIndex((note: Note) => note.id === id);
  const note = list[idx];
  if (!note) {
    return <Redirect to="/notes" />;
  }

  const [title, setTitle] = React.useState(note.title);
  const [description, setDescription] = React.useState(note.description);

  const onTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (content: string, editor: any) => {
    setDescription(content);
  };

  const onFormSubmit = (e: Event) => {
    e.preventDefault();
    updateNote(id, title, description);
    return history.push(`/note/${id}`);
  };

  return (
    <NoteLayout>
      <h3>Update note</h3>
      <p>
        <Button variant="primary" to={`/note/${id}`} as={Link}>
          Back
        </Button>
      </p>

      <Form onSubmit={onFormSubmit} className="update-form">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={onTitleChange} value={title} type="title" placeholder="Enter note title" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Editor
            initialValue={note.description}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
            }}
            onEditorChange={onDescriptionChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </NoteLayout>
  );
};

interface StateProps {
  note: {
    list: Array<any>
  }
}

const mapStateToProps = ({ note: { list } }: StateProps) => ({ list });

const mapDispatchToProps = (dispatch: Dispatch, { noteService }: { noteService: NoteServiceInterface }) => bindActionCreators({
  updateNote: (id: string, title: string, description: string) => updateNote(noteService, {
    id,
    title,
    description,
  })(),
}, dispatch);

export default withRouter(
  compose(
    withNoteService(),
    connect(mapStateToProps, mapDispatchToProps),
  )(UpdatePage),
);
