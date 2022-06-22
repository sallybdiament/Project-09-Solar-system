import React from 'react';
import PropTypes from 'prop-types';
import '../css/Mission.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="MissionCard" data-testid="mission-card">
        <p className="name" data-testid="mission-name">
          { name }
        </p>
        <article className="content">
          <p data-testid="mission-year">
            { year}
          </p>
          <p data-testid="mission-country">
            { country }
          </p>
          <p data-testid="mission-destination">
            { destination }
          </p>
        </article>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
