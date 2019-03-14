import React  from 'react';
import PropTypes from 'prop-types';

const SaveBar = ({onDiscardAction, open, onSave}) => (
  open ?
    <div className="SaveBar">
      <span>Seems like you modified something, want to save it? </span>
      <button onClick={onDiscardAction}>DISCARD</button>
      <button onClick={onSaveAction}>SAVE</button>
    </div>
    : null
);

SaveBar.PropTypes = {
  onDiscardAction: PropTypes.func,
  open: PropTypes.bool.isRequired,
  onSaveAction: PropTypes.func,
}

SaveBar.defaultProps = {
  onDiscardAction: () => console.info('DISCARD'),
  onSaveAction: () => console.info('SAVE'),
}

export default SaveBar;