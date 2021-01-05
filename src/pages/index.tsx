import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchField } from '../actions';
import { Header, SearchBox, Scroll } from '../components';
import Robots from './robots';

const Home = () => {
  const dispatch = useDispatch();

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchField(e.target.value));

  return (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <Robots />
      </Scroll>
    </div>
  );
};

export default Home;
