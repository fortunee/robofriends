import React from 'react';
import Card, { CardProps } from './Card';

interface CardListProps {
  robots: Array<CardProps>
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
