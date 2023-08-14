// import { Component } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  // const { value, onChange } = this.props;
  return (
    <div>
      <label>
        Find contact by name
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
