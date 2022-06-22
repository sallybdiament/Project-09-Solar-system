import React from 'react';
import PropTypes from 'prop-types';
import '../css/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="PlanetCard">
        <p className="planetName" data-testid="planet-name">
          { planetName }
        </p>
        <img className="img" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
