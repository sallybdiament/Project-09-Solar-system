import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <h2>
        { this.props.headline }
      </h2>
    );
  }
}

export default Title;
