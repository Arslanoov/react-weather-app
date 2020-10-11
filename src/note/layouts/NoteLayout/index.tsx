import * as React from 'react';

import { NoteServiceProvider } from '../../contexts/NoteServiceContext';
import MainLayout from '../../../common/layouts/MainLayout';
import DummyNoteService from '../../services/dummyNoteService';

const NoteService = new DummyNoteService();

const NoteLayout: React.FunctionComponent = ({ children }) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
};

export default NoteLayout;
