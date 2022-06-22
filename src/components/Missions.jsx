import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';
import '../css/Mission.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <article className="Mission">
          { missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </article>
      </div>
    );
  }
}

export default Missions;
