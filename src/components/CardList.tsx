import React from 'react';
import { RobotProps } from '../containers/App';
import Card from './Card';

interface CardListProps {
  robots: Array<RobotProps>
}

const CardList = ({ robots }: CardListProps) => (
  <>
    {robots.map((robot) => (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    ))}
  </>
);

export default CardList;
