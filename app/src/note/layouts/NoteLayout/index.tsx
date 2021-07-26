import * as React from 'react';

import MainLayout from '../../../common/layouts/MainLayout';

const NoteLayout: React.FunctionComponent = ({ children }) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
};

export default NoteLayout;
