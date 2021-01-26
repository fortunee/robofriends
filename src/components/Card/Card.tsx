import React from 'react';
import { RobotProps } from '../../containers/App';

const Card = ({ id, name, email }: RobotProps) => (
  <div
    className="tc bg-light-blue dib br3 pa3 ma2 grow shadow-5 grow pointer
  "
  >
    <img 
    
    src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
    <div>
      <h2>{name}
      
      </h2>
      <p>{email}
      
      </p>
    </div>
  </div>
);

export default Card;
