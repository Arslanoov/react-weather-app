import React from 'react';

import { PlusOutlined } from '@ant-design/icons';

import './index.scss';

type Props = {
  className?: string;
  onToggle: () => void;
};

const ManageIcon: React.FC<Props> = ({ onToggle, className = '' }) => (
  <PlusOutlined className={`manage-icon ${className}`} onClick={() => onToggle()} />
);

export default ManageIcon;
