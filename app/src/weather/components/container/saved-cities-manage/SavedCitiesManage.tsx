import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'store';
import { toggleEditMode } from 'store/slices/savedCities';

import ManageIcon from 'weather/components/presentational/manage-icon';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {
  className?: string;
};

const SavedCitiesManage: React.FC<Props> = ({ toggleNode, className = '' }) => (
  <ManageIcon className={className} onToggle={toggleNode} />
);

const mapStateToProps = () => ({
  // savedWeather: isEditModeSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleNode: () => dispatch(toggleEditMode()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavedCitiesManage);
