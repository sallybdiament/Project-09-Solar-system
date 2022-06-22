import React from 'react';
import PropTypes from 'prop-types';
import '../css/Title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="Title">
        { headline }
      </h2>
    );
  }
}

export default Title;

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
