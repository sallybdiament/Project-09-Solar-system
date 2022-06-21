import React from 'react';
// import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

export default PlanetCard;

// PlanetCard.PropTypes = {
//   planetName: PropTypes.string.isRequired,
//   planetImage: PropTypes.string.isRequired,
// };
