import * as React from 'react';

import MainLayout from '../../../common/layouts/MainLayout';

const NoteLayout: React.FC = ({ children }) => (
  <MainLayout>
    {children}
  </MainLayout>
);

export default NoteLayout;
