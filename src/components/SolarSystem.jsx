import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import '../css/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    //   console.log(Planets);
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <article className="SolarSystem">
          { Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </article>
      </div>
    );
  }
}

export default SolarSystem;
