import React from 'react';

import { PlusOutlined } from '@ant-design/icons';

import './index.scss';

type Props = {
  className?: string;
  onToggle?: () => void;
};

const ManageIcon: React.FC<Props> = ({ className = '', onToggle = () => {} }) => (
  <PlusOutlined role="link" className={`manage-icon ${className}`} onClick={() => onToggle()} />
);

export default ManageIcon;
