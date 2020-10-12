import * as React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';

import { Editor } from '@tinymce/tinymce-react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import NoteLayout from '../../layouts/NoteLayout';
import { addNote } from '../../../store/actions/note';
import withNoteService from '../../hoc/withNoteService';
import NoteServiceInterface from '../../services/noteService';

import './index.scss';

const CreatePage: React.FunctionComponent = ({ addNote, history }: any) => {
  const [ title, setTitle ] = React.useState('Title');
  const [ description, setDescription ] = React.useState('<p>Note content</p>');

  const onTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (content: string, editor: any) => {
    setDescription(content);
  };

  const onFormSubmit = (e: Event) => {
    e.preventDefault();
    addNote(title, description);
    history.push('/notes');
  };

  return (
    <NoteLayout>
      <h3>Create page</h3>
      <p>
        <Button variant='primary'  to='/notes' as={Link}>
          Back to list
        </Button>
      </p>

      <Form onSubmit={onFormSubmit} className='create-form'>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={onTitleChange} value={title} type="title" placeholder="Enter note title" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Editor
            initialValue={description}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={onDescriptionChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </NoteLayout>
  )
};

const mapStateToProps = () => {
  return { };
};

const mapDispatchToProps = (dispatch: Dispatch, { noteService }: { noteService: NoteServiceInterface }) => {
  return bindActionCreators({
    addNote: (title: string, description: string) => addNote(noteService, title, description)()
  }, dispatch);
};

export default compose(
  withNoteService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CreatePage);
